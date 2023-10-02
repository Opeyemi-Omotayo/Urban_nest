import React from "react";
// import Button from "../elements/button/Button";
// import Image from "next/image";
// import Link from "next/link";
import { Sliderify } from "react-sliderify";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = () => {

  return (
    <main className="container flex justify-between w-full h-full px-5 py-10 mx-auto overflow-y-hidden lg:px-10 md:space-x-10">
        <div className="w-[100%] lg:w-[50%] h-[100%]">
        <Sliderify showNavDots={false}>
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/62/81/43/1000_F_462814326_Rg1qXonBpF4T6DAQ8T03LBXIGK497yc9.jpg"
            alt="house1"
            className="h-[90vh]"
          />
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/37/54/23/1000_F_437542364_rUKRUDlOQ2ZmVrsijNFUfrhxZO7jyOFg.jpg"
            alt="house2"
            className="h-[90vh]"
          />
        </Sliderify>
      </div>

      <div className="w-full md:w-5/12">
        <h1>hello</h1>
      </div>
    </main>
  );
};

export default Login;