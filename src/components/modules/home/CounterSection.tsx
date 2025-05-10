import BGIMG from "@/assets/slider-one.png";
import Image from "next/image";

export default function CounterSection() {
  return (
    <div className="relative w-full bg-black text-white py-16 my-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={BGIMG}
          alt="Background"
          fill
          className="object-cover opacity-70"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: "2500", label: "Clients" },
            { number: "3055", label: "Booking" },
            { number: "50", label: "Swimming" },
            { number: "1530", label: "Apartment" },
          ].map((item, index) => (
            <div key={index}>
              <h2 className="text-4xl font-bold">{item.number}</h2>
              <p className="text-lg font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
