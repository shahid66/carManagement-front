'use client';

import { Button } from "@/components/ui/button";

export default function OperatingHours() {
  return (
    <section className="w-full bg-white py-8 px-4 md:px-8 border-t">
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-xl p-6 md:p-10 shadow">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Autotalab: Accessible Time for Car Repair Services
        </h2>

        <ul className="text-sm md:text-base space-y-1 text-gray-700 mb-6">
          <li>
            <strong>Monday – Saturday:</strong> <span className="text-gray-500">9am to 6pm</span>
          </li>
          <li>
            <strong>Friday:</strong> <span className="text-gray-500">10am to 6pm</span>
          </li>
        </ul>

        <Button variant="default" className="text-sm">
          Book Your Appointment Now 📞
        </Button>
      </div>
    </section>
  );
}
