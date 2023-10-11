import React from "react";
import { Sliderify } from "react-sliderify";

const Slider = () => {
  return (
    <Sliderify showNavDots={false}>
      <img
        src="https://as2.ftcdn.net/v2/jpg/05/20/95/15/1000_F_520951560_wsyQWuCg4W8Pg5BE4WlrFb5m1d3yWnoY.jpg?w=1500"
        alt="house1"
        className="h-[330px] rounded-md"
      />
      <img
        src="https://t4.ftcdn.net/jpg/02/32/58/45/240_F_232584505_TClqLckDs1d3EfY4f9m9R99JZ8CiEEjY.jpg?w=1500"
        alt="house2"
        className="h-[330px] rounded-md"
      />
      <img
        src="https://as2.ftcdn.net/v2/jpg/02/75/32/01/1000_F_275320190_g9VPYfT7558WmnwftUuOlDxKkGuZ5Vcc.jpg?w=1500"
        alt="house3"
        className="h-[330px] rounded-md"
      />
    </Sliderify>
  );
};

export default Slider;
