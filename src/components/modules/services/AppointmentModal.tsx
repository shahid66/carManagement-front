import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";

export function AppointmentModal() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-center text-4xl font-serif mb-4">
            Book an Appointment
          </h2>
          <hr className="mb-8 border-t" />

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input id="name" required />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" required />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" />
            </div>

            {/* Date */}

            {/* Car Brand */}
            <div>
              <Label htmlFor="brand">Car Brand *</Label>
              <Input id="brand" required />
            </div>

            {/* Car Model */}
            <div>
              <Label htmlFor="model">Car Model *</Label>
              <Input id="model" required />
            </div>

            {/* Car Number */}
            <div>
              <Label htmlFor="number">Car Number *</Label>
              <Input id="number" required />
            </div>

            {/* Services */}
            <div className="md:col-span-2">
              <Label htmlFor="services">Services</Label>
              <Input id="services" />
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" />
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
