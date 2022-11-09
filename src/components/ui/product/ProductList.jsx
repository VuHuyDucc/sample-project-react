import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ listProduct }) => {
  return (
    <div className="grid grid-cols-3 gap-3 grid-flow-row auto-rows-fr">
      {listProduct.map((product) => {
        return (
          <ProductItem
            key={product.id}
            src={product.image}
            name={product.name}
            size={product.size}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
