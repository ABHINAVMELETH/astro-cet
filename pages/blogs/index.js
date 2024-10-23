import React from 'react'
import Background from '@/components/particles/bg'
import Contact from '@/components/contact'
import Navigation from '@/components'
import BlogGrid from './blogs'



const Blogs = () => {
  return (
    <div className="relative w-full h-full">
      <Background />
      <div className="relative z-10">
        <Navigation/>
        <BlogGrid/>
        <Contact/>
      </div>
    </div>
  )
}

export default Blogs
