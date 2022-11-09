import React from "react";
import ProductList from "../../components/ui/product/ProductList";
import { db } from "../../configs/firebase-config";
import useDeleteData from "../../hooks/useDeleteData";
import useFetchListData from "../../hooks/useFetchListData";

const Hero = () => {
  const [listProduct] = useFetchListData(db, "products");

  return (
    <section className="pt-3">
      <div className="container">
        <ProductList listProduct={listProduct}></ProductList>
      </div>
    </section>
  );
};

export default Hero;
