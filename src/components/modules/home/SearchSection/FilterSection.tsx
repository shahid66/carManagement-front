"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "@/constants";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterSection() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const hasAnyFilter =
    searchParams.has("searchTerm") ||
    searchParams.has("minPrice") ||
    searchParams.has("maxPrice") ||
    searchParams.has("category");

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || ""
  );
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");

  // Update state when searchParams change (if necessary)
  useEffect(() => {
    setSearchTerm(searchParams.get("searchTerm") || "");
    setMinPrice(searchParams.get("minPrice") || "");
    setMaxPrice(searchParams.get("maxPrice") || "");
    setCategory(searchParams.get("category") || "");
  }, [searchParams]);

  const handleSearchQuery = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (searchTerm) params.set("searchTerm", searchTerm);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (category) params.set("category", category);

    router.push(`${"/rental"}?${params.toString()}`, {
      scroll: false,
    });
  };
  const handleClear = () => {
    router.push(`${"/rental"}`, {
      scroll: false,
    });
  };
  return (
    <div className="flex flex-col p-6 ">
      {hasAnyFilter && (
        <div>
          <Button onClick={handleClear} className="mt-4">
            Clear
          </Button>
        </div>
      )}
      <div>
        <label htmlFor="" className="text-sm text-slate-300 my-2">
          Location
        </label>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white"
          placeholder="Where do you want to live?"
        />
      </div>
      <div>
        <label htmlFor="" className="text-sm text-slate-300 my-2">
          Category
        </label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="SELECT CATEGORY" />
          </SelectTrigger>
          <SelectContent>
            {Category.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="" className="text-sm text-slate-300 my-2">
          Price
        </label>
        <div className="flex items-center gap-2">
          <Input
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="minPrice"
            type="number"
            className="bg-white"
          />
          <span>—</span>
          <Input
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="maxPrice"
            type="number"
            className="bg-white"
          />
        </div>
      </div>
      <Button onClick={handleSearchQuery} className="mt-4">
        Check Availability
      </Button>
    </div>
  );
}
