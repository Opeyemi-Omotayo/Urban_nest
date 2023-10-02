import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Properties from "@/components/properties/Properties";
import PropertyAgents from "@/components/propertyAgents/PropertyAgents";
import PropertyTypes from "@/components/propertyTypes/PropertyTypes";
import Search from "@/components/search/Search";
import Testimonial from "@/components/testimonial/Testimonial";
import Head from "next/head";

export default function Home() {
  const heroContent = {
    title: "Find the perfect home for your family",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat consequatur aperiam omnis est facere fugiat esse mollitia pariatur vel facilis!",
    buttonText: "Get Started Now"
  };
  
  return (
    <main>
      <Head>
        <title>Urban Nest</title>
        <meta name="description" content="The Best Platform for real estate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero {...heroContent}/>
      <Search />
      <PropertyTypes />
      <About />
      <Properties />
      <Contact />
      <PropertyAgents />
      <Testimonial />
    </main>
  );
}
