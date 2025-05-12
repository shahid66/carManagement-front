"use client";

import { updateProfile } from "@/services/partsService";
import { IUser } from "@/types/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function EditProfilePage({ userData }: { userData: IUser }) {
  const router = useRouter();
  const [user, setUser] = useState({
    name: userData?.name || "",
    phone: userData?.phone || "Full Stack Developer | Tech Enthusiast",
    address: userData?.address || "New York, USA",
    city: userData?.city || "/avatar.png",
    image: userData?.image || "", // Default image
    imageUrl: "", // New field for image URL input
  });

  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(userData.image || "");

  const [imageFiles, setImageFiles] = useState<File[] | []>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file) {
      setImageFiles((prev) => [...prev, file]);
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the data to send to the backend
    let imageProcessUrl = user.imageUrl;
    if (imageFiles.length > 0) {
      const formData = new FormData();
      imageFiles.forEach((file) => formData.append("images", file));

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();
      imageProcessUrl = uploadData.urls[0]; // Assuming the API returns an array of URLs
      if (!uploadData.success) {
        toast.error("Image upload failed");
        return;
      }
    }
    const data = {
      name: user.name,
      phone: user.phone,
      address: user.address,
      city: user.city,
      image: imageFiles ? imageProcessUrl : user.imageUrl, // Use selected image if available, else the URL
    };

    try {
      setIsLoading(true);
      const res = await updateProfile(data); // Send the data as JSON
      if (res.success) {
        setIsLoading(false);
        router.push(`/${userData.role}/profile`);
        toast.success("Profile updated successfully!");
      }
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      toast.error("Error updating profile");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Profile Picture Upload */}
        <div className="flex flex-col items-center">
          <Image
            src={previewImage || "/default-avatar.png"} // Fallback if previewImage is empty
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full w-[120px] h-[120px] border-4 border-gray-300"
          />
        </div>

        {/* Image File Upload */}
        <div>
          <label className="block font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Name Input */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* City Input */}
        <div>
          <label className="block font-medium">City</label>
          <input
            type="text"
            name="city"
            value={user.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Phone Input */}
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Address Input */}
        <div>
          <label className="block font-medium">Address</label>
          <textarea
            name="address"
            value={user.address}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading} // Disable button when loading
          className={`w-full px-4 py-2 text-white rounded-lg ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
