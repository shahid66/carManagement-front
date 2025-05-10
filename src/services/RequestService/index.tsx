"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addRequest = async (sendRequest: any): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tenants/requests`,
      {
        method: "POST",
        body: JSON.stringify(sendRequest),
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
      }
    );
    revalidateTag("REQUEST");

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllRequest = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tenants/requests-ByUser`,
      {
        headers: {
          authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["REQUEST"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getSingleRequestByUser = async ({
  id,
  postId,
}: {
  id: string;
  postId: string;
}) => {
  try {
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tenants/requests/${id}/${postId}`,
      {
        headers: {
          authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["REQUEST"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const paymentRequest = async (id: string) => {
  console.log(id, "sfsdfsadf");
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tenants/payment/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["REQUEST"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const paymentVerify = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tenants/verify?order_id=${id}`,
      {
        method: "GET",

        headers: {
          authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["REQUEST"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
