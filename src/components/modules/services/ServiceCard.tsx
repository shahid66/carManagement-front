"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HybridServiceSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
      {/* Left Column (Image + Button) */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-serif leading-tight">
          Expert Hybrid Car Servicing in Dhaka <br />– Affordable Battery Prices
          & Repairs
        </h2>

        <Image
          src="/banner2.webp" // replace with your image
          alt="Hybrid Service"
          width={600}
          height={400}
          className="w-full rounded-md object-cover"
        />

        <Button
          variant="default"
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          Book Appointment
        </Button>
      </div>

      {/* Right Column (Text Content) */}
      <div className="space-y-6 text-sm leading-relaxed">
        <p>
          <strong>Check engine light diagnostics:</strong> Our scanners read
          even complex trouble codes...
        </p>

        <p>
          <strong>Air conditioner servicing:</strong> Includes disinfecting
          evaporator core and ventilation ducts...
        </p>

        <h3 className="text-lg font-semibold mt-6">
          Best Hybrid Car Service Package in Dhaka
        </h3>
        <p>
          Our Hybrid Master Service Package is a bumper-to-bumper maintenance
          extravaganza. It includes:
        </p>

        <ul className="list-disc ml-5">
          <li>Synthetic oil and filter change</li>
          <li>Battery monitoring and cleaning</li>
          <li>Tire rotation and wheel balancing</li>
          <li>Brake inspection with brake pad replacement</li>
          <li>Suspension, steering and driveline inspection</li>
          <li>
            <strong>Computerized wheel alignment</strong>
          </li>
          <li>Comprehensive safety system check</li>
          <li>Air filter and cabin air filter replacement</li>
          <li>Fuel system cleaning</li>
          <li>57-point inspection with full diagnostic report</li>
        </ul>

        <p className="font-medium">
          Priced at only Tk 16,500, our package delivers immense value.
        </p>

        <h3 className="text-lg font-semibold mt-6">
          Hybrid Car Repair and Maintenance Services
        </h3>
        <p>We also do Hybrid Car Repair and Maintenance:</p>
        <ul className="list-disc ml-5">
          <li>
            <strong>Battery Balancing and Restoration:</strong> We maximize
            efficiency
          </li>
          <li>
            <strong>Battery Pack Replacement:</strong> When required
          </li>
          <li>
            <strong>Hybrid Vehicle Service in Dhaka:</strong> All types of
            services
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">
          Why Should You Choose Biswas Automobiles?
        </h3>
        <p>
          Dhaka motorists prefer our garage for reliability and expert service.
        </p>
      </div>
    </section>
  );
}
