import React, { useState } from "react";
import Card from "../elements/properties/Card";
import { ItemsType } from "@/types/types";

const items: ItemsType[] = [
  {
    name: "Beautiful Duplex",
    propertyType: "Apartment",
    propertyInfo: "rent",
    location: "Berlin, Germany",
    bed: 2,
    bath: 1,
    measurement: 1500,
    price: "950",
    image: "/assets/berlinhouse.jpg",
    id: 1,
  },
  {
    name: "Beautiful Duplex",
    propertyType: "Apartment",
    propertyInfo: "buy",
    location: "Berlin, Germany",
    bed: 2,
    bath: 1,
    measurement: 1500,
    price: "52,345",
    image: "/assets/berlinhouse.jpg",
    id: 2,
  },
  {
    name: "Beautiful Duplex",
    propertyType: "Apartment",
    propertyInfo: "rent",
    location: "Berlin, Germany",
    bed: 2,
    bath: 1,
    measurement: 1500,
    price: "12,123",
    image: "/assets/berlinhouse.jpg",
    id: 3,
  },
  {
    name: "Beautiful Duplex",
    propertyType: "Apartment",
    propertyInfo: "rent",
    location: "Berlin, Germany",
    bed: 2,
    bath: 1,
    measurement: 1500,
    price: "2,234",
    image: "/assets/berlinhouse.jpg",
    id: 4,
  },
];

const Properties = () => {
  const [properties, setProperties] = useState(items);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (value: string) => {
    setActiveFilter(value);
    if (value === "all") {
      setProperties(items);
    } else {
      setProperties(
        items.filter(
          (item) => item.propertyInfo.toLowerCase() === value.toLowerCase()
        )
      );
    }
  };

  return (
    <section className="px-4 lg:px-[8rem] mt-[5rem]">
      <h1 className="pb-4 text-4xl font-bold">Property Listing</h1>
      <div className="flex items-center justify-between">
        <h1 className="w-[60%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          dignissimos aspernatur ratione maxime aperiam optio.
        </h1>
        <ul className="justify-between hidden space-x-10 font-medium text-gray-500 cursor-pointer md:flex">
          <li
            onClick={() => handleFilter("all")}
            className={`cursor-pointer border border-green-500 w-[80px] rounded-md shadow-md text-center  py-2 ${
              activeFilter === "all" ? " bg-green-500 text-white" : ""
            }`}
          >
            Featured
          </li>
          <li
            onClick={() => handleFilter("rent")}
            className={`cursor-pointer border border-green-500 w-[70px] rounded-md shadow-md text-center py-2 ${
              activeFilter === "rent" ? " bg-green-500 text-white" : ""
            }`}
          >
            Rent
          </li>
          <li
            onClick={() => handleFilter("buy")}
            className={`cursor-pointer border border-green-500 w-[70px] rounded-md shadow-md text-center py-2 ${
              activeFilter === "buy" ? " bg-green-500 text-white" : ""
            }`}
          >
            Buy
          </li>
        </ul>
      </div>
      <section className="grid grid-cols-1 gap-6 mt-12 overflow-hidden md:grid-cols-2 lg:grid-cols-3 ">
      {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </section>
    </section>
  );
};

export default Properties;
