import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../context/ProductContext";

const EditProduct = () => {
  const navigate = useNavigate();

  const { productToEdit, saveTask } = useContext(productContext);

  const [newEditItem, setNewEditItem] = useState(productToEdit);

  const handleEditInput = (e) => {
    let newTask = {
      ...newEditItem,
      inpName: e.target.value,
      price: e.target.value,
      category: e.target.value,
      desc: e.target.value,
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
                onChange={(e) => handleEditInput(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Стоимость</Form.Label>
              <Form.Control
                type="number"
                value={newEditItem.price}
                onChange={(e) => handleEditInput(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Категория</Form.Label>
              <Form.Select>
                <option></option>
                <option value={newEditItem.category} onChange={handleEditInput}>
                  Mercedes-Benz
                </option>
                <option>BMW</option>
                <option>Tesla</option>
                <option>Lada</option>
                <option>Porsche</option>
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
                  onChange={handleEditInput}
                ></textarea>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Url ссылка</Form.Label>
              <Form.Control
                type="text"
                value={newEditItem.url}
                // onChange={handleEditInput}
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
