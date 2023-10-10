import React from "react";
import { AiOutlineSafety, AiFillStar } from "react-icons/ai";
import Button from "../elements/button/Button";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Enquiry = ({ property }: any) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("We will get back to you soon! ");
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  const tax = 5;

  return (
    <main className="mx-auto container py-7 px-5 flex lg:flex-row flex-col-reverse justify-between lg:space-x-5">
      <form className="lg:w-7/12" onSubmit={handleSubmit}>
        <div className=" bg-white rounded-xl p-5 lg:my-0 my-7">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">Your Details</h3>
              <p className="py-1">Please enter your details here so we can contact you for inspection</p>
            </div>
            <p>Step 1 of 2</p>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-x-7 gap-y-3 py-2">
            <label className="flex flex-col font-medium ">
              Name
              <input
                placeholder="Your name"
                required
                className="my-3 rounded-lg bg-gray-100 p-4"
              />
            </label>
            <label className="flex flex-col font-medium ">
              Phone Number
              <input
                type="number"
                placeholder="Phone Number"
                required
                className="my-3 rounded-lg bg-gray-100 input p-4"
              />
            </label>
            <label className="flex flex-col font-medium ">
              Address
              <input
                placeholder="Address"
                required
                className="my-3 rounded-lg bg-gray-100 p-4"
              />
            </label>
            <label className="flex flex-col font-medium ">
              Town/City
              <input
                placeholder="Town/City"
                required
                className="my-3 rounded-lg bg-gray-100 p-4"
              />
            </label>
          </div>
        </div>


        <div className=" bg-white p-5 my-8 rounded-xl">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">Confirmation</h3>
              <p className="py-1 max-w-[180px] sm:max-w-[300px]">
                Few clicks and your rental is ready!
              </p>
            </div>
            <p className="text-text">Step 2 of 2</p>
          </div>
          <div className="grid gap-x-7 gap-y-5 py-7">
            <label className="flex items-center font-medium sm:text-base text-sm bg-input py-2 px-4 rounded-xl">
              <input
                type="checkbox"
                required
                className="my-3 rounded-lg bg-input lg:w-5 lg:h-5 w-10 h-10 mr-3"
              />
              I agree with receiving newsletter emails. No spam, promised!
            </label>
            <label className="flex items-center font-medium sm:text-base text-sm bg-input py-2 px-4 rounded-xl">
              <input
                type="checkbox"
                required
                className="my-3 rounded-lg bg-input lg:w-5 lg:h-5 w-10 h-10 mr-3"
              />
              I agree with our terms, conditions and privacy policy.
            </label>
          </div>
          <Button className="bg-green-500 w-32 h-12">Proceed Now</Button>
          <div className="py-5">
            <AiOutlineSafety className="text-4xl my-2" />
            <p className="font-medium">All your data are safe</p>
            <p className="text-text text-sm py-1">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </div>
      </form>

      {property && (
        <section className="lg:w-5/12 h-fit p-5 rounded-xl bg-white">
          <div>
            <h3 className="text-xl font-semibold">Property Summary</h3>
            <p className="text-text py-2 sm:text-base text-sm">
              It is based on first come first serve.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col-reverse justify-between py-5">
            <img
              src={property?.image}
              alt="property"
              className="rounded-md px-3 border-primary w-[190px] h-[100px] sm:w-[210px] sm:h-[124px]"
            />
            <div>
              <h3 className="sm:text-2xl text-xl font-bold">{property?.name}</h3>
              <div className="flex items-center">
              <div className="flex items-center text-yellow-500 pt-4">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <p className="pl-2 pt-3 sm:block hidden">5 Reviewer</p>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="">
            <div className="flex justify-between text-lg">
              <p className=" text-text">Subtotal</p>
              <p className="font-bold">${property?.price}.00</p>
            </div>
            <div className="flex justify-between text-lg py-5">
              <p className="text-text">Tax</p>
              <p className="font-bold">${tax}.00</p>
            </div>
            <div className="flex sm:flex-row flex-col justify-between py-5">
              <div>
                <p className="text-xl font-semibold">Total Price</p>
                <p className="text-text sm:text-base text-xs">
                  Overall price and includes tax
                </p>
              </div>
              <p className="text-2xl font-bold sm:py-0 py-2">
                ${property?.price + tax}
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Enquiry;