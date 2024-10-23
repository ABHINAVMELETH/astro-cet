const teamMembers = [
    { name: 'Lekshmi R', role: 'social media lead', imgSrc: '/images/SELFPHOTO.jpg',linkedIn: 'https://www.linkedin.com/in/naveenvarma', email: 'naveen@example.com' },
    { name: 'SAURAV', role: 'vice chairperson/tech lead', imgSrc: '/images/SELFPHOTO.jpg' },
    { name: 'FIDHA V', role: 'vice chairperson', imgSrc: '/images/SELFPHOTO.jpg' },
    { name: 'ABHIRAMI PS', role: 'finance officer', imgSrc: '/images/SELFPHOTO.jpg' },
    { name: 'DURGA M', role: 'secretary', imgSrc: '/images/SELFPHOTO.jpg' },
    { name: 'Frank', role: 'Marketing Head', imgSrc: '/images/SELFPHOTO.jpg' },
    { name: 'Grace', role: 'Content Head', imgSrc: '/images/SELFPHOTO.jpg' },
    { name: 'Hank', role: 'Program Officer', imgSrc: '/images/SELFPHOTO.jpg' },
    { name: 'Ivy', role: 'Designer', imgSrc: '/images/SELFPHOTO.jpg' },
  ];
  
  const Socialmeadiateam = () => {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-4xl text-6xl font-bold astro-title2 mb-10 text-center mt-20 mb-20">Social Media</h1>
        
        {/* Team Leader */}
        <div className="flex justify-center mb-12">
          <div className="bg-white shadow-lg rounded-lg w-44 p-1">
            <img
              src={teamMembers[0].imgSrc}
              alt={`${teamMembers[0].name}'s photo`}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-bold text-center">{teamMembers[0].name}</h2>
            <p className="text-gray-700 text-center">{teamMembers[0].role}</p>
            <div className="flex justify-center items-center space-x-4 mt-2">
        {/* LinkedIn Icon */}
                  <a href="{member[0].linkedin}" target="_blank" rel="noopener noreferrer">
                         <img src="/images/linkedin.png" alt="LinkedIn"  className="w-5 h-5 hover:scale-110 transition-transform duration-300"/>
                  </a>
  
        {/* Email Icon */}
        <a href="{member[0].email}">
          <img
            src="/images/gmail-logo.png" 
            alt="Email" 
            className="w-5 h-5 hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
          </div>
        </div>
  
        {/* Rest of the Team */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-y-12">
          {teamMembers.slice(1).map((member, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-white shadow-lg rounded-lg w-44 p-1">
                <img
                  src={member.imgSrc}
                  alt={`${member.name}'s photo`}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-xl  mb-2 font text-center">{member.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Socialmeadiateam;
  
  