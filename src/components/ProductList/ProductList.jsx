import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productContext } from "../../context/ProductContext";

const ProductList = () => {
  const { products, getProduct, deleteProduct, editProduct } =
    useContext(productContext);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {products.map((item) => (
        <>
          <h1>{item.name}</h1>
          <Link to="/edit">
            <Button onClick={() => editProduct(item.id)}>edit</Button>
          </Link>
          <Button onClick={() => deleteProduct(item.id)}>delete</Button>
        </>
      ))}
    </div>
  );
};

export default ProductList;
