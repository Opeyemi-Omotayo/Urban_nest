import React, {useEffect, useState} from "react";
import Properties from "@/components/properties/Properties";
import { Sliderify } from "react-sliderify";
import Supabase from "@/components/supabase/supabase";
import Card from "@/components/elements/properties/Card";

const Rentals = () => {
    const [properties, setProperties] = useState<null | any>(null);
    useEffect(() => {
        const fetchProperties = async () => {
          try {
            let { data, error } = await Supabase.from('properties').select();
            if (error) {
              console.error("Error fetching data from Supabase:", error);
            } else {
              setProperties(data);
              console.log(data);
            }
          } catch (err) {
            console.error("An error occurred:", err);
          }
        };
      
        fetchProperties();
      }, []);

  return (
    <main className="flex mx-5 lg:flex-row flex-col justify-between lg:space-x-5">
      <div className="bg-white rounded-xl p-5 lg:w-6/12">
        <h3 className="text-xl font-bold pb-2">Rental Details</h3>
        <Sliderify showNavDots={false}>
          <img
            src="https://as2.ftcdn.net/v2/jpg/05/20/95/15/1000_F_520951560_wsyQWuCg4W8Pg5BE4WlrFb5m1d3yWnoY.jpg"
            alt="house1"
            className="h-[330px] rounded-md"
          />
          <img
            src="https://t4.ftcdn.net/jpg/02/32/58/45/240_F_232584505_TClqLckDs1d3EfY4f9m9R99JZ8CiEEjY.jpg"
            alt="house2"
            className="h-[330px] rounded-md"
          />
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/75/32/01/1000_F_275320190_g9VPYfT7558WmnwftUuOlDxKkGuZ5Vcc.jpg"
            alt="house3"
            className="h-[330px] rounded-md"
          />
        </Sliderify>
        <nav className="flex justify-between py-3 text-text font-medium">
          <h3 className="border-b-2 border-green-500">Recommended Properties</h3>
          <p className="text-primary">View All</p>
        </nav>
        <div className=" flex flex-col md:flex-row space-x-5 gap-y-5 sm:gap-y-0 overflow-x-scroll">
        {properties?.map((property:any) => (
          <Card key={property.id} property={property} />
        ))}  
        </div>
      </div>
      <div className="lg:w-6/12 lg:mt-0 mt-7 ">
      <img
          src="https://as1.ftcdn.net/v2/jpg/06/20/65/98/1000_F_620659810_7xyT7ksy0lGveXh4yNC8S3L9IFk4peuQ.jpg"
          alt=""
          className="h-[330px] w-full rounded-md"
        />
        <div className="bg-white rounded-xl p-5 my-7 w-full ">
          <nav className="flex justify-between text-text font-medium">
            <h3 className="border-b-2 border-green-500"> Recent Transaction</h3>
            <p className="text-primary">View All</p>
          </nav>
          <p className="py-5">You have no recent rental!</p>
        </div>
      </div>
    </main>
  );
};

export default Rentals;