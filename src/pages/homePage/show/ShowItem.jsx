import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const ShowItem = ({ data }) => {
  return (
    <NavLink to={`/category/${data.id}`} className="w-full relative">
      <div className="overflow-hidden aspect-square w-full mb-4">
        <img src={data.img} alt="" className="w-full h-full object-cover" />
      </div>

      <div>
        <h3 className="font-bold text-2xl mb-1 capitalize">{data.title}</h3>
      </div>

      <div className="absolute top-2 font-bold left-2 bg-blue-500 w-10 h-10 flex items-center justify-center text-white uppercase">
        39
      </div>
    </NavLink>
  );
};

export default ShowItem;
