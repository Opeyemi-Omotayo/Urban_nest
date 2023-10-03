import React from "react";
import Button from "@/components/elements/button/Button";
import Testimonial from "@/components/testimonial/Testimonial";
import Link from "next/link";
import Properties from "@/components/properties/Properties";
import { FaBath } from "react-icons/fa";
import { IoMdBed } from "react-icons/io";
import { BsFillGrid3X2GapFill } from "react-icons/bs";

const Details = ({ property }: any) => {
  return (
    <main className="px-5 lg:px-10 py-7 mx-auto container">
      {property && (
        <>
          <div className="flex lg:space-x-5 justify-between flex-col lg:flex-row">
            <section className="lg:w-7/12">
              <div className="w-full bg-cover bg-[url('/assets/header/ads2.svg')] h-min rounded-lg">
                <div className="p-5 w-full">
                  <img
                    src={property?.image}
                    alt={property?.name}
                    className="my-3 lg:w-[426px] lg:h-[125px] w-full"
                  />
                </div>
              </div>

              <div className="flex items-center py-5 sm:space-x-3">
                <img
                  src={property?.image}
                  alt="property"
                  className="rounded-md bg-[url('/assets/header/ads2.svg')] px-3 border-primary w-[96px] h-[64px] sm:w-[210px] sm:h-[124px]"
                />
                <img
                  src="https://as2.ftcdn.net/v2/jpg/05/20/95/15/1000_F_520951560_wsyQWuCg4W8Pg5BE4WlrFb5m1d3yWnoY.jpg"
                  alt="view property"
                  className="rounded-md w-[96px] h-[64px] sm:w-[148px] sm:h-[124px]"
                />
                <img
                  src="https://t4.ftcdn.net/jpg/02/32/58/45/240_F_232584505_TClqLckDs1d3EfY4f9m9R99JZ8CiEEjY.jpg"
                  alt="view property"
                  className="rounded-md w-[96px] h-[64px] sm:w-[148px] sm:h-[124px]"
                />
              </div>
            </section>

            <section className="lg:w-5/12 h-fit p-5 bg-white rounded-xl flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold">{property?.name}</h3>
                <img
                  src="/assets/details/Review.svg"
                  alt="review"
                  className="rounded-md my-5"
                />
                <p className=" font-light text-lg">
                  {property?.name} is the new Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Laboriosam alias recusandae,
                  assumenda architecto quia illo!
                </p>
                <div className="grid grid-cols-2 gap-5 py-5">
                  <p className="text-text">
                    Size:{" "}
                    <span className="text-black font-semibold">
                      <BsFillGrid3X2GapFill className="text-green-500 me-2" />
                      {property.measurement} Sqft
                    </span>
                  </p>
                  <p className="text-text">
                    Bed:{" "}
                    <span className="text-black font-semibold">
                      <IoMdBed className="text-green-500 me-2" />
                      {property.bed} Bed
                    </span>
                  </p>
                  <p className="text-text">
                    Bath:{" "}
                    <span className="text-black font-semibold">
                      <FaBath className="text-green-500 me-2" />
                      {property.bath} Bath
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col justify-between">
                <p className="text-xl font-bold">
                  ${property?.price}.00/
                  <span className="font-medium text-lg text-text">day</span>
                </p>
                <Link
                  href={`/details/${property?.id}/payment`}
                  className="my-5 sm:my-0"
                >
                  <Button className="animate-bounce bg-primary rounded-md w-36">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </section>
          </div>

          <section className="">
            <Testimonial />
          </section>

          <section className="pt-7">
            <h4 className="text-text font-medium text-lg py-5">
              Recent Properties
            </h4>
            <div className="lg:grid grid-cols-4 flex space-x-5 xl:overflow-hidden overflow-x-auto">
              <Properties />
            </div>
          </section>
          <section className="py-7">
            <h4 className="text-text font-medium text-lg py-5">
              Recommended Properties
            </h4>
            <div className="sm:grid xl:grid-cols-4 sm:grid-cols-2 flex flex-col gap-x-5 gap-y-7">
              <Properties />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Details;
