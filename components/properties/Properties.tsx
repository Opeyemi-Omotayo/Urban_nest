import React, { useState, useEffect } from "react";
import Card from "../elements/properties/Card";
import { PropertyTypes } from "@/types/types";
import Supabase from "../supabase/supabase";

const Properties = () => { 
  const [activeFilter, setActiveFilter] = useState("all");
  const [properties, setProperties] = useState<null | any>(null);
  const [filteredProperties, setFilteredProperties] = useState<PropertyTypes[] | null>(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      let { data, error } = await Supabase.from('properties').select();
      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        setProperties(data);
        setFilteredProperties(data);
      }
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };

  const handleFilter = (value: string) => {
    setActiveFilter(value);
    if (value === "all") {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(
        properties.filter(
          (property:any) => property.propertyInfo.toLowerCase() === value.toLowerCase()
        )
      );
    }
  };

  return (
    <section className="px-4 lg:px-[8rem] 2xl:px-[12rem] mt-[4rem]">
      <h1 className="pb-4 text-4xl font-bold" data-aos="fade-right">Property Listing</h1>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <h1 className="w-[100%] lg:w-[60%] pb-4" data-aos="fade-right">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          dignissimos aspernatur ratione maxime aperiam optio.
        </h1>
        <ul className="flex justify-between space-x-4 font-medium text-gray-500 cursor-pointer lg:space-x-10 md:flex" data-aos="fade-left">
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
      <section className="grid grid-cols-1 gap-6 mt-10 overflow-hidden md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {filteredProperties?.map((property:any) => (
          <Card key={property.id} property={property} />
        ))}
      </section>
    </section>
  );
};

export default Properties;
