import React from "react";
import Card from "../elements/testimonial/Card";

const Testimonial = () => {
  return (
    <>
      <section
        className="flex items-center justify-center flex-col mt-[4rem] mb-[4rem] "
        data-aos="fade-up"
      >
        <h1 className="mb-4 text-3xl font-bold">What Our Clients Say</h1>
        <p className="text-gray-800 w-[90%] lg:w-[50%] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quis
          odio explicabo inventore nemo dolorem, rem deserunt facilis architecto
          quidem!
        </p>
      </section>
      <Card />
    </>
  );
};

export default Testimonial;
