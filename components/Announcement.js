import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,  // Disable arrows
  };

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/announcements");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAnnouncements(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <section className="text-white py-12 z-10 relative">
      <hr className="mx-auto max-w-3xl border-t border-gray-500 mt-20 mb-16" />
      <div className="text-center mt-7 stars-background p-5">
        <h1 className="md:text-4xl text-10xl font-bold text-white tracking-widest glow-effect hover-glow font-orbitron md:mb-4">
          Announcements
        </h1>
      </div>

      <div className="slider-container max-w-screen-lg mx-auto md:mt-10">
        <Slider {...sliderSettings}>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && announcements.map((announcement) => (
            <div key={announcement.id}>
              <div className="max-w-sm w-full lg:max-w-full lg:flex h-96 shadow-lg rounded-lg overflow-hidden">
                {/* Image Section */}
                <div
                  className="h-48 lg:h-auto lg:w-96 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l transform transition-transform hover:scale-105 duration-500"
                  title={announcement.title}
                >
                  <img
                    className="w-full h-full object-cover opacity-80"
                    src={announcement.image}
                    alt={announcement.title}
                  />
                </div>
                {/* Content Section */}
                <div className="border-r border-b border-l border-gray-700 lg:border-l-0 lg:border-t lg:border-gray-700 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-white font-bold text-2xl mb-2 tracking-widest uppercase hover:text-purple-400 transition-colors duration-300 font-orbitron glow-effect">
                      {announcement.title}
                    </div>
                    <p className="text-gray-300 text-lg font-quicksand tracking-wide italic">
                      {announcement.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Announcement;
