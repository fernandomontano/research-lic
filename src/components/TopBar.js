import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, Outlet } from "react-router-dom";

export default function TopBar() {
  return (
    <div>
      <Navbar
        key="md"
        bg="dark"
        variant="dark"
        expand="md"
        className="py-3 border-bottom border-primary"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-light">
              Whiteboard with React
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">
              <Link to="/about" className="text-decoration-none text-light">
                About Us
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
