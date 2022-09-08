import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function TopBar() {
  return (
    <Navbar
      key="md"
      bg="dark"
      variant="dark"
      expand="md"
      className="mb-5 py-3 border-bottom border-primary"
    >
      <Container fluid>
        <Navbar.Brand href="#">Whiteboard with React</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#about">About Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
