import React from "react";
import { NavLink } from "react-router-dom";

const HeroShowInfor = ({ color, title = "", total = 0, link = "", to }) => {
  return (
    <div
      className="text-white relative w-full h-full"
      style={{
        backgroundColor: color,
      }}
    >
      <p className="bg-gray-50 text-red-500 text-lg font-bold top-0 left-0 w-10 h-10 flex items-center justify-center">
        {total}
      </p>
      <div className="absolute bottom-4 left-4 overflow-hidden w-full">
        <NavLink to={to} className="text-lg capitalize mb-0.5 block">
          {title}
        </NavLink>

        <NavLink
          className={
            "overflow-hidden text-ellipsis text-white opacity-80 whitespace-nowrap block"
          }
          to={link}
        >
          Mới nhất
        </NavLink>
      </div>
    </div>
  );
};

export default HeroShowInfor;
