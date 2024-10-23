import React from 'react';

const teamMembers = [
  { name: 'NAVEEN VARMA', role: 'Chairperson', imgSrc: '/images/astroteam/current/execom/NAVEEN.jpg', linkedIn: 'https://www.linkedin.com/in/naveen-varma-539193259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', email: 'naveen@example.com' },
  { name: 'SAURAV', role: 'Vice Chairperson/Tech Lead', imgSrc: '/images/astroteam/current/execom/SAURAV S (1).jpg', linkedIn: 'https://www.linkedin.com/in/saurav', email: 'saurav@example.com' },
  { name: 'FIDHA V', role: 'Vice Chairperson', imgSrc: '/images/astroteam/current/execom/FIDHA V.jpg', linkedIn: 'https://www.linkedin.com/in/fidha-v', email: 'fidha@example.com' },
  { name: 'ABHIRAMI PS', role: 'Finance Officer', imgSrc: '/images/astroteam/current/execom/ABHIRAMI.jpg', linkedIn: 'https://www.linkedin.com/in/abhirami-p-s-525a18263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', email: 'abhirami@example.com' },
  { name: 'DURGA M', role: 'Secretary', imgSrc: '/images/astroteam/current/execom/DURGA.jpg', linkedIn: 'https://www.linkedin.com/in/durgam', email: 'durga@example.com' },
];

const Currentexecom = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl md:text-4xl font-bold astro-title2 mb-10 text-center mt-20 text-white">Execom</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex justify-center mb-12">
            <div className="bg-gray-800 shadow-lg rounded-lg w-44 p-1 border border-gray-500 hover:border-teal-400 transition duration-300 transform hover:scale-105">
              <img
                src={member.imgSrc}
                alt={`${member.name}'s photo`}
                className="w-full h-36 object-cover rounded-t-lg mb-3"
              />
              <h2 className="text-md font-bold text-center text-white">{member.name}</h2>
              <p className="text-teal-400 text-center text-sm">{member.role}</p>
              <div className="flex justify-center items-center space-x-4 mt-2">
                {/* LinkedIn Icon */}
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/linkedin.png"
                    alt="LinkedIn"
                    className="w-4 h-4 hover:scale-110 transition-transform duration-300"
                  />
                </a>
                {/* Email Icon */}
                <a href={`mailto:${member.email}`}>
                  <img
                    src="/images/gmail-logo.png"
                    alt="Email"
                    className="w-4 h-4 hover:scale-110 transition-transform duration-300"
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

export default Currentexecom;
