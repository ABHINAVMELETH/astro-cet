import React from 'react';
import Background from '@/components/particles/bg';
import Contact from '@/components/contact';
import Navigation from '@/components';
import Eventgrid from './events'; 

const Events = ({ events }) => {
  return (
    <div className="relative w-full h-full">
      <Background />
      <div className="relative z-10">
        <Navigation />
        <Eventgrid events={events} /> {}
        <Contact />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:5000/api/events');
    const events = await res.json();

    return {
      props: {
        events,
      },
    };
  } catch (error) {
    console.error('Error fetching events:', error); // Log any errors
    return {
      props: {
        events: [], // Handle the error case by returning an empty array
      },
    };
  }
}

export default Events;
