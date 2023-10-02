import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Search from "@/components/search/Search";
import React from "react";

const index = () => {
  const heroContent = {
    title: "Contact Us",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat consequatur aperiam omnis est facere fugiat esse mollitia pariatur vel facilis!",
    buttonText: "Get Started Now",
  };

  return (
    <section>
      <Hero {...heroContent} />
      <Search />
      <Contact />
    </section>
  );
};

export default index;
