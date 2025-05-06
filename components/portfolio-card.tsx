import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PortfolioCardProps {
  title: string
  imageUrl: string
  demoUrl: string
  category: string
}

export default function PortfolioCard({ title, imageUrl, demoUrl, category }: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            View Demo
            <ExternalLink className="h-3 w-3 ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
