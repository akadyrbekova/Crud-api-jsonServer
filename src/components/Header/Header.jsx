import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="primary">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className=" me-auto">
          <Link
            className="text-decoration-none"
            to="/"
            style={{ margin: "0px 60px" }}
          >
            <Nav.Item>Home</Nav.Item>
          </Link>
          <Link
            className="text-decoration-none"
            to="/list"
            style={{ margin: "0px 60px" }}
          >
            <Nav.Item>Листинг</Nav.Item>
          </Link>
          <Link className="text-decoration-none" to="/add">
            <Nav.Item>Добавить машину</Nav.Item>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
