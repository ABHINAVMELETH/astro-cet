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
        <Eventgrid/> {}
        <Contact />
      </div>
    </div>
  );
};



export default Events;
