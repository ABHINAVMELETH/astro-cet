import React from 'react';
import EventCard from './eventcard';

const Eventgrid = ({ events }) => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl text-6xl font-bold text-white astro-title mb-10 mt-20'>Events</h1>
      <div>
        <EventCard events={events} /> {}
      </div>
    </div>
  );
}

export default Eventgrid;
