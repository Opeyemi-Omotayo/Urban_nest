import React from "react";

const Transaction = () => {
  return (
    <div className="lg:w-6/12 lg:mt-0 mt-7 ">
        <img
          src="https://as1.ftcdn.net/v2/jpg/06/20/65/98/1000_F_620659810_7xyT7ksy0lGveXh4yNC8S3L9IFk4peuQ.jpg?w=1500"
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
  );
};

export default Transaction;
