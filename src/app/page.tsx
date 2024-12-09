import Image from 'next/image'
import Hero from '@/components/CustomComponents/Hero'
import About from '@/components/CustomComponents/About'
import WhatWeOffer from "@/components/CustomComponents/WhatWeOffer"
import About2 from "@/components/CustomComponents/About2"
import TestimonialsSection from '@/components/CustomComponents/Testimonials'


export default function Home() {
  return (
    <>
    <Hero></Hero>
    <WhatWeOffer />
    <About></About>
    <About2 />
    <TestimonialsSection/>
    </>
  )
}
