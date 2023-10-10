import React, { useState, useEffect } from "react";
import {
  BsFillArrowLeftCircleFill as LeftArrow,
  BsFillArrowRightCircleFill as RightArrow,
} from "react-icons/bs";
import { Sliderify } from "react-sliderify";
import Supabase from "@/components/supabase/supabase";
import { toast } from "react-toastify";

const Card = () => {
  const [testimonials, setTestimonials] = useState<null | any>(null);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        let { data, error } = await Supabase.from("testimonial").select();
        if (error) {
          toast.error("Error fetching data from Supabase");
        } else {
          setTestimonials(data);
        }
      } catch (err) {
        toast.error("An error occurred");
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="mx-4 lg:mx-[12rem] 2xl:px-[18rem] mt-10" data-aos="fade-up">
      <Sliderify
        navPrevIcon={<LeftArrow className="text-2xl text-green-500" />}
        navNextIcon={<RightArrow className="text-2xl text-green-500" />}
      >
        {testimonials?.map((testimonial: any) => (
          <div className="flex items-center justify-center mx-8 bg-green-200 shadow-md" key={testimonial.id}>
            <div className="bg-white h-[90%] w-[95%] my-3 border border-dotted p-4 ">
              <p className="text-sm md:text-base">{testimonial.review}</p>
              <div className="flex items-center justify-start pt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.fullName}
                  className="mr-8 w-14 h-14"
                />
                <div>
                  <h1 className="text-lg font-bold">{testimonial.fullName}</h1>
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
