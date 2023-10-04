import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Button from "../elements/button/Button";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-[8rem] 2xl:px-[12rem] mt-[4rem]">
      <div className="flex items-center w-[100%] lg:w-[47%] ">
        <div className="w-[60%] mr-4 h-[450px] shadow-lg clip-path bg-green-500"></div>
        <img src="https://as2.ftcdn.net/v2/jpg/04/62/81/43/1000_F_462814326_Rg1qXonBpF4T6DAQ8T03LBXIGK497yc9.jpg" alt="about" className="ml-[-11rem] md:ml-[-25rem] lg:ml-[-13rem] rounded-md z-[99] shadow-lg w-[90%] md:w-[80%] h-[400px]" />
      </div>
      <div className="w-[100%] lg:w-[47%] mt-8 lg:mt-0" data-aos="fade-in">
        <h1 className="pb-4 text-3xl font-bold lg:text-4xl">#1 Place To Find The Perfect Property </h1>
        <p className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          voluptatum explicabo saepe voluptates deserunt cum, dolores amet
          aspernatur fugit maxime?
        </p>
        <ul>
          <li className="flex items-center ">
            <span className="mr-4 text-green-500">
              <AiOutlineCheck />
            </span>
            Lorem ipsum dolor sit.
          </li>
          <li className="flex items-center">
            <span className="mr-4 text-green-500">
              <AiOutlineCheck />
            </span>
            Lorem ipsum dolor sit.
          </li>
          <li className="flex items-center">
            <span className="mr-4 text-green-500">
              <AiOutlineCheck />
            </span>
            Lorem ipsum dolor sit.
          </li>
          <li className="flex items-center">
            <span className="mr-4 text-green-500">
              <AiOutlineCheck />
            </span>
            Lorem ipsum dolor sit.
          </li>
        </ul>
        <Button className="w-40 my-8 text-white bg-green-500 rounded-lg bg-primary animate-bounce">
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default About;
