import React, { useEffect, useState } from "react";
import Supabase from "@/components/supabase/supabase";
import Card from "@/components/elements/properties/Card";
import { toast } from "react-toastify";
import Transaction from "../elements/Transaction";
import Slider from "../elements/Slider";

const Rentals = () => {
  const [properties, setProperties] = useState<null | any>(null);
  useEffect(() => {

    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      let { data, error } = await Supabase.from("properties").select();
      if (error) {
        toast.error("Error fetching data from Supabase");
      } else {
        setProperties(data);
      }
    } catch (err) {
      toast.error("An error occurred");
    }
  };

  return (
    <main className="flex mx-5 lg:flex-row flex-col justify-between lg:space-x-5">
      <div className="bg-white rounded-xl p-5 lg:w-6/12">
        <h3 className="text-xl font-bold pb-2">Rental Details</h3>
        <Slider />
        <nav className="flex justify-between py-3 text-text font-medium">
          <h3 className="border-b-2 border-green-500">
            Recommended Properties
          </h3>
          <p className="text-primary">View All</p>
        </nav>
        <div className=" flex flex-col md:flex-row space-x-5 gap-y-5 sm:gap-y-0 overflow-x-scroll">
          {properties?.map((property: any) => (
            <Card key={property.id} property={property} />
          ))}
        </div>
      </div>
      <Transaction />
    </main>
  );
};

export default Rentals;
