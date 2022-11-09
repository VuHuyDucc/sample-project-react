import React from "react";

const ProductItem = (props) => {
  return (
    <div className="w-full">
      <div className="w-full aspect-square rounded-lg overflow-hidden">
        <img src={props.src} alt="" className="w-full h-full object-cover" />
      </div>

      <p className="text-2xl text-black font-medium mb-1 mt-4 capitalize">
        {props.name}
      </p>
      <div className="text-lg font-medium text-green-500">{props.size}</div>
    </div>
  );
};

export default ProductItem;
