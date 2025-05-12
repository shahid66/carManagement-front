"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
type Product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
};

export default function PartCard({ part }: { part: Product }) {
  console.log("test");
  return (
    <Card className="w-full max-w-sm shadow-lg rounded-none overflow-hidden py-0 pb-6">
      {/* <div className="relative w-full h-48">
        <Image
          src={part?.images[0]}
          alt={part?.location}
          layout="fill"
          objectFit="cover"
        />
      </div> */}
      <CardHeader>
        <CardTitle className="text-lg font-semibold capitalize">
          {part?.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-2 font-bold capitalize">
          {part?.category}
        </p>
        <p className="text-gray-600 text-sm mb-2">{part?.stock}</p>
        <p className="text-gray-800 font-bold">Rent: ${part?.price} / month</p>

        <Link href={`/rental/${part?._id}`} passHref>
          <Button className="mt-4 w-full text-white hover:bg-green-400 bg-slate-700">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
