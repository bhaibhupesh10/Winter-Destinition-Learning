import Image from 'next/image'
import Hero from '@/components/CustomComponents/Hero'
import About from '@/components/CustomComponents/About'
import WhatWeOffer from "@/components/CustomComponents/WhatWeOffer"


export default function Home() {
  return (
    <>
    <Hero></Hero>
    <WhatWeOffer />
    <About></About>
    </>
  )
}
