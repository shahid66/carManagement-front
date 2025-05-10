import { Star } from "lucide-react";

export default function StarRating({ rating }: { rating: number }) {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const emptyStars = totalStars - filledStars;

  return (
    <div className="flex items-center gap-1 text-sm text-gray-700">
      {Array(filledStars)
        .fill(0)
        .map((_, i) => (
          <Star key={`filled-${i}`} size={14} className="text-green-500 fill-green-500" />
        ))}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <Star key={`empty-${i}`} size={14} className="text-gray-300" />
        ))}
      <span className="ml-2">({Math.floor(Math.random() * 10)}) reviews</span>
    </div>
  );
}
