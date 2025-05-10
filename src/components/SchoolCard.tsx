// components/SchoolCard.tsx
import { Badge } from "@/components/ui/badge"
import { School } from "lucide-react"

type SchoolProps = {
  name: string
  type: string
  grades: string
  students: number
  rating: number
  nearby?: boolean
}

export function SchoolCard({
  name,
  type,
  grades,
  students,
  rating,
  nearby = false,
}: SchoolProps) {
  return (
    <div className="border rounded-xl p-4 flex justify-between items-start shadow-sm bg-white">
      <div>
        <h3 className="text-blue-700 font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{type}</p>
        <p className="text-sm mt-1 text-gray-700">Grades {grades}</p>
        <p className="text-sm text-gray-700">{students.toLocaleString()} Students</p>
        <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
          <School size={14} />
          {nearby ? "Nearby" : "Attendance Zone"}
        </div>
      </div>
      <div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-800 text-white font-bold text-sm">
          {rating}
          <span className="text-[10px] font-normal">/10</span>
        </div>
      </div>
    </div>
  )
}
