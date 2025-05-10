"use client";
import { requestSchema } from "@/app/(WithCommonLayout)/rental/[rentalId]/requestValidation";
import DetailsCards from "@/components/DetailsCards";
import School from "@/components/School";
import { Button } from "@/components/ui/button";
import BFContainer from "@/components/ui/core/BFContainer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/context/UserContext";
import { addRequest } from "@/services/RequestService";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
export interface House {
  _id: string;
  name: string;
  location: string;
  images: string[];
  details: string;
  rent_amount: number;
  nof_bedroom: number;
  user: {
    name: string;
    phone: string;
    _id: string;
  };
}
export interface RequestStatus {
  _id?: string;
  user?: string;
  rentalHouse?: string;
  landlord?: string;
  phone?: string;
  landlordPhone?: null;
  message?: string;
  status?: string;
  paymentStatus?: string;
}

const RentalHouseDetails = ({
  house,
  requestStatus,
}: {
  house: House;
  requestStatus: RequestStatus;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUser();
  const [showImg, setShowImg] = useState(house?.images[0]);
  const form = useForm({
    resolver: zodResolver(requestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const {
    formState: { isSubmitting },

    reset,
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    const modifiData = {
      rentalHouse: house?._id,
      landlord: house?.user?._id,
      phone: data.phone,
      message: data.message,
    };
    formData.append("rentalHouse", house?._id);
    formData.append("landlord", house?.user?._id);

    formData.append("phone", data.phone);
    formData.append("message", data.message);
    if (!user) {
      router.push(`/login?redirectPath=${pathname}`);
    } else {
      try {
        const res = await addRequest(modifiData);

        if (res.success) {
          toast.success(res.message);

          reset();
          // router.push(`/tenant/request`);
        } else {
          toast.error(res.message);
        }
      } catch (err: unknown) {
        console.error(err);
      }
    }
  };
  return (
    <BFContainer>
      <div className=" mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div className="col-1 md:col-span-2">
          <Image
            src={showImg}
            alt={house?.location}
            width={100}
            height={100}
            className="w-full"
          />
          <div className="flex gap-2 mt-2">
            {house?.images.map((item, index) => (
              <div onClick={() => setShowImg(item)} key={index}>
                {" "}
                <Image src={item} alt="" width={200} height={200} />{" "}
              </div>
            ))}
          </div>
        </div>
        {user !== null && user?.role === "tenant" ? (
          requestStatus === null ? (
            <div className="p-4 border rounded-xl shadow-lg max-h-5/6">
              <h3 className="text-xl font-bold mb-4">Book This Apartment</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="my-5">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Messages</FormLabel>
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

                  <Button
                    type="submit"
                    className="mt-5 w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Requesting..." : "Send Request"}
                  </Button>
                </form>
              </Form>
            </div>
          ) : (
            <div>
              {requestStatus?.status === "Pending" ? (
                <div className="p-4  max-h-5/6 bg-sky-100 rounded-xl shadow-lg">
                  {" "}
                  <h3>
                    Status:{" "}
                    <span className="font-bold"> {requestStatus?.status}</span>
                  </h3>
                  <p>
                    Your Request Status Now Pending.Please wait Landlord review
                    your request. He Approved or Reject your Request. please
                    wait...
                  </p>
                </div>
              ) : requestStatus?.status === "cancled" ? (
                <div className="p-4 border rounded-xl shadow-lg max-h-5/6">
                  {" "}
                  <h3>
                    Status:{" "}
                    <span className="font-bold text-red-400">
                      {" "}
                      {requestStatus?.status}
                    </span>
                  </h3>
                  <p>
                    Your Request Status Now {requestStatus?.status}. Thank you
                    for your interest.
                  </p>
                </div>
              ) : (
                <div className="p-4 border rounded-xl shadow-lg max-h-5/6">
                  {" "}
                  <h3>
                    Status:{" "}
                    <span className="font-bold text-green-300">
                      {" "}
                      {requestStatus?.status}
                    </span>
                  </h3>
                  <p>Your Request Status Now {requestStatus?.status}. Thanks</p>
                </div>
              )}
            </div>
          )
        ) : (
          <div>
            <h3 className="text-xl font-bold mb-4">Book This Apartment</h3>
            <p className="text-red-500">
              Please login as a tenant to book this apartment
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 mt-6">
        <div className="w-full">
          <DetailsCards house={house} />
        </div>

        <div className="w-4xl">
          <School />
        </div>
      </div>
    </BFContainer>
  );
};

export default RentalHouseDetails;
