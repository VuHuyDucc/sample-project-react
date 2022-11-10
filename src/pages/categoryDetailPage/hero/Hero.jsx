import React from "react";
import HeroForm from "./HeroForm";
import HeroShowcase from "./HeroShowcase";

const Hero = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <HeroShowcase img={data.img}></HeroShowcase>
      <HeroForm data={data}></HeroForm>
    </div>
  );
};

export default Hero;
