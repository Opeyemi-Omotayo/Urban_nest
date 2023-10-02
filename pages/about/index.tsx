import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Hero from '@/components/hero/Hero';
import PropertyAgents from '@/components/propertyAgents/PropertyAgents';
import Search from '@/components/search/Search';
import React from 'react'

const index = () => {
    const heroContent = {
        title: "About Us",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat consequatur aperiam omnis est facere fugiat esse mollitia pariatur vel facilis!",
        buttonText: "Get Started Now"
      };

  return (
    <div>
        <Hero {...heroContent}/>
        <Search />
        <About />
        <Contact />
        <PropertyAgents />
    </div>
  )
}

export default index;