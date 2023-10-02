import React from 'react';
import Card from '../elements/propertyAgents/Card';

const PropertyAgents = () => {
  return (
    <section className="flex items-center justify-center flex-col mt-[5.5rem] mb-[4rem]">
    <h1 className="mb-4 text-3xl font-bold">Property Agents</h1>
        <p className="text-gray-800 w-[90%] lg:w-[70%] text-center">
          Choose from a variety of residential options, including spacious
          apartments, luxurious penthouses, and elegant townhouses, all designed
          to cater to your unique lifestyle. We offer versatile commercial
          spaces ideal for businesses, retail outlets, and offices, providing a
          prime location for growth and success.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden px-4 lg:px-[8rem] ">
            <Card />
      </section>
    </section>
  )
}

export default PropertyAgents;