import { Button } from "@/components/ui/button";
import DeleteConfirmationModal from "@/components/ui/core/BFModal/DeleteConfirmationModal";
import ViewUserModal from "@/components/ui/core/BFModal/ViewUserModel";
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
import { deleteUsers, updateUserRole } from "@/services/admin";
import { IUser } from "@/types/user";
import { Eye, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ActionStatus = ({ row }: { row: any }) => {
  const [open, setOpen] = useState(false); // Modal state
  const [role, setRole] = useState(row.original.role); // Status state
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const handleDelete = (data: IUser) => {
    setSelectedId(data?._id);
    // setSelectedItem(data?.location);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteUsers(selectedId);
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

  const handleView = (event: React.MouseEvent, user: IUser) => {
    event.preventDefault();
    openTableModal();
    setSelectedUser(user);
    setViewModalOpen(true);
  };
  // Function to save current scroll position of the table
  const openTableModal = () => {
    setViewModalOpen(true);
  };

  // Function to restore the scroll position after closing the modal
  const closeModal = () => {
    setViewModalOpen(false);
  };

  const handleStatusChange = async (newStatus: string) => {
    setRole(newStatus);

    try {
      const res = await updateUserRole({ role: newStatus }, row.original._id);
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
            <DialogTitle>Manage User Role</DialogTitle>
          </DialogHeader>

          {/* Status Dropdown */}
          <Select onValueChange={handleStatusChange} defaultValue={role}>
            <SelectTrigger className="w-full border">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tenant">Tenant</SelectItem>
              <SelectItem value="landLord">LandLord</SelectItem>
            </SelectContent>
          </Select>

          {/* Close Button */}
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
      <button
        className="text-gray-500 hover:text-blue-500"
        title="View"
        onClick={(event) => handleView(event, row.original)}
      >
        <Eye className="w-5 h-5" />
      </button>
      <button
        className="text-gray-500 hover:text-red-500"
        title="Delete"
        onClick={() => handleDelete(row.original)}
      >
        <Trash className="w-5 h-5" />
      </button>

      <DeleteConfirmationModal
        name="User"
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />

      <ViewUserModal
        isOpen={isViewModalOpen} // Open view modal state
        onClose={closeModal} // Close the modal and restore the scroll
        user={selectedUser} // Pass the selected listing
      />
    </div>
  );
};

export default ActionStatus;
