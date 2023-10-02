import React from "react";
import Button from "../elements/button/Button";
import { Sliderify } from "react-sliderify";

const Hero = () => {
  return (
    <section className="flex items-center bg-gray-50 justify-between flex-col-reverse px-4 lg:px-0 lg:flex-row mt-[-7rem] h-[90vh]">
      <div className=" w-[100%] lg:w-[47%] lg:pl-8 pt-[2rem] lg:pt-[4rem]  ">
        <h1 className="pb-4 text-3xl font-bold lg:text-4xl">
          Find the <span className="text-green-500">perfect home</span>
          <br /> for your family
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          consequatur aperiam omnis est facere fugiat esse mollitia pariatur vel
          facilis!
        </p>
        <Button className="w-40 my-8 text-white bg-green-500 rounded-lg bg-primary animate-bounce">
          Get Started Now
        </Button>
      </div>
      <div className="w-[100%] lg:w-[50%] h-[100%]">
        <Sliderify showNavDots={false}>
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/62/81/43/1000_F_462814326_Rg1qXonBpF4T6DAQ8T03LBXIGK497yc9.jpg"
            alt="house1"
            className="h-[90vh]"
          />
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/37/54/23/1000_F_437542364_rUKRUDlOQ2ZmVrsijNFUfrhxZO7jyOFg.jpg"
            alt="house2"
            className="h-[90vh]"
          />
        </Sliderify>
      </div>
    </section>
  );
};

export default Hero;
