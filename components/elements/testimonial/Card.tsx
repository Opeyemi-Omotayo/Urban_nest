import React from "react";

const Card = () => {
  return (
    <>
        <div className="bg-green-200 flex items-center justify-center mx-4 lg:mx-[8rem] mt-[4rem] shadow-md">
      <div className="bg-white h-[90%] w-[95%] my-3 border border-dotted p-4 ">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          tenetur dolor accusantium placeat, porro dolores.
        </p>
        <div className="flex items-center justify-start pt-4">
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/86/59/89/1000_F_486598909_Fe7C8zNiF6okC3tgfUQCtr1V1DFu3Ler.jpg"
            alt="person"
            className="mr-8 w-14 h-14"
          />
          <div>
            <h1 className="text-xl font-bold">Omotayo Opeyemi</h1>
            <small>Software developer</small>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
