import React from 'react'
import Background from '@/components/particles/bg'
import Contact from '@/components/contact'
import Navigation from '@/components'
import Teamcard from './teamcard'

const Team = () => {
  return (
    <div className="relative w-full h-full">
      <Background />
      <div className="relative z-10">
        <Navigation/>
        <Teamcard/>
        <Contact/>
      </div>
    </div>
  )
}

export default Team

