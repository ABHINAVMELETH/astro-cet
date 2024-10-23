import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-transparent z-10 relative">
      <div className="text-center mt-8 md:mt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white astro-title">astroCET</h1>
        <p className="text-white mt-4 font-thin">COLLEGE OF ENGINEERING TRIVANDRUM</p>

        <div className="mx-auto max-w-xs">
        <Image
  src="/images/Astroboy.png"
  alt="Astro-boy"
  width={400} // Increased width
  height={400} // Increased height
  className="mt-5" // Add additional classes for margins or styles
  sizes="(max-width: 768px) 100vw, 400px" // Adjust sizes to handle responsiveness
/>

        </div>

        <p className="text-white font-serif text-lg mt-8 mx-auto max-w-5xl md:max-w-3xl px-8 md:px-10 text-justify leading-relaxed tracking-wide">
          AstroCET is the esteemed astronomy club of the College of Engineering Trivandrum (CET). AstroCET has embarked on a journey of astronomical
          proportions over the past year. Established in 2019 as a humble hobby club, AstroCET has now evolved into a beacon of celestial exploration, fostering
          camaraderie among students while diving deeper into the technical facets of the cosmos.
        </p>
      </div>

      <div className="mt-4 md:mt-16 mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0">
          <div className="bg-gray-300 p-4 flex flex-col items-center justify-center text-center bg-opacity-0 text-white md:mx-0 mx-20 md:my-0 mt-10">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>

            <h2 className="text-xl font-bold">Vision</h2>
            <p className="md:px-10 mt-2 italic text-lg font-serif">
              AstroCET aims to lead in astronomy education and outreach, inspiring students and the public to explore the cosmos. By fostering skill development, collaborating with institutions, and promoting innovation, the club seeks to create an inclusive environment, expand its reach, and contribute to scientific knowledge.
            </p>
          </div>

          <div className="bg-gray-300 p-4 flex flex-col items-center justify-center text-center bg-opacity-0 text-white md:mx-0 mx-20 md:my-0 mt-5">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>

            <h2 className="text-xl font-bold">Mission</h2>
            <p className="md:px-10 mt-2 italic text-lg font-serif">
              The club's primary mission is to ignite a passion for astronomy among students and the general public, providing a platform for learning, exploration, and innovation.
            </p>
          </div>
        </div>
      </div>

      <hr className="mx-auto max-w-3xl border-t border-gray-300 mt-20 mb-16" />
    </section>
  );
};

export default Hero;
