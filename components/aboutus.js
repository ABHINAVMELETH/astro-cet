import React from 'react';

const About = () => {
  return (
    <section className="bg-transparent z-10 relative">
      <div className="grid max-w-screen-xl place-self-center px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12 z-10">
        <div className="mr-auto place-self-center lg:col-span-8 text-center" style={{ marginLeft: "400px" }}>
          <h1 className="custom-max-width mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">ABOUT US</h1>
          <p className="custom-max-width mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center z-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-4 lg:flex z-10">
          {/* Placeholder for an image */}
          {/* <img src="image-source" alt="mockup" /> */}
        </div>
      </div>
    </section>
  );
};

export default About;
