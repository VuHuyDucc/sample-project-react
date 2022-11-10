import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../configs/firebase-config";
import useFetchSingleData from "../../hooks/useFetchSingleData";
import Hero from "./hero/Hero";

const Category = () => {
  const id = useParams("id");
  const [getData] = useFetchSingleData(db, "categories", id.id);

  useEffect(() => {
    console.log(getData());
  }, []);

  return (
    <div>
      <div className="container">
        <Hero data={data}></Hero>
      </div>
    </div>
  );
};

export default Category;
