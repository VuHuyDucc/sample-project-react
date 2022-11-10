import React from "react";

const HeroShowcase = ({ img }) => {
  return (
    <div className="aspect-square overflow-hidden">
      {img && <img src={img} alt="" />}
    </div>
  );
};

export default HeroShowcase;
