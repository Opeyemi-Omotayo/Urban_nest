import React from "react";
import Button from "../elements/button/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
      {/* <div className="w-[50%] h-[100%]">
                <Carousel autoPlay={true}>
                    <div className=" bg-img1">
                    </div>
                    <div className=" bg-img2">
                    </div>
                </Carousel>
            </div> */}
      <div className=" w-[100%] lg:w-[50%] h-[100%] bg-img2">
       
      </div>
    </section>
  );
};

export default Hero;
