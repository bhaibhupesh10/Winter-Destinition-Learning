"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { DestinationCard } from "./DestanitatonCard"

const destinations = [
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Civita di Bagnoregio",
    stars: 4.8,
    people: 2,
    price: 128,
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Fort Conger Island",
    stars: 4.5,
    people: 2,
    price: 390,
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Barcelona City Beach",
    stars: 4.7,
    people: 1,
    price: 430,
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Barcelona City Beach",
    stars: 4.7,
    people: 1,
    price: 430,
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Barcelona City Beach",
    stars: 4.7,
    people: 1,
    price: 430,
  },
]

export function DestinationCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="text-sm text-red-500 font-medium">Best Places</span>
        <h2 className="text-2xl font-bold mt-2">Popular Destinations</h2>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {destinations.map((destination, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <DestinationCard {...destination} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="static rounded-full" />
          <CarouselNext className="static rounded-full" />
        </div>
      </Carousel>
    </div>
  )
}

