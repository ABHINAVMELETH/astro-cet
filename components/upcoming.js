import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Upcoming = () => {
  const events = [
    {
      title: "test222",
      description: "It is a great way to promote the space deterioration method to check the redemption and ask for promotion.",
      imageUrl: "/images/yip.png", // Ensure consistency
    },
    {
      title: "Space Telecomping Workshop",
      description: "It is a great way to promote the space deterioration method to check the redemption and ask for promotion.",
      imageUrl: "/images/yip.png",
    },
    {
      title: "Rocket Science Basics",
      description: "An introductory workshop on the fundamentals of rocket science and space exploration.",
      imageUrl: "/images/yip.png",
    },
    {
      title: "Astrophysics Seminar",
      description: "Join us for an in-depth seminar on the latest discoveries in astrophysics and space technology.",
      imageUrl: "/images/yip.png",
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
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-70"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 transition-opacity duration-300 group-hover:opacity-80"></div>
                <h3 className="z-10 mt-3 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-300 group-hover:text-shadow-lg">
                  {event.title}
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 transition-colors duration-300 group-hover:text-gray-100 group-hover:text-shadow-lg">
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
