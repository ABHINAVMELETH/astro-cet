import React from 'react';
import EventCard from './eventcard.js'; // Make sure the case matches the file name

const Eventgrid = () => {
  return (
    <div className='text-center'>
      <h1 className='md:text-4xl text-10xl font-bold text-white astro-title mb-10 mt-20'>Events</h1>
      <div>
      <p className="mt-10 mb-10 text-white bg-blue-600 p-4 rounded-lg shadow-md">
  No events as of now
</p>

        {/*<EventCard />*/} {/* No props needed here since EventCard uses its own internal events array */}
      </div>
    </div>
  );
}

export default Eventgrid;
