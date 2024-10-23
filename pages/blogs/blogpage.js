import React from "react";
import Link from "next/link";


const BlogPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-6xl font-bold text-white astro-title mb-20 text-center mt-20">bloGs</h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 text-center">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80"
          >
            <div className="block w-full h-full">
              <img
                alt="blog photo"
                src={blog.imageSrc}
                className="object-cover w-full max-h-40"
              />
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="mb-2 text-xl font-medium text-indigo-800 dark:text-white">
                  {blog.title}
                </p>
                <p className="font-light text-black-400 dark:text-black-300 text-md">
                  {blog.description}
                </p>
                {/* Use Link component from Next.js for navigation */}
                <Link href={`/blog/${blog.slug}`}>
                  <a className="font-bold bg-blue-800 text-white px-4 py-2 rounded mt-5 inline-block">
                    View
                  </a>
                </Link>
                <div className="flex items-center text-center mt-4">
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">{blog.author}</p>
                    <p className="text-gray-400 dark:text-gray-300">{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
