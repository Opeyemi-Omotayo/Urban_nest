import React, { useEffect} from "react";
import { Sliderify } from "react-sliderify";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Supabase from "../supabase/supabase";
import { useRouter } from "next/router";


const Login = () => {
  const router = useRouter();
  useEffect(() => {
    Supabase.auth.onAuthStateChange(async (event) => {
      if (event === "SIGNED_OUT") {
        router.push("/");
      } else if (event === "SIGNED_IN") {
        router.push("/dashboard");
      }
    });
  }, []);

  return (
    <section className="flex items-center bg-gray-50 justify-between flex-col px-4 lg:px-0 lg:flex-row mt-[-7rem] h-[90vh]">
      <div className="w-[100%] lg:w-[50%] h-[100%] hidden lg:flex">
        <Sliderify showNavDots={false}>
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/62/81/43/1000_F_462814326_Rg1qXonBpF4T6DAQ8T03LBXIGK497yc9.jpg?w=1500"
            alt="house1"
            className="h-[90vh]"
          />
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/37/54/23/1000_F_437542364_rUKRUDlOQ2ZmVrsijNFUfrhxZO7jyOFg.jpg?w=1500"
            alt="house2"
            className="h-[90vh]"
          />
        </Sliderify>
      </div>
      <div className=" w-[100%] lg:w-[47%] lg:pl-8 p-[2rem] lg:p-[4rem]  ">
        <div className="pt-[7rem]">
        <Auth
          supabaseClient={Supabase}
          providers={[]}
          appearance={{
            theme: ThemeSupa,
            style: {
              button: { background: "#3563E9", color: "white", height: "48px" },
              anchor: { color: "black" },
            },
          }}
        />
        </div>
      </div>
    </section>
  );
};

export default Login;