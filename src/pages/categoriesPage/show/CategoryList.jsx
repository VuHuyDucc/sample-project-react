import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    <div className="grid grid-cols-3 gap-3 py-6 pt-12">
      <CategoryItem />
    </div>
  );
};

export default CategoryList;
