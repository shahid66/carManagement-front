"use client";
import { Button } from "@/components/ui/button";
import BFContainer from "@/components/ui/core/BFContainer";
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

export default function SearchForm({ title }: { title: string }) {
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

    if (location) params.set("searchTerm", searchTerm);
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
    <BFContainer>
      <div className="flex flex-col items-center justify-center gap-6 p-8">
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className="text-lg text-center">
          Search your <span className="font-bold">House</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-4xl m-auto">
          {/* Living Area */}
          <div>
            <label htmlFor="" className="text-sm text-slate-300 my-2">
              Location
            </label>
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
              placeholder="Where do you want to live?"
            />
          </div>

          {/* Type */}
          <div>
            <label htmlFor="" className="text-sm text-slate-300 my-2">
              Category
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Apartments" />
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

          {/* Price Range */}
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
              />
              <span>—</span>
              <Input
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="maxPrice"
                type="number"
              />
            </div>
          </div>
        </div>

        {hasAnyFilter && (
          <Button onClick={handleClear} className="mt-4">
            Clear
          </Button>
        )}

        <Button onClick={handleSearchQuery} className="mt-4">
          Check Availability
        </Button>
      </div>
    </BFContainer>
  );
}
