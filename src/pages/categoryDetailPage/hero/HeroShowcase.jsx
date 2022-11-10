import React from "react";

const HeroShowcase = ({ img }) => {
  return (
    <div className="aspect-square overflow-hidden">
      <img src={img} className="w-full h-full object-cover" alt="" />
    </div>
  );
};

export default HeroShowcase;
