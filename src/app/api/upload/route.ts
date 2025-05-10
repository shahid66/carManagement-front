import { v2 as cloudinary } from "cloudinary";
import formidable, { File } from "formidable";
import { NextRequest, NextResponse } from "next/server";
import { Readable } from "stream";

// Disable Next.js body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.NEXT_CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.NEXT_CLOUDINARY_API_KEY!,
  api_secret: process.env.NEXT_CLOUDINARY_API_SECRET!,
});

// Convert NextRequest (Web stream) to Node stream
function nextRequestToNodeReadable(req: NextRequest): Readable {
  const reader = req.body?.getReader();
  const stream = new Readable({
    async read() {
      if (!reader) {
        this.push(null);
        return;
      }

      const push = async () => {
        const { done, value } = await reader.read();
        if (done) {
          this.push(null);
        } else {
          this.push(Buffer.from(value));
          await push();
        }
      };

      await push();
    },
  });

  // @ts-ignore – Add fake headers to mimic IncomingMessage
  stream.headers = Object.fromEntries(req.headers.entries());
  return stream;
}

// Parse with formidable
async function parseForm(req: NextRequest): Promise<{ files: formidable.Files }> {
  const nodeReq = nextRequestToNodeReadable(req);
  const form = formidable({ multiples: true, keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(nodeReq as any, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ files });
    });
  });
}

// POST Handler
export async function POST(req: NextRequest) {
  try {
    const { files } = await parseForm(req);

    const rawFiles = files.images
      ? Array.isArray(files.images)
        ? files.images
        : [files.images]
      : [];

    const fileArray: File[] = rawFiles.filter((file): file is File => !!file);

    const uploadPromises = fileArray.map((file) =>
      cloudinary.uploader.upload(file.filepath, {
        folder: "your_folder_name",
      })
    );

    const results = await Promise.all(uploadPromises);
    const urls = results.map((r) => r.secure_url);

    return NextResponse.json({ success: true, urls });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Upload failed" },
      { status: 500 }
    );
  }
}
