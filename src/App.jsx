import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Categories from "./pages/categoriesPage/Categories";
import Category from "./pages/categoryDetailPage/Category";
import Home from "./pages/homePage/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/category/:id" element={<Category />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
