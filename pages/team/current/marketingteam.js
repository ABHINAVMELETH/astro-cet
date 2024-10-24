import React from 'react';

const teamMembers = [
  { name: 'KENZ ES', role: 'MARKETING LEAD', imgSrc: '/images/astroteam/current/marketing/kens.jpg', linkedIn: 'https://www.linkedin.com/in/naveenvarma', email: 'naveen@example.com' },
  { name: 'ABHIJITH S', role: 'Vice Chairperson/Tech Lead', imgSrc: '/images/astroteam/current/marketing/ABHIJITH.webp' },
  { name: 'ASLAM', role: 'Vice Chairperson', imgSrc: '/images/astroteam/current/marketing/ASLAM.jpg' },
  { name: 'ARJUN', role: 'Marketing Head', imgSrc: '/images/astroteam/current/marketing/ARJUN M B.jpg' },
  { name: 'NAYANA', role: 'Content Head', imgSrc: '/images/astroteam/current/marketing/NAYANA.PNG' },
  { name: 'NIHALA', role: 'Program Officer', imgSrc: '/images/astroteam/current/marketing/NIHALA SHERIN .jpg' },
  { name: 'JIGMATH', role: 'Designer', imgSrc: '/images/astroteam/current/marketing/JIGMAT.jpg' },
  { name: 'NITHU', role: 'Content Head', imgSrc: '/images/astroteam/current/marketing/NEETHU.jpeg' },
  { name: 'NAYANA', role: 'Program Officer', imgSrc: '/images/astroteam/current/marketing/NAYANA.PNG' },
];

const Marketingcurrent = () => {
  return (
    <div className="container mx-auto py-10 text-white min-h-screen">
      <h1 className="text-4xl md:text-4xl font-bold astro-title2 mb-10 text-center mt-20">Marketing Team</h1>

      {/* Team Leader */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-800 shadow-lg rounded-lg w-44 p-1 border border-gray-500 hover:border-teal-400 transition duration-300 transform hover:scale-105">
          <img
            src={teamMembers[0].imgSrc}
            alt={`${teamMembers[0].name}'s photo`}
            className="w-full h-36 object-cover rounded-t-lg mb-3"
          />
          <h2 className="text-md font-bold text-center">{teamMembers[0].name}</h2>
          <p className="text-teal-400 text-center text-sm">{teamMembers[0].role}</p>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <a href={teamMembers[0].linkedIn} target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" className="w-4 h-4 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href={`mailto:${teamMembers[0].email}`}>
              <img src="/images/gmail-logo.png" alt="Email" className="w-4 h-4 hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Rest of the Team */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-y-10">
        {teamMembers.slice(1).map((member, index) => (
          <div key={index} className="flex justify-center">
            <div className="bg-gray-800 shadow-lg rounded-lg w-44 p-1 border border-gray-500 hover:border-teal-400 transition duration-300 transform hover:scale-105">
              <img
                src={member.imgSrc}
                alt={`${member.name}'s photo`}
                className="w-full h-36 object-cover rounded-t-lg mb-3"
              />
              <h2 className="text-md mb-1 font-bold text-center text-teal-400">{member.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketingcurrent;

