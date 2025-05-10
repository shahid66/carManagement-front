"use client";

import { Button } from "@/components/ui/button";
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
import { updateListingByAdmin } from "@/services/admin";
import { IListing } from "@/types/listing";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UpdateListingFormByAdmin({
  listing,
}: {
  listing: IListing;
}) {
  const [imageUrls, setImageUrls] = useState<string[]>(
    listing?.images || ["", "", "", ""]
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

  // Handle changes in the image URLs input
  const handleImageUrlChange = (index: number, value: string) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = value;
    setImageUrls(newImageUrls);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // Form data to send to backend
    const payload = {
      name: data.name,
      location: data.location,
      details: data.details,
      rent_amount: data.rent_amount,
      nof_bedroom: data.nof_bedroom,
      category: data.category,
      images: imageUrls.filter((url) => url.trim() !== ""), // Only include non-empty URLs
    };

    try {
      const res = await updateListingByAdmin(payload, listing._id);

      if (res.success) {
        toast.success(res.message);
        router.push("/admin/listing");
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
                  <FormLabel>Apartment Name </FormLabel>
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

          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Images</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {imageUrls.map((url, index) => (
                <FormItem key={index}>
                  <FormLabel>Image URL {index + 1}</FormLabel>
                  <FormControl>
                    <Input
                      value={url}
                      onChange={(e) =>
                        handleImageUrlChange(index, e.target.value)
                      }
                      placeholder={`Enter image URL ${index + 1}`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ))}
            </div>
          </div>

          <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Updating Listing....." : "Update Listing"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
