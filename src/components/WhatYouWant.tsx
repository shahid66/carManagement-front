// components/WhatYouWantSection.tsx

import { Building2, Gem, Home, Landmark } from "lucide-react"; // or use custom SVGs
import CategoryCard from "./CategoryCard";

export default function WhatYouWantSection() {
  return (
    <section className=" py-12 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">What You Want?</h2>
      <div className="h-1 w-12 bg-green-400 mx-auto mb-8 rounded-full" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        <CategoryCard icon={<Home />} title="Furnished Apartment" />
        <CategoryCard icon={<Building2 />} title="Residential Apartment" />
        <CategoryCard icon={<Landmark />} title="Office Space" />
        <CategoryCard
          icon={<Gem className="text-yellow-500" />}
          title="Luxury Apartment"
        />
      </div>
    </section>
  );
}
