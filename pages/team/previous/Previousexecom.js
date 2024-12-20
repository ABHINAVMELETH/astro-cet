import React from 'react';

const teamMembers = [
  { name: 'CAREN LAURETTE', role: 'CEO', imgSrc: '/images/astroteam/prev/execom/caren.jpg', linkedIn: 'h', email: 'naveen@example.com' },
  { name: 'HARIKRISHNAN S', role: 'COO', imgSrc: '/images/astroteam/prev/execom/Hari.jpg', linkedIn: 'https://www.linv', email: 'saurav@example.com' },
  { name: 'AKSHAY SANTHOSH', role: 'CMO', imgSrc: '/images/astroteam/prev/execom/akshay.jpg', linkedIn: 'https://wwwv', email: 'fidha@example.com' },
  { name: 'AHSAN JAVAD', role: 'CFO', imgSrc: '/images/astroteam/prev/execom/javad.jpg', linkedIn: 'https://wps', email: 'abhirami@example.com' },
  { name: 'SAURAV S', role: 'Content Head', imgSrc: '/images/astroteam/prev/execom/SAURAV.jpg', linkedIn: 'https://www.linkedin.com/in/saurav-s-39b097258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', email: 'abhirami@example.com' },
  { name: 'LAKSHMI R', role: 'Media Lead', imgSrc: '/images/astroteam/prev/execom/lekshmi.jpg', email: 'durga@example.com' },
  { name: 'RANJANA C J', role: 'Web Lead', imgSrc: '/images/astroteam/prev/execom/ranjana.jpg', linkedIn: 'https://wk', email: 'hank@example.com' },
  { name: 'FATHIMA NIZAR', role: 'Program Officer', imgSrc: '/images/astroteam/prev/execom/fathima.jpg', linkedIn: 'https:/ivy', email: 'ivy@example.com' },
  { name: 'NAVEEN VARMA', role: 'Program Officer', imgSrc: 'images/astroteam/prev/execom/naveen.jpg', linkedIn: 'https://www.linkin/naveen-varma-539193259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', email: 'ivy@example.com' },
  { name: 'FIDHA V', role: 'Program Officer', imgSrc: 'images/astroteam/prev/execom/FIDHA V.jpg', linkedIn: 'https://www.linkedin.com/in/fidha-v', email: 'ivy@example.com' },
  { name: 'ABHIRAMI', role: 'Program Officer', imgSrc: 'images/astroteam/prev/execom/ABHIRAMI.jpg', linkedIn: 'https://www.linkedin.com/in/abhirami-p-s-525a18263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', email: 'ivy@example.com' },
];

const Previousexecom = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-10xl md:text-4xl font-bold astro-title2 mb-10 text-center mt-20 mb-20 text-white glow-effect hover-glow">
        ECOMM
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex justify-center">
            <div className="bg-gray-800 text-white shadow-lg rounded-lg w-44 p-1 transform hover:scale-105 transition-transform duration-300">
              {/* Image */}
              <img
                src={member.imgSrc}
                alt={`${member.name}'s photo`}
                className="w-full h-36 object-cover rounded-t-lg mb-2"
              />
              {/* Name */}
              <h2 className="text-md font-bold text-center text-white">
                {member.name}
              </h2>
              {/* Role */}
              <p className="text-gray-300 text-center text-sm">{member.role}</p>
              
              {/* Social Icons */}
              <div className="flex justify-center items-center space-x-4 mt-3">
                {/* LinkedIn Icon */}
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/linkedin.png"
                    alt="LinkedIn"
                    className="w-5 h-5 hover:scale-110 transition-transform duration-300"
                  />
                </a>
                {/* Email Icon */}
                <a href={`mailto:${member.email}`}>
                  <img
                    src="/images/gmail-logo.png"
                    alt="Email"
                    className="w-5 h-5 hover:scale-110 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Previousexecom;
