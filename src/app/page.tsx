import Image from 'next/image'
import Hero from '@/components/CustomComponents/Hero'
import About from '@/components/CustomComponents/About'
import WhatWeOffer from "@/components/CustomComponents/WhatWeOffer"
import About2 from "@/components/CustomComponents/About2"
import TestimonialsSection from '@/components/CustomComponents/Testimonials'
import { DestinationCarousel } from '@/components/CustomComponents/Destanitation/DestinationCarousel'
import Footer from '@/components/CustomComponents/Footer'
import WhyChooseUs from '@/components/CustomComponents/WhyChooseUs'

export default function Home() {
  return (
    <>
    <Hero></Hero>
    <WhatWeOffer />
    <WhyChooseUs/>
    <About></About>
    <About2 />
    <TestimonialsSection/>

    <DestinationCarousel></DestinationCarousel>
    <Footer></Footer>
    </>
  )
}
