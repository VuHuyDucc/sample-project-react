import React from "react";
import { db } from "../../../configs/firebase-config";
import useFetchListData from "../../../hooks/useFetchListData";
import ShowItem from "./ShowItem";

const ShowList = () => {
  const [data] = useFetchListData(db, "categories");
  return (
    <div className="grid grid-cols-4 gap-3">
      {data?.length > 0 &&
        data.map((item) => <ShowItem key={item.id} data={item} />)}
    </div>
  );
};

export default ShowList;
