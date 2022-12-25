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
      name: e.target.value,
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
          <Form className="container w-50">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Название</Form.Label>

              <Form.Control
                type="text"
                value={newEditItem.name}
                onChange={handleEditInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Стоимость</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Категория</Form.Label>
              <select defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disabled>
                  Choose a salutation ...
                </option>
                <option value="1">Mr</option>
                <option value="2">Mrs</option>
                <option value="3">Ms</option>
                <option value="4">Miss</option>
                <option value="5">Dr</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Описание</Form.Label>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Url ссылка</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form>
          <Button
            className="btn w-50"
            variant="primary"
            onClick={() => {
              saveTask(newEditItem);
              navigate("/list");
            }}
          >
            Сохранить
          </Button>
        </>
      ) : (
        "LOADING..."
      )}
    </div>
  );
};

export default EditProduct;
