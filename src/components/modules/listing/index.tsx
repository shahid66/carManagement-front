"use client";

import { BFTable } from "@/components/ui/core/BFTable/index";

import { Button } from "@/components/ui/button";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

import DeleteConfirmationModal from "@/components/ui/core/BFModal/DeleteConfirmationModal";
import ViewModal from "@/components/ui/core/BFModal/ViewModal";
import TablePagination from "@/components/ui/core/BFTable/TablePagination";
import { deleteListing } from "@/services/partsService";
import { IListing } from "@/types/listing";
import { IMeta } from "@/types/meta";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";

const ManageListings = ({
  products,
  meta,
}: {
  products: IListing[];
  meta: IMeta;
}) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedListing, setSelectedListing] = useState<IListing | null>(null);
  // For tracking scroll position of the table
  const tableRef = useRef<HTMLDivElement | null>(null);
  const [tableScrollPosition, setTableScrollPosition] = useState(0);
  const handleDelete = (data: IListing) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.location);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteListing(selectedId);
        console.log(res);
        if (res.success) {
          toast.success(res.message);
          setModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const handleView = (event: React.MouseEvent, product: IListing) => {
    event.preventDefault();
    openTableModal();
    setSelectedListing(product);
    setViewModalOpen(true);
  };
  // Function to save current scroll position of the table
  const openTableModal = () => {
    if (tableRef.current) {
      setTableScrollPosition(tableRef.current.scrollTop); // Save scroll position of the table
    }
  };

  // Function to restore the scroll position after closing the modal
  const closeModal = () => {
    setViewModalOpen(false);
    if (tableRef.current) {
      tableRef.current.scrollTop = tableScrollPosition; // Restore scroll position of the table
    }
  };

  const columns: ColumnDef<IListing>[] = [
    {
      accessorKey: "images",
      header: "Image",
      cell: ({ row }) => (
        <div className="flex juc items-center space-x-3">
          <Image
            src={row.original.images[0]}
            alt={row.original.location}
            width={100}
            height={100}
            className="w-30 h-20 "
          />
          <span className="truncate">{row.original.location}</span>
        </div>
      ),
    },
    {
      accessorKey: "nof_bedroom",
      header: "Bed Room",
      cell: ({ row }) => (
        <span className="flex justify-center items-center">
          {row.original.nof_bedroom}
        </span>
      ),
    },
    {
      accessorKey: "details",
      header: "Details",
      cell: ({ row }) => <span>{row.original.details.slice(0, 30)}...</span>,
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <span>{row.original.category}</span>,
    },

    {
      accessorKey: "rent_amount",
      header: "Price",
      cell: ({ row }) => <span>$ {row.original.rent_amount.toFixed(2)}</span>,
    },

    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 hover:text-blue-500"
            title="View"
            onClick={(event) => handleView(event, row.original)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-green-500"
            title="Edit"
            onClick={() =>
              router.push(
                `/landlord/listing/update-listing/${row.original._id}`
              )
            }
          >
            <Edit className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-red-500"
            title="Delete"
            onClick={() => handleDelete(row.original)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Listings</h1>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/landlord/listing/add-listing")}
            size="sm"
          >
            Add Listing <Plus />
          </Button>
        </div>
      </div>
      <BFTable columns={columns} data={products || []} />
      <TablePagination totalPage={meta?.totalPage} />

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />

      <ViewModal
        isOpen={isViewModalOpen} // Open view modal state
        onClose={closeModal} // Close the modal and restore the scroll
        listing={selectedListing} // Pass the selected listing
      />
    </div>
  );
};

export default ManageListings;
