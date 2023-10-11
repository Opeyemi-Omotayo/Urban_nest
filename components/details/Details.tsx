import React from "react";
import Button from "@/components/elements/button/Button";
import Testimonial from "@/components/testimonial/Testimonial";
import Link from "next/link";
import { FaBath } from "react-icons/fa";
import { IoMdBed } from "react-icons/io";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
 
const Details = ({ property }: any) => {
  return (
    <main className="px-4 lg:px-[6rem]">
      {property && (
        <>
          <div className="flex lg:space-x-5 justify-between flex-col lg:flex-row">
            <section className="lg:w-7/12">
              <div className="w-full bg-white h-[255px] rounded-lg">
                <div className=" w-full">
                  <img
                    src={property?.image}
                    alt={property?.name}
                    className="my-3 h-[250px] p-2 rounded-lg w-full"
                  />
                </div>
              </div>

              <div className="flex items-center py-5 sm:space-x-3">
                <img
                  src={property?.image}
                  alt="property"
                  className="rounded-md px-3 border-green-500 w-[96px] h-[64px] sm:w-[210px] sm:h-[124px]"
                />
                <img
                  src="https://as2.ftcdn.net/v2/jpg/05/20/95/15/1000_F_520951560_wsyQWuCg4W8Pg5BE4WlrFb5m1d3yWnoY.jpg?w=1500"
                  alt="view property"
                  className="rounded-md w-[96px] h-[64px] sm:w-[148px] sm:h-[124px]"
                />
                <img
                  src="https://t4.ftcdn.net/jpg/02/32/58/45/240_F_232584505_TClqLckDs1d3EfY4f9m9R99JZ8CiEEjY.jpg?w=1500"
                  alt="view property"
                  className="rounded-md w-[96px] h-[64px] sm:w-[148px] sm:h-[124px]"
                />
              </div>
            </section>

            <section className="lg:w-5/12 h-fit p-5 bg-white rounded-xl flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold capitalize">{property?.name}</h3>
                <div className="flex text-yellow-500 pt-4">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <p className=" font-light text-lg">
                <span className="capitalize">{property?.name}</span> is the new Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Laboriosam alias recusandae,
                  assumenda architecto quia illo!
                </p>
                <div className="grid grid-cols-2 gap-5 py-5">
                  <p className="text-text flex">
                    Size:{" "}
                    <span className="text-black font-semibold flex items-center">
                      <BsFillGrid3X2GapFill className="text-green-500 me-2" />
                      {property.measurement} Sqft
                    </span>
                  </p>
                  <p className="text-text flex">
                    Bed:{" "}
                    <span className="text-black font-semibold flex items-center">
                      <IoMdBed className="text-green-500 me-2" />
                      {property.bed} Bed
                    </span>
                  </p>
                  <p className="text-text flex">
                    Bath:{" "}
                    <span className="text-black font-semibold flex items-center">
                      <FaBath className="text-green-500 me-2" />
                      {property.bath} Bath
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col justify-between">
                <p className="text-xl font-bold">
                  ${property?.price.toLocaleString('en-US')}.00
                </p>
                <Link
                  href={`/properties/details/${property?.id}/enquiry`}
                  className="my-5 sm:my-0"
                >
                  <Button className="animate-bounce bg-green-500 rounded-md w-36">
                  {property.listing = 'rent' ? "Rent" : "Buy"} Now
                  </Button>
                </Link>
              </div>
            </section>
          </div>

          <section className="">
            <Testimonial />
          </section>
        </>
      )}
    </main>
  );
};

export default Details;
