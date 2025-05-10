import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IListing } from "@/types/listing";
import React from "react";

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing: IListing | null;
}

const ViewModal: React.FC<ViewModalProps> = ({
  isOpen,
  onClose,
  listing,
}: ViewModalProps) => {
  if (!listing) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>View Listing: {listing.location}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            <strong>Location:</strong> {listing.location}
          </p>
          <p>
            <strong>Bedrooms:</strong> {listing.nof_bedroom}
          </p>
          <p>
            <strong>Details:</strong> {listing.details}
          </p>
          <p>
            <strong>Category:</strong> {listing.category}
          </p>
          <p>
            <strong>Price:</strong> ${listing.rent_amount.toFixed(2)}
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

export default ViewModal;
