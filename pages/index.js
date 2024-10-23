import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/components'
import Background from '@/components/particles/bg'
import Hero from '@/components/hero'
import Contact from '@/components/contact'
import Announcement from '@/components/Announcement'
import Upcoming from '@/components/upcoming'
import Gallery from '@/components/gallery'
import About from '@/components/aboutus'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Upcoming />
      <Announcement />
      
      
      <Gallery />
      {/* <About /> */}
      <Contact/>
      
      <Background/>
    </main>
  )
}
