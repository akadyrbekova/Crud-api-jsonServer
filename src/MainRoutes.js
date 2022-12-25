import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import HomePage from "./components/HomePage/HomePage";
import ProductList from "./components/ProductList/ProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/add" element={<CreateProduct />} />
      <Route path="/edit" element={<EditProduct />} />
    </Routes>
  );
};

export default MainRoutes;
