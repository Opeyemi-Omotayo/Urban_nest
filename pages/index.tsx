import About from "@/components/about/About";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Properties from "@/components/properties/Properties";
import PropertyTypes from "@/components/propertyTypes/PropertyTypes";
import Search from "@/components/search/Search";
import Head from "next/head";

export default function Home() {
  return (
    <main className="mt-8 bg-gray-50 lg:mt-0 font-Quicksand">
      <Head>
        <title>Urban Nest</title>
        <meta name="description" content="The Best Platform for real estate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Hero />
      <Search />
      <PropertyTypes />
      <About />
      <Properties />
    </main>
  );
}
