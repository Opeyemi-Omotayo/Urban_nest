import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AgentsType } from "@/types/types";

const agents: AgentsType[] = [
  {
    name: "Aliya Daniels",
    designation: "Consultant",
    image:
      "https://as2.ftcdn.net/v2/jpg/06/17/81/87/1000_F_617818750_ThLMPe2lsrVVWwEuhOfmckZK2HoLzSeU.jpg",
    id: 1,
  },
  {
    name: "Gu Pyeon",
    designation: "Consultant",
    image:
      "https://as1.ftcdn.net/v2/jpg/06/22/97/04/1000_F_622970467_0WcOoNRByzC0ZBZxMNjPIWqgdLogm5yR.jpg",
    id: 2,
  },
  {
    name: "Justina Wills",
    designation: "Consultant",
    image:
      "https://as2.ftcdn.net/v2/jpg/03/07/47/41/1000_F_307474173_RAULm4v7AFinHJ7Lr0IjQIg7UjignJv4.jpg",
    id: 3,
  },
  {
    name: "Grace Omotayo",
    designation: "Consultant",
    image:
      "https://as2.ftcdn.net/v2/jpg/04/86/59/89/1000_F_486598909_Fe7C8zNiF6okC3tgfUQCtr1V1DFu3Ler.jpg",
    id: 4,
  },
];

const Card = () => {
  return (
    <>
      {agents.map((agent) => (
        <div className="mt-10 overflow-hidden bg-white rounded shadow-md " key={agent.id}>
          <img
            className="h-[250px] w-[200px]"
            src={agent.image}
            alt={agent.name}
          />
          <div className=" flex items-center justify-center mt-[-1rem] cursor-pointer">
            <div className="p-2 mr-2 bg-white rounded-full shadow-md hover:text-white hover:bg-green-500">
              <BiLogoFacebook />
            </div>
            <div className="p-2 mr-2 bg-white rounded-full shadow-md hover:text-white hover:bg-green-500">
              <FaTwitter />
            </div>
            <div className="p-2 bg-white rounded-full shadow-md hover:text-white hover:bg-green-500">
              <BsInstagram />
            </div>
          </div>
          <div className="p-4 mt-3 text-center">
            <h5 className="mb-0 font-bold">{agent.name}</h5>
            <small>{agent.designation}</small>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
