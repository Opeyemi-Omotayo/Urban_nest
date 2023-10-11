import React, { useState, useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import { AiOutlineAlignRight } from "react-icons/ai";
import Navigation from "../navigation/Navigation";
import Link from "next/link";

const Header = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const header = document.getElementById("header");

    if (scrollY > 100) {
      header?.classList.add("fixed");
    } else {
      header?.classList.remove("fixed");
    }
  };

  return (
    <>
      <nav
        id="header"
        className="pt-[35px] z-[9999] mx-4 lg:mx-8 xl:mx-12 2xl:mx-16 relative transition-all duration-500 "
      >
        <section className="px-4 py-4 bg-white rounded-sm shadow-lg lg:py-0 lg:px-6">
          <div className="items-center justify-between hidden py-4 lg:flex">
            <Link href="/" className="text-2xl ">
              Urban Nest
            </Link>

            <ul>
              <Navigation />
            </ul>
          </div>

          {/* mobile */}
          <div className="flex items-center justify-between lg:hidden ">
          <Link href="/" className="text-xl font-bold ">
              Urban Nest
            </Link>            <ul
              onClick={() => setNav(!nav)}
              className={`absolute bg-white h-[80vh] top-[63px] z-20 items-center w-full left-0 py-10 ${
                nav ? "block" : "hidden"
              }`}
            >
              <Navigation />
            </ul>
            <div
              className="block text-3xl lg:hidden"
              onClick={() => setNav(!nav)}
            >
              {!nav ? <AiOutlineAlignRight /> : <TfiClose />}
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Header;
