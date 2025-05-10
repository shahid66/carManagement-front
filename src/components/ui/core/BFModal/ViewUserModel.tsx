import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IUser } from "@/types/user";
import Image from "next/image";
import React from "react";

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: IUser | null;
}

const ViewUserModal: React.FC<ViewModalProps> = ({
  isOpen,
  onClose,
  user,
}: ViewModalProps) => {
  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Name: {user.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            <Image
              src={`${user?.image}|| ''`}
              width={80}
              height={80}
              alt="user"
            />
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <p>
            <strong>Phone:</strong> {user?.phone}
          </p>
          <p>
            <strong>Address:</strong> {user?.address}
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewUserModal;
