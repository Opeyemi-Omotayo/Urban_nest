import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { AiOutlineAlignRight } from "react-icons/ai";
import Navbar from "../navbar/Navbar";

const Header = () => {
    const [nav, setNav] = useState(false);

    return (
        <>
            <nav className=" mt-[30px] lg:mt-[45px] z-[9999] mx-4 lg:mx-8 relative transition-[0.5s]">
                <section className="px-4 py-4 lg:py-0 lg:px-6 bg-white shadow-lg rounded-sm">
                <div className="items-center justify-between hidden py-4  lg:flex">
                    <h1 className=" text-2xl">
                        Urban Nest
                    </h1>

                    <ul>
                        <Navbar />
                    </ul>
                </div>

                {/* mobile */}
                <div className="flex items-center justify-between lg:hidden">
                        <h1 className=" text-xl font-bold">Urban Nest</h1>
                    <ul
                        onClick={() => setNav(!nav)}
                        className={`absolute top-[63px] z-20 items-center w-full left-0 py-10  h-full ${nav ? "block" : "hidden"
                            }`}
                    >
                        <Navbar />
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
