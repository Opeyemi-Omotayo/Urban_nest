import React from 'react';
import Card from '../elements/testimonial/Card';

const Testimonial = () => {
  return (
    <section className="flex items-center justify-center flex-col mt-[5.5rem] mb-[4rem]">
    <h1 className="mb-4 text-3xl font-bold">What Our Clients Say</h1>
        <p className="text-gray-800 w-[90%] lg:w-[70%] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quis odio explicabo inventore nemo dolorem, rem deserunt facilis architecto quidem!
        </p>
        <Card />
    </section>
  )
}

export default Testimonial;