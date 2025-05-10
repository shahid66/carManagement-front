// app/schools/page.tsx or in your main component
import { SchoolCard } from "@/components/SchoolCard";

const schools = [
  {
    name: "Northview Elementary School",
    type: "Public Elementary School",
    grades: "K-5",
    students: 271,
    rating: 7,
    nearby: false,
  },
  {
    name: "Peifer Elementary School",
    type: "Public Elementary School",
    grades: "PK-4",
    students: 471,
    rating: 6,
    nearby: true,
  },
  {
    name: "John Wood Elementary School",
    type: "Public Elementary School",
    grades: "PK-4",
    students: 315,
    rating: 7,
    nearby: true,
  },
  {
    name: "Benjamin Franklin Mid School",
    type: "Public Middle School",
    grades: "6-8",
    students: 821,
    rating: 8,
    nearby: false,
  },
  {
    name: "Valparaiso High School",
    type: "Public High School",
    grades: "9-12",
    students: 2098,
    rating: 9,
    nearby: false,
  },
];

export default function School() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Nearest Place</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {schools.map((school, idx) => (
          <SchoolCard key={idx} {...school} />
        ))}
      </div>
    </div>
  );
}
