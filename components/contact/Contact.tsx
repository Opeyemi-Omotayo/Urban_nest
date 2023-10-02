import React from "react";
import Button from "../elements/button/Button";
import { IoIosCall } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const Contact = () => {
  return (
    <div className="bg-green-200 flex items-center justify-center mx-4 lg:mx-[8rem] mt-[4rem] shadow-md">
      <div className="bg-white h-[90%] w-[95%] my-3 border border-dotted ">
        <div className="flex items-center flex-col lg:flex-row justify-between h-[100%]">
           <div className=" w-full lg:w-[40%] mb-4 lg:mb-0 ">
              <img
                src="/assets/obama.jpg" 
                alt="obama"
                className="h-[250px] w-[100%] lg:w-[90%] m-0 lg:m-4"
              />
          </div>

          <div className="w-[100%] lg:w-[60%] p-4">
            <h1 className="pb-4 text-2xl font-bold lg:text-4xl">
              Contact With <br/> Our Certified Agent
            </h1>
            <p className="pb-4 text-sm text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              reiciendis mollitia, quidem totam nulla aliquam incidunt cum
              beatae ea nostrum.
            </p>
            <div className="flex flex-col text-sm lg:flex-row">
              <Button className="flex items-center w-40 pl-2 mb-3 mr-4 bg-green-500 shadow-md">
                <IoIosCall className="text-white me-2" />
                Make a call
              </Button>
              <Button className="flex items-center shadow-md w-[13rem] pl-2 bg-green-800">
                <SlCalender className="text-white me-2" />
                Book an appoinment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
