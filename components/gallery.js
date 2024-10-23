import React from "react";

const Gallery = () => {
  return (
    <section className="bg-transparent z-10 relative">
      <hr className="mx-auto max-w-3xl border-t border-gray-300 mt-20 mb-16" />
      <div className="text-center mt-7">
        <h1 className="text-4xl font-bold text-white">Gallery</h1>
      </div>

      <div className="container mx-auto px-5 py-2 lg:px-64 lg:pt-12 md:mx-auto md:mt-0 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "/images/gallery/galleryimg1.JPG",
            "/images/gallery/galleryimg2.JPG",
            "/images/gallery/galleryimg3.JPG",
            "/images/gallery/galleryimg4.JPG",
            "/images/gallery/galleryimg5.JPG",
            "/images/gallery/galleryimg6.JPG",
            "/images/gallery/galleryimg7.JPG",
            "/images/gallery/galleyimg8.JPG",
          ].map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                alt="gallery"
                className="h-48 w-48 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-lg object-cover object-center"
                src={src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
