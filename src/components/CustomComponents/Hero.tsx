import Image from "next/image"
import { CalendarIcon, MapPinIcon, Search, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/placeholder.svg"
        alt="Scenic coastal view with lighthouse"
        fill
        className="object-cover brightness-75"
        priority
      />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="space-y-4">
          <p className="text-white text-sm md:text-base tracking-wider uppercase">
            — Discover The World —
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif max-w-4xl mx-auto leading-tight">
            Enjoy Luxurious Adventures Trip With Us
          </h1>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg p-2 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr,1fr,1fr,auto] gap-2">
          {/* Destination */}
          <div className="relative">
            <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Switzerland" 
              className="pl-9"
            />
          </div>

          {/* Date Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-start text-left font-normal w-full"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Pick a date</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" />
            </PopoverContent>
          </Popover>

          {/* People Select */}
          <Select>
            <SelectTrigger>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                <SelectValue placeholder="4 People" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Person</SelectItem>
              <SelectItem value="2">2 People</SelectItem>
              <SelectItem value="3">3 People</SelectItem>
              <SelectItem value="4">4 People</SelectItem>
              <SelectItem value="5">5+ People</SelectItem>
            </SelectContent>
          </Select>

          {/* Search Button */}
          <Button className="bg-[#ff7757] hover:bg-[#ff7757]/90 text-white">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

