import PropertyForm from "@/components/properties/PropertyForm";
import React from "react";
import Transaction from "../elements/Transaction";
import Slider from "../elements/Slider";

const AddProperty = () => {
  return (
    <main className="flex mx-5 lg:flex-row flex-col justify-between lg:space-x-5">
      <div className="bg-white rounded-xl p-5 lg:w-6/12">
        <h3 className="text-xl font-bold pb-2">Reimbursement Details</h3>
        <Slider />
        <nav className="flex justify-between py-5 font-medium">
          <h3 className="border-b-2 border-green-500"> Add a property</h3>
          <p className="text-primary">View All</p>
        </nav>
        <PropertyForm />
      </div>
      <Transaction />
    </main>
  );
};

export default AddProperty;
