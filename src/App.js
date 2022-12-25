import React from "react";
import Header from "./components/Header/Header";
import ProductContextProvider from "./context/ProductContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <ProductContextProvider>
        <Header />
        <MainRoutes />
      </ProductContextProvider>
    </div>
  );
};

export default App;
