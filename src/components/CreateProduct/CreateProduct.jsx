import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { productContext } from "../../context/ProductContext";

const CreateProduct = () => {
  const [inpName, setInpName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const { addProductFunc } = useContext(productContext);
  const handleSave = () => {
    let newObj = {
      inpName,
      price,
      category,
      desc,
      url,
    };
    setInpName("");
    setPrice("");
    setCategory("");
    setDesc("");
    setUrl("");
    addProductFunc(newObj);
  };

  return (
    <>
      <Form className="container w-50 mt-5">
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
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Категория</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option></option>
            <option>Mercedes Maybach S Class</option>
            <option>BMW M8 Gran Coupe</option>
            <option>Mercedes AMG GT Liftback</option>
            <option> Porsche 911 Turbo</option>
            <option>Tesla Model S.</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Описание</Form.Label>
          <div className="mb-3">
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Url ссылка</Form.Label>
          <Form.Control
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Form.Group>
        <Button className="btn" variant="success" onClick={handleSave}>
          Сохранить
        </Button>
      </Form>
    </>
  );
};

export default CreateProduct;
