'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"


export default function About() {
  return (
    <div className="relative min-h-screen bg-[#FDF8F4] overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="relative">
            <div className="relative w-[600px] h-[600px] rounded-full overflow-hidden">
              <img
                src="/assets/about.webp"
                alt="Group of friends on vacation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Avatar Group Overlay */}
            <div className="absolute top-8 left-8 bg-white rounded-full py-2 px-4 shadow-lg flex items-center gap-2">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-white">
                  <AvatarFallback>

                    <img src="/assets/about/profile1.png" className="w-full h-full"></img>
                  </AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarFallback>
                    
                  <img src="/assets/about/profile2.png" className="w-full h-full"></img>
                    </AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarFallback>
                  <img src="/assets/about/profile3.png" className="w-full h-full"></img>
                    </AvatarFallback>
                </Avatar>
              </div>
              <span className="text-sm font-medium">
                <span className="text-coral-500">156+</span> Satisfied Clients
              </span>
            </div>
            {/* Mountain Logo */}
            <div className="absolute bottom-12 right-12 w-20 h-20 rounded-full bg-gradient-to-b from-orange-400 to-coral-500 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 20L14 4L6 20M2 20L10 4" />
              </svg>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="text-coral-500 font-medium">About Us</span>
              <h1 className="text-5xl font-serif font-bold">
                Unveil Prime Destinations With Us
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur caecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-coral-500">15k</div>
                  <div className="text-sm text-gray-600 mt-2">Success Journey</div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-coral-500">26+</div>
                  <div className="text-sm text-gray-600 mt-2">Awards Win</div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-coral-500">30+</div>
                  <div className="text-sm text-gray-600 mt-2">Years of Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

