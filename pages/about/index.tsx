import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Hero from '@/components/hero/Hero';
import PropertyAgents from '@/components/propertyAgents/PropertyAgents';
import Search from '@/components/search/Search';
import React from 'react';
import Head from 'next/head';

const index = () => {
    const heroContent = {
        title: "About Us",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat consequatur aperiam omnis est facere fugiat esse mollitia pariatur vel facilis!",
        buttonText: "Get Started Now"
      };

  return (
    <div>
      <Head>
        <title>Urban Nest || About</title>
        <meta name="description" content="The Best Platform for real estate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <Hero {...heroContent}/>
        <Search />
        <About />
        <Contact />
        <PropertyAgents />
    </div>
  )
}

export default index;