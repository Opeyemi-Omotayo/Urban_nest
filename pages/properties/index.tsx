import Hero from "@/components/hero/Hero";
import Properties from "@/components/properties/Properties";
import Search from "@/components/search/Search";
import React from "react";

const index = () => {
  const heroContent = {
    title: "Our Properties",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat consequatur aperiam omnis est facere fugiat esse mollitia pariatur vel facilis!",
    buttonText: "Get Started Now",
  };
  return (
    <main>
      <Hero {...heroContent} />
      <Search />
      <Properties />
    </main>
  );
};

export default index;
