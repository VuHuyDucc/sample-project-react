import React from "react";
import { NavLink } from "react-router-dom";

const Show = ({ title, viewMoreLink, children }) => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between py-3">
          <h2 className="text-3xl font-bold text-zinc-900">{title}</h2>
          <NavLink
            to={viewMoreLink}
            className="uppercase font-medium text-gray-800"
          >
            Xem tất cả
          </NavLink>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Show;
