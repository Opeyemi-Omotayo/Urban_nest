import React from "react";
import Image from "next/image";

const Properties = [
    {
        img: "/assets/icon-apartment.png",
        type:"Apartment",
        number: 250,
        id:1,
        duration: 1200
    },
    {
        img: "/assets/icon-house.png",
        type:"House",
        number: 150,
        id:2,
        duration: 1400
    },
    {
        img: "/assets/icon-office.png",
        type:"Office",
        number: 70,
        id:3,
        duration: 1600
    },
    {
        img: "/assets/icon-shop.png",
        type:"Shop",
        number: 100,
        id: 4,
        duration: 1800
    }
]

const Card = () => {
  return (
    <>
    {Properties.map(property => (
        <div className="bg-green-200 cursor-pointer h-[200px] w-[100%] flex items-center justify-center" key={property.id} data-aos="fade-up" data-aos-duration={property.duration}>
      <div className="bg-white flex items-center justify-center flex-col h-[85%] w-[90%] border border-dotted hover:bg-green-400 hover:text-white transition-all duration-500">
        <div className="border flex items-center justify-center border-dotted bg-white border-green-500 rounded-full h-[80px] w-[80px]">
          <div className="">
            <Image src={property.img} alt="apartment" width={45} height={45} />
          </div>
        </div>
        <h1 className="font-bold">{property.type}</h1>
        <p>{property.number} properties</p>
      </div>
    </div>
    ))} 
    </>
  );
};

export default Card;
