import React from 'react';

const teamMembers = [
  { name: 'SARAH ABRAHAM', role: 'MEDIA LEAD', imgSrc: '/images/astroteam/current/events/sarah.JPG', linkedIn: 'https://www.linkedin.com/in/sarah-abraham-b2740b285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', email: 'naveen@example.com' },
  { name: 'AJITH JEEJO', role: 'OUTREACH LEAD', imgSrc: '/images/astroteam/current/events/Ajith jeejo.JPEG', linkedIn: 'https://www.linkedin.com/in/sarah-abraham-b2740b285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', email: 'naveen@example.com' },
  { name: 'MALAVIKA', role: 'Vice Chairperson', imgSrc: '/images/astroteam/current/events/MALAVIKA.jpg' },
  { name: 'ASWIN', role: 'Finance Officer', imgSrc: '/images/astroteam/current/events/ASWIN.JPG' },
  { name: 'ARAVIND', role: 'Secretary', imgSrc: '/images/astroteam/current/events/ARAVIND.JPG' },
  { name: 'AKSHAY', role: 'Marketing Head', imgSrc: '/images/astroteam/current/events/AKSHAY.JPG' },
  { name: 'AKHILJITH', role: 'Content Head', imgSrc: '/images/astroteam/current/events/AKHILJITH P .JPG' },
];

const Eventscurrent = () => {
  return (
    <div className="container mx-auto py-10 text-white min-h-screen">
      <h1 className="text-4xl font-bold astro-title2 mb-10 text-center mt-20 mb-20">Events and Outreach Team</h1>

      {/* Lead Members (2 leads at the top) */}
      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 mb-12">
        {teamMembers.slice(0, 2).map((lead, index) => (
          <div key={index} className="bg-gray-800 shadow-lg rounded-lg w-44 p-1 border border-gray-500 hover:border-teal-400 transition duration-300 transform hover:scale-105 mb-4 md:mb-0">
            <img
              src={lead.imgSrc}
              alt={`${lead.name}'s photo`}
              className="w-full h-36 object-cover rounded-t-lg mb-3"
            />
            <h2 className="text-md font-bold text-center">{lead.name}</h2>
            <p className="text-teal-400 text-center text-sm">{lead.role}</p>
            {lead.linkedIn && lead.email && (
              <div className="flex justify-center items-center space-x-4 mt-2">
                <a href={lead.linkedIn} target="_blank" rel="noopener noreferrer">
                  <img src="/images/linkedin.png" alt="LinkedIn" className="w-4 h-4 hover:scale-110 transition-transform duration-300" />
                </a>
                <a href={`mailto:${lead.email}`}>
                  <img src="/images/gmail-logo.png" alt="Email" className="w-4 h-4 hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Rest of the Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-y-10">
        {teamMembers.slice(2).map((member, index) => (
          <div key={index} className="flex justify-center">
            <div className="bg-gray-800 shadow-lg rounded-lg w-44 p-1 border border-gray-500 hover:border-teal-400 transition duration-300 transform hover:scale-105">
              <img
                src={member.imgSrc}
                alt={`${member.name}'s photo`}
                className="w-full h-36 object-cover rounded-t-lg mb-3"
              />
              <h2 className="text-md mb-1 font text-center text-teal-400">{member.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventscurrent;
