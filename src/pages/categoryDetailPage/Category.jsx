import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../configs/firebase-config";
import useFetchSingleData from "../../hooks/useFetchSingleData";
import Hero from "./hero/Hero";

const Category = () => {
  const id = useParams("id");
  const [data] = useFetchSingleData(db, "categories", id.id);

  return (
    <div className="py-3">
      <div className="container">{data && <Hero data={data} />}</div>
    </div>
  );
};

export default Category;
