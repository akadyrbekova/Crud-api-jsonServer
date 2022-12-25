import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { productContext } from "../../context/ProductContext";

const CreateProduct = () => {
  const [inpName, setInpName] = useState("");
  const { addProductFunc } = useContext(productContext);
  const handleSave = () => {
    let newObj = {
      name: inpName,
      status: false,
    };
    setInpName("");
    addProductFunc(newObj);
  };

  return (
    <>
      <Form className="container w-50">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Название</Form.Label>
          <Form.Control
            type="text"
            value={inpName}
            onChange={(e) => setInpName(e.target.value)}
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
      <Button className="btn w-50" variant="primary" onClick={handleSave}>
        Сохранить
      </Button>
    </>
  );
};

export default CreateProduct;
