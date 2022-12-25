import React, { useContext, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../../context/ProductContext";
import "./ProductList.css";

const ProductList = () => {
  const navigate = useNavigate();
  const { products, getProduct, deleteProduct, editProduct } =
    useContext(productContext);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <>
        <Table className="container" striped bordered hover>
          <thead>
            <tr>
              <th>№</th>
              <th>Фото</th>
              <th>Название</th>
              <th>Стоимость</th>
              <th>Категория</th>
              <th>Описание</th>
              <th> Действия </th>
            </tr>
          </thead>
          {products.map((item) => (
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>
                  <img className="img" src={item.url} />{" "}
                </td>
                <td>{item.inpName}</td>
                <td>{item.price} $</td>
                <td>{item.category}</td>
                <td>{item.desc}</td>
                <td>
                  <Link to="/edit">
                    <Button onClick={() => editProduct(item.id)}>
                      Изменить
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Удалить
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </>
    </div>
  );
};

export default ProductList;
