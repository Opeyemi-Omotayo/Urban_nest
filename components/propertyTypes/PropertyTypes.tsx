import React from "react";
import Card from "../elements/propertyTypes/Card";

const PropertyTypes = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-col mt-[4rem]" data-aos="fade-up">
        <h1 className="mb-4 text-3xl font-bold">Property Types</h1>
        <p className="text-gray-800 w-[90%] lg:w-[70%] text-center">
          Choose from a variety of residential options, including spacious
          apartments, luxurious penthouses, and elegant townhouses, all designed
          to cater to your unique lifestyle. We offer versatile commercial
          spaces ideal for businesses, retail outlets, and offices, providing a
          prime location for growth and success.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-4 gap-6 overflow-hidden px-4 lg:px-[8rem] 2xl:px-[12rem]">
        <Card />
      </section>
    </>
  );
};

export default PropertyTypes;
