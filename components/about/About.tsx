import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Button from "../elements/button/Button";

const About = () => {
  return (
    <section className="flex items-center justify-between px-4 lg:px-[8rem] mt-[5.5rem]">
      <div className="flex items-center w-[47%]">
        <div className="w-[60%] h-[450px] clip-path bg-green-500"></div>
        <div className="ml-[-15rem] z-[9999] w-[100%] h-[400px] bg-img1"></div>
      </div>
      <div className="w-[47%]">
        <h1 className="text-3xl lg:text-4xl font-bold pb-4">#1 Place To Find The Perfect Property </h1>
        <p className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          voluptatum explicabo saepe voluptates deserunt cum, dolores amet
          aspernatur fugit maxime?
        </p>
        <ul>
          <li className="flex items-center ">
            <span className="text-green-500 mr-4">
              <AiOutlineCheck />
            </span>
            Lorem ipsum dolor sit.
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-4">
              <AiOutlineCheck />
            </span>
            Lorem ipsum dolor sit.
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-4">
              <AiOutlineCheck />
            </span>
            Lorem ipsum dolor sit.
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-4">
              <AiOutlineCheck />
            </span>
            Lorem ipsum dolor sit.
          </li>
        </ul>
        <Button className=" w-40 bg-primary my-8 text-white bg-green-500 rounded-lg animate-bounce">
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default About;
