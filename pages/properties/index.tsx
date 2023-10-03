import Hero from "@/components/hero/Hero";
import Properties from "@/components/properties/Properties";
import Search from "@/components/search/Search";
import React from "react";
import Head from "next/head";

const index = () => {
  const heroContent = {
    title: "Our Properties",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat consequatur aperiam omnis est facere fugiat esse mollitia pariatur vel facilis!",
    buttonText: "Get Started Now",
  };
  return (
    <main>
      <Head>
        <title>Urban Nest || Properties</title>
        <meta name="description" content="The Best Platform for real estate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero {...heroContent} />
      <Search />
      <Properties />
    </main>
  );
};

export default index;
