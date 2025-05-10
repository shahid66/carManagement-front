"use client";

import { BadgeCheck, Bath, Bed, Grid2x2, MapPin } from "lucide-react";
import StarRating from "./StarRating";

interface House {
  _id: string;
  location: string;
  name: string;
  images: string[];
  details: string;
  rent_amount: number;
  nof_bedroom: number;
  user: {
    name: string;
    phone: string;
    _id: string;
  };
}

export default function DetailsCards({ house }: { house: House }) {
  return (
    <div className="max-w-3xl   p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">{house?.name}</h2>
          <p className="text-gray-600 flex items-center gap-1">
            <MapPin size={16} className="text-blue-500" />
            {house?.location}
          </p>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-700">
            {/* <div className="flex items-center gap-1">
              <Star size={14} className="text-green-500" />
              <Star size={14} className="text-green-500" />
              <Star size={14} className="text-green-500" />
              <Star size={14} className="text-green-500" />
              <Star size={14} className="text-gray-300" />
              (0 reviews)
            </div> */}
            <StarRating rating={4} />
            <span className="flex items-center gap-1">
              <BadgeCheck size={14} className="text-green-600" />
              Verified Listing
            </span>
            <span className="text-gray-400">• Today</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm font-medium text-gray-600">
        <div>
          <p>Rent: ${house?.rent_amount}/Month</p>
        </div>
        <div>
          <p className="flex gap-2">
            <Bed />
            {house?.nof_bedroom} bd
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            <Bath />1 – 2 ba
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            <Grid2x2 />
            612 – 998 sq ft
          </p>
        </div>
      </div>

      <div className="mt-6 md:mt-10 text-gray-700">
        <h2>
          About <span className="font-bold">{house?.name}</span>
        </h2>
        <p>{house?.details}</p>
      </div>

      <div className="mt-6">
        <iframe
          title="Dhaka Map"
          src="https://www.google.com/maps?q=Dhaka&output=embed"
          width="50%"
          height="250"
          className="rounded-xl border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
