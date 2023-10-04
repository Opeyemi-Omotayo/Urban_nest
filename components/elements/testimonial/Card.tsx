import React, { useState, useEffect } from "react";
import {
  BsFillArrowLeftCircleFill as LeftArrow,
  BsFillArrowRightCircleFill as RightArrow,
} from "react-icons/bs";
import { Sliderify } from "react-sliderify";
import Supabase from "@/components/supabase/supabase";

const Card = () => {
  const [testimonials, setTestimonials] = useState<null | any>(null);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        let { data, error } = await Supabase.from("testimonial").select();
        if (error) {
          console.error("Error fetching data from Supabase:", error);
        } else {
          setTestimonials(data);
        }
      } catch (err) {
        console.error("An error occurred:", err);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="mx-4 lg:mx-[8rem] mt-[4rem] container">
      <Sliderify
        navPrevIcon={<LeftArrow className="text-2xl text-green-500" />}
        navNextIcon={<RightArrow className="text-2xl text-green-500" />}
      >
        {testimonials?.map((testimonial: any) => (
          <div className="flex items-center justify-center mx-8 bg-green-200 shadow-md" key={testimonial.id}>
            <div className="bg-white h-[90%] w-[95%] my-3 border border-dotted p-4 ">
              <p>{testimonial.review}</p>
              <div className="flex items-center justify-start pt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.fullName}
                  className="mr-8 w-14 h-14"
                />
                <div>
                  <h1 className="text-xl font-bold">{testimonial.fullName}</h1>
                  <small>{testimonial.occupation}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Sliderify>
    </div>
  );
};

export default Card;
