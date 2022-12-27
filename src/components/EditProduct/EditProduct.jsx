import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../context/ProductContext";

const EditProduct = () => {
  const navigate = useNavigate();

  const { productToEdit, saveTask } = useContext(productContext);

  const [newEditItem, setNewEditItem] = useState(productToEdit);

  const handleEditName = (e) => {
    let newTask = {
      ...newEditItem,
      inpName: e.target.value,
    };

    setNewEditItem(newTask);
  };
  const handleEditPrice = (e) => {
    let newTask = {
      ...newEditItem,
      price: e.target.value,
    };

    setNewEditItem(newTask);
  };
  const handleEditCategory = (e) => {
    let newTask = {
      ...newEditItem,
      category: e.target.value,
    };

    setNewEditItem(newTask);
  };
  const handleEditDesc = (e) => {
    let newTask = {
      ...newEditItem,
      desc: e.target.value,
    };

    setNewEditItem(newTask);
  };
  const handleEditUrl = (e) => {
    let newTask = {
      ...newEditItem,
      url: e.target.value,
    };

    setNewEditItem(newTask);
  };

  useEffect(() => {
    setNewEditItem(productToEdit);
  }, [productToEdit]);

  return (
    <div>
      {newEditItem ? (
        <>
          <Form className="container w-50 mt-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Название</Form.Label>

              <Form.Control
                type="text"
                value={newEditItem.inpName}
                onChange={handleEditName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Стоимость</Form.Label>
              <Form.Control
                type="number"
                value={newEditItem.price}
                onChange={handleEditPrice}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Категория</Form.Label>
              <Form.Select>
                <option></option>
                <option
                  value={newEditItem.category}
                  onChange={handleEditCategory}
                >
                  Mercedes-Benz
                </option>
                <option
                  value={newEditItem.category}
                  onChange={handleEditCategory}
                >
                  BMW
                </option>
                <option
                  value={newEditItem.category}
                  onChange={handleEditCategory}
                >
                  Tesla
                </option>
                <option
                  value={newEditItem.category}
                  onChange={handleEditCategory}
                >
                  Lada
                </option>
                <option
                  value={newEditItem.category}
                  onChange={handleEditCategory}
                >
                  Porsche
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Описание</Form.Label>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={newEditItem.desc}
                  onChange={handleEditDesc}
                ></textarea>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Url ссылка</Form.Label>
              <Form.Control
                type="text"
                value={newEditItem.url}
                onChange={handleEditUrl}
              />
            </Form.Group>
            <Button
              className="btn"
              variant="success"
              onClick={() => {
                saveTask(newEditItem);
                navigate("/list");
              }}
            >
              Сохранить
            </Button>
          </Form>
        </>
      ) : (
        "LOADING..."
      )}
    </div>
  );
};

export default EditProduct;
