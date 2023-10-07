import React, { useState } from "react";
import Button from "../elements/button/Button";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [listing, setListing] = useState("rent");
  const [location, setLocation] = useState("berlin");

  const handleSearch = () => {
    const query = {
      listing,
      location,
    };

    router.push({
      pathname: "/properties",
      query,
    });
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-6 bg-green-500 px-4 lg:px-[8rem] 2xl:px-[12rem]">
      <select
        id="listing"
        name="listing"
        className="w-[80%] mb-2 lg:mb-0 lg:w-[33%] px-4 py-3 rounded-lg outline-none"
        value={listing}
        onChange={(e) => setListing(e.target.value)}
      >
        <option value="rent">Rent</option>
        <option value="buy">Buy</option>
      </select>
      <select
        id="location"
        name="location"
        className="w-[80%] mb-2 lg:mb-0 lg:w-[33%] px-4 py-3 rounded-lg outline-none"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="berlin">Berlin</option>
        <option value="munich">Munich</option>
        <option value="hamburg">Hamburg</option>
        <option value="cologne">Cologne</option>
      </select>
      <Button
        className="w-[70%] lg:w-[23%] bg-primary px-4 py-3 text-white bg-green-700 shadow-lg rounded-lg"
        onClick={handleSearch}
      >
        Search
      </Button>
    </section>
  );
};

export default Search;
