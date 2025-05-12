"use client";

import { Button } from "@/components/ui/button";
import BFImageUploader from "@/components/ui/core/BFImageUploader";
import ImagePreviewer from "@/components/ui/core/BFImageUploader/ImagePreviewer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Category } from "@/constants";
import { updateListing } from "@/services/partsService";
import { IListing } from "@/types/listing";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UpdateListingForm({ listing }: { listing: IListing }) {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>(
    listing.images || []
  );

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: listing?.name || "",
      location: listing?.location || "",

      details: listing?.details || "",
      rent_amount: listing?.rent_amount || "",
      nof_bedroom: listing?.nof_bedroom || "",
      category: listing?.category || "",
    },
  });

  const {
    formState: { isSubmitting },
    reset,
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let imageUrls = listing.images || []; // Existing image URLs from the listing
    // Form data to send to backend

    if (imageFiles.length > 0) {
      const formData = new FormData();
      imageFiles.forEach((file) => formData.append("images", file));

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();
      imageUrls = uploadData.urls; // Update imageUrls with the new uploaded images
      if (!uploadData.success) {
        toast.error("Image upload failed");
        return;
      }
    }
    const payload = {
      name: data.name,
      location: data.location,
      details: data.details,
      rent_amount: data.rent_amount,
      nof_bedroom: data.nof_bedroom,
      category: data.category,
      images: imageUrls, // Only include non-empty URLs
    };

    try {
      const res = await updateListing(payload, listing._id);

      if (res.success) {
        toast.success(res.message);
        router.push("/landlord/listing");
        reset();
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl p-5 ">
      <div className="flex flex-col justify-center items-center  mb-5 ">
        <span className="text-4xl">🏡</span>
        <h1 className="text-xl font-bold">Update House</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">Basic Information</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apartment Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nof_bedroom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Bed</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Select House Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Category.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rent_amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rent Amount</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-5">
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36 resize-none"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {imagePreview.length !== 4 && (
            <BFImageUploader
              setImageFiles={setImageFiles}
              setImagePreview={setImagePreview}
              label="Upload Image"
              className="w-fit mt-0"
            />
          )}
          <ImagePreviewer
            className="flex flex-wrap gap-4"
            setImageFiles={setImageFiles}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />

          <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Updating Listing....." : "Update Listing"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
