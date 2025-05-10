"use client";

import { BFTable } from "@/components/ui/core/BFTable/index";

import { Receipt } from "lucide-react";
import { useRouter } from "next/navigation";

import { paymentRequest } from "@/services/RequestService";
import { RentalRequest } from "@/types/request";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { toast } from "sonner";

type PaymentStatus = "Pending" | "Completed" | "Failed" | "Approved" | "paid";
const ManageRequests = ({ products }: { products: RentalRequest[] }) => {
  const router = useRouter();

  const handlePayment = async (id: any) => {
    try {
      const res = await paymentRequest(id);
      if (res?.data?.status === false) {
        toast.error(res?.data?.message);
      }

      console.log(res?.data?.message);

      if (res.success) {
        console.log(res);
        router.push(res.data);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const columns: ColumnDef<RentalRequest>[] = [
    {
      accessorKey: "images",
      header: "Image",
      cell: ({ row }) => (
        <div className="flex juc items-center space-x-3">
          <Image
            src={row.original.rentalHouse.images[0]}
            alt=""
            width={100}
            height={100}
            className="w-30 h-20 "
          />
          <span className="truncate">{row.original.rentalHouse.location}</span>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <span className="flex justify-center items-center">
          {row.original.status}
        </span>
      ),
    },
    {
      accessorKey: "landlordPhone",
      header: "LandLord Phone",
      cell: ({ row }) => (
        <span className="flex justify-center items-center">
          {row.original.landlordPhone !== null
            ? row.original.landlordPhone
            : "Need To Approved First"}
        </span>
      ),
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ row }) => <span>{row.original.paymentStatus}</span>,
    },

    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const status = row.original.status;
        const PaymentStatus = row.original.paymentStatus;
        return (
          <div className="flex items-center space-x-3">
            {status === "Approved" && PaymentStatus !== "Paid" ? (
              <button
                className="text-gray-500 hover:text-blue-500 flex gap-2"
                title="Payment"
                onClick={() => handlePayment(row.original._id)}
              >
                <Receipt className="w-5 h-5" /> Payment
              </button>
            ) : status === "Approved" && PaymentStatus === "Paid" ? (
              <>Rent SuccessFul</>
            ) : (
              <>Need To Approved First</>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Request</h1>
      </div>
      <BFTable columns={columns} data={products || []} />
      {/* <TablePagination totalPage={meta?.totalPage} /> */}
    </div>
  );
};

export default ManageRequests;
