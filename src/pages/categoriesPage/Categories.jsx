import React from "react";
import AddCategory from "./form/AddCategory";
import CategoryList from "./show/CategoryList";

const Categories = () => {
  return (
    <div className="bg-gray-100">
      <div className="container">
        <div>
          <h1 className="text-3xl text-zinc-900 py-3 capitalize">
            Thêm danh mục
          </h1>
          <AddCategory />
        </div>
        <CategoryList></CategoryList>
      </div>
    </div>
  );
};

export default Categories;
