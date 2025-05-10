import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bath, Bed, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export interface House {
  _id: number;
  location: string;
  name: string;
  images: string[];
  details: string;
  category: string;
  rent_amount: number;
  nof_bedroom: number;
}

export default function ApartmentCard({ house }: { house: House }) {
  return (
    <Card className="w-full max-w-sm shadow-lg rounded-none overflow-hidden py-0 pb-6">
      <div className="relative w-full h-48">
        <Image
          src={house?.images[0]}
          alt={house?.location}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold capitalize">
          {house?.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 flex items-center gap-1 text-sm capitalize font-semibold">
          <MapPin size={16} className="text-blue-500" />
          {house?.location}
        </p>
        <p className="text-gray-600 text-sm mb-2 font-bold capitalize">
          {house?.category}
        </p>
        <p className="text-gray-600 text-sm mb-2">
          {house?.details.slice(0, 40)}...
        </p>
        <p className="text-gray-800 font-bold">
          Rent: ${house?.rent_amount} / month
        </p>
        <div className="flex gap-2">
          <p className="text-gray-700 flex gap-2">
            <Bed />
            {house?.nof_bedroom}
          </p>
          <p className="text-gray-700 flex gap-2">
            <Bath />
            {2}
          </p>
        </div>
        <Link href={`/rental/${house?._id}`} passHref>
          <Button className="mt-4 w-full text-white hover:bg-green-400 bg-slate-700">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
