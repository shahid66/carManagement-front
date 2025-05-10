// components/HeroImage.tsx
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative w-full h-[300px] md:h-[600px]">
      <Image
        src="/ban.png" // Add your image inside public/ folder
        alt="Autotalab Service Van"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
