import React, { useState, useEffect } from "react";
import Card from "../elements/properties/Card";
import { PropertyTypes } from "@/types/types";
import Supabase from "../supabase/supabase";

const Properties = () => { 
  const [activeFilter, setActiveFilter] = useState("all");
  const [properties, setProperties] = React.useState<null | any>(null);
  const [filteredProperties, setFilteredProperties] = React.useState<PropertyTypes[] | null>(null);

  useEffect(() => {
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
  
    fetchProperties();
  }, []);

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
    <section className="px-4 lg:px-[8rem] mt-[5rem]">
      <h1 className="pb-4 text-4xl font-bold">Property Listing</h1>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <h1 className="w-[100%] lg:w-[60%] pb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          dignissimos aspernatur ratione maxime aperiam optio.
        </h1>
        <ul className="flex justify-between space-x-4 font-medium text-gray-500 cursor-pointer lg:space-x-10 md:flex">
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
      <section className="grid grid-cols-1 gap-6 mt-12 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
      {filteredProperties?.map((property:any) => (
          <Card key={property.id} property={property} />
        ))}
      </section>
    </section>
  );
};

export default Properties;
