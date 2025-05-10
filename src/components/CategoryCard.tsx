// components/CategoryCard.tsx
import { ReactNode } from "react";

type CategoryCardProps = {
  icon: ReactNode;
  title: string;
};

export default function CategoryCard({ icon, title }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center hover:scale-105 transition-transform">
      <div className="text-teal-500 text-5xl">{icon}</div>
      <span className="text-sm text-gray-800">{title}</span>
    </div>
  );
}
