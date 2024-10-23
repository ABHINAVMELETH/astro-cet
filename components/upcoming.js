import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Upcoming = () => {
  const events = [
    {
      title: "Astrophotography workshop",
      description: "On 25 November 2023, ASTRO-CET hosted an astrophotography workshop with CET SHUTTERBUGS and AASTRO KERALA, led by renowned expert Sarath Prabhavu J.",
      imageUrl: "/images/pastevents/astrophotographwork.jpg", // Ensure consistency
    },
    {
      title: "Solar probing Workshop",
      description: "Expedition Aditya, held on 26 November 2023 in collaboration with Shastra Snehi, focused on solar probing and sunspot viewing, bringing together experts and participants to explore the Sun's dynamics.",
      imageUrl: "/images/pastevents/solarprobing.jpg",
    },
    {
      title: "GBFK outreach Program",
      description: "AstroCET's outreach at the ‘Global Science Festival Kerala’ featured Dr. Sarita Vig from IIST, inspiring students to pursue astronomy, followed by a sky-gazing session with the Breakthrough Science Society..",
      imageUrl: "/images/pastevents/GBFKoutreach.jpg",
    },
    {
      title: "AI/ML workshop",
      description: "Drishti’24 featured a standout AI/ML for Space Exploration workshop by AstroCET and HT Labs India. Over 70 participants learned Python-based data analysis and ML applications in astronomy, with hands-on experience using real astronomical data.",
      imageUrl: "/images/pastevents/workhopai.jpg",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sliderSettings = {
    dots: true,  // Keep the dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,  // Disable arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-transparent z-10 relative">
      <style>
        {`
          .slick-slide {
            padding: 0 8px;
          }

          .upcoming-image {
            flex: 1;
            overflow: hidden;
          }

          .upcoming-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .skeleton-card {
            height: 200px;
            background-color: #2e2e2e;
            border-radius: 12px;
            animation: pulse 1.5s infinite;
          }

          @keyframes pulse {
            0% {
              background-color: #2e2e2e;
            }
            50% {
              background-color: #3e3e3e;
            }
            100% {
              background-color: #2e2e2e;
            }
          }

          .slick-prev, .slick-next {
            z-index: 1;
          }
        `}
      </style>

      <div className="text-center">
        <h1 className="md:text-4xl text-10xl font-bold text-white tracking-widest glow-effect hover-glow font-orbitron md:mb-4">
          Past Events
        </h1>
      </div>

      <div className="container mx-auto px-4 mt-2 md:mt-4">
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="skeleton-card"></div>
              ))}
          </div>
        )}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <Slider {...sliderSettings}>
            {events.map((event, index) => (
              <article
              key={index}
              className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-10"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 transition-opacity duration-300 group-hover:opacity-80"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-black transition-colors duration-300 group-hover:text-yellow-300 group-hover:text-shadow-lg">
                {event.title}
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-black transition-colors duration-300 group-hover:text-gray-100 group-hover:text-shadow-lg">
                {event.description}
              </div>
            </article>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Upcoming;
