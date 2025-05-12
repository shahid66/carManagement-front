import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateListingRequest } from "@/services/partsService";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  phone: z
    .string()
    .min(11, { message: "Phone number must be at least 11 characters long" })
    .max(11)
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
  status: z.enum(["Pending", "Approved", "Rejected"], {
    message: "Invalid status selected",
  }),
});

const ActionCell = ({ row }: { row: any }) => {
  const [open, setOpen] = useState(false); // Modal state
  const [status, setStatus] = useState(row.original.status); // Status state
  const [phone, setPhone] = useState(row.original.landlordPhone);
  const [error, setError] = useState<string | null>(null);

  const handleStatusChange = async (newStatus: string) => {
    setStatus(newStatus); // Update UI first
    const result = schema.safeParse({ phone, status: newStatus });

    if (!result.success) {
      setError(result.error.errors[0].message); // Set the first error message
      return;
    } else {
      setError(null); // Clear errors if validation is successful
    }

    try {
      const res = await updateListingRequest(
        { status: newStatus, phone }, // Sending both status and phone number
        row.original._id
      );
      if (res.success) {
        toast.success(res.message);
        setOpen(false); // Close modal after success
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err?.message);
      toast.error("Failed to update status.");
    }
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Modal Trigger */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Manage</Button>
        </DialogTrigger>

        {/* Modal Content */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Rental Request</DialogTitle>
          </DialogHeader>

          {/* Phone Number Input */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <input
              required
              type="text"
              value={phone} // Controlled input for phone number
              onChange={(e) => setPhone(e.target.value)} // Update phone number
              className="w-full p-2 border rounded-md bg-gray-100 text-gray-700"
            />
          </div>
          {error && error.includes("Phone") && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Status Dropdown */}
          <Select onValueChange={handleStatusChange} defaultValue={status}>
            <SelectTrigger className="w-full border">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          {error && error.includes("status") && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Close Button */}
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ActionCell;
