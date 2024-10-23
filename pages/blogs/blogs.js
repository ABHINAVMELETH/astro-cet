// components/BlogGrid.js
import React from "react";
import Link from "next/link";

const blogs = [
  {
    title: "BLACK HOLE",
    imageSrc: "/images/yip.png",
    description: "Dive into the world of black holes and learn something amazing.",
    author: "Jean Jacques",
    date: "20 March 2029",
    slug: "black-hole",
  },
  {
    title: "SPACE EXPLORATION",
    imageSrc: "/images/yip.png",
    description: "Explore the vastness of space and the potential for human settlement.",
    author: "John Doe",
    date: "15 April 2029",
    slug: "space-exploration",
  },
  // Add more blog objects as needed
];

const BlogGrid = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold mt-10 astro-title">Blog Posts</h1>
      
      {/* Blog Post Grid */}

      {/* Hovering Astronaut Image */}
      <div className="text-center relative mt-20 md:mt-10 absolute left-0">
        <img
          src="/images/astronaut.png"
          alt="Astronaut"
          className="w-48 md:w-56 lg:w-64 floating"
        />
        <div className="absolute top-0 right-0 md:right-10 bg-white text-black p-2 rounded-full shadow-lg font-bold text-lg">
          <p className="animate-bounce">blogs coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
