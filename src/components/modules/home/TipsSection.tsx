import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const tips = [
  {
    title: "Set a Budget",
    description:
      "Determine your rental budget, including utilities and other expenses, to avoid financial strain.",
  },
  {
    title: "Choose the Right Location",
    description:
      "Consider proximity to work, schools, transportation, and amenities before finalizing a rental.",
  },
  {
    title: "Inspect the Property",
    description:
      "Check for damages, water leaks, and proper ventilation to ensure a comfortable living environment.",
  },
  {
    title: "Understand the Lease Agreement",
    description:
      "Read the lease thoroughly and clarify terms like rent increases, maintenance responsibilities, and deposit policies.",
  },
  {
    title: "Verify Security Features",
    description:
      "Ensure the house has secure locks, fire safety measures, and a safe neighborhood for better peace of mind.",
  },
];

export default function RentingTips() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h2 className="text-2xl text-center font-bold text-gray-900 mb-2">
        Tips for Finding and Renting the Right House
      </h2>
      <div className="h-1 w-12 bg-green-400 mx-auto mb-8 rounded-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <Card
            key={index}
            className="shadow-lg rounded-2xl border border-gray-200"
          >
            <CardHeader className="flex items-center space-x-3">
              <CheckCircle className="text-green-500" size={24} />
              <CardTitle className="text-lg font-semibold">
                {tip.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{tip.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
