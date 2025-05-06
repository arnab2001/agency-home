import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  testimonial: string
  website: string
}

export default function TestimonialCard({ name, location, testimonial, website }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 relative">
        <Quote className="absolute top-6 left-6 h-12 w-12 text-emerald-100" />
        <div className="relative z-10">
          <p className="text-lg italic mb-6 pt-8">{testimonial}</p>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold">{name}</span>
              <span>-</span>
              <span>{location}</span>
            </div>
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              {website}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
