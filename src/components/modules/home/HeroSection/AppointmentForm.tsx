"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { useState } from "react";

export default function AppointmentForm() {
  const [date, setDate] = useState<Date | undefined>();

  return (
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

        {/* Submit */}
        <div className="md:col-span-2">
          <Button type="submit" className="w-32">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
