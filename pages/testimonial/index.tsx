import Hero from '@/components/hero/Hero';
import Search from '@/components/search/Search';
import Testimonial from '@/components/testimonial/Testimonial';
import React from 'react';

const index = () => {
    const heroContent = {
        title: "Testimonial",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat consequatur aperiam omnis est facere fugiat esse mollitia pariatur vel facilis!",
        buttonText: "Get Started Now"
      };

  return (
    <main>
        <Hero {...heroContent}/>
        <Search />
        <Testimonial />
    </main>
  )
}

export default index;