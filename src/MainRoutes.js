import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import HomePage from "./components/HomePage/HomePage";
import ProductList from "./components/ProductList/ProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/add" element={<CreateProduct />} />
    </Routes>
  );
};

export default MainRoutes;
