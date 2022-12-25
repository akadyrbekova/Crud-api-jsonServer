import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductContextProvider from "./context/ProductContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <ProductContextProvider>
        <Header />
        <MainRoutes />
        <Footer />
      </ProductContextProvider>
    </div>
  );
};

export default App;
