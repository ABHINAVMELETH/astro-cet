import React from 'react';

const EventCard = ({ events }) => {
  const Card = ({ event }) => {
    return (
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start text-center mx-auto mb-16 md:mb-10 md:mt-20 mt-10'>
        <img src={event.imgSrc} alt="Event image" className="object-cover w-4/5 h-56 md:w-60 md:h-56 rounded-md" />
        <div className='md:ml-20 w-4/5 md:w-auto md:max-w-xl md:items-start md:text-left mt-10 md:mt-0'>
          <h1 className="mb-4 font-mono text-2xl text-orange-100 text-center md:text-left">{event.title}</h1>
          <p className='text-white md:w-96 text-center md:text-left'>{event.description}</p>
          {event.link && (
            <div className="flex justify-center md:justify-start mt-3">
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  Register
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  const defaultEvents = [];
  const displayEvents = events && events.length > 0 ? events : defaultEvents;

  return (
    <div className='container mx-auto py-10'>
      {displayEvents.map((event, index) => (
        <Card key={index} event={event} />
      ))}
    </div>
  );
};

export default EventCard;
