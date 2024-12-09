import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, Users, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

interface DestinationCardProps {
  image: string
  title: string
  stars: number
  people: number
  price: number
}

export function DestinationCard({
  image,
  title,
  stars,
  people,
  price,
}: DestinationCardProps) {
  return (
    <Card className="w-full max-w-[300px]">
      <CardContent className="p-0">
        <div className="relative h-[200px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">{stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">{people}</span>
          </div>
        </div>
        <h3 className="font-semibold">{title}</h3>
        <div className="flex w-full items-center justify-between">
          <span className="text-lg font-bold text-red-500">${price}</span>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Book Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

