import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/Colors.css";

export default function Colors({ selectedColor }) {
  // returns the colors with each row containing properties to select the desired color. 👀

  const clearCanva = () => {
    const canvas = document.getElementById("canva");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div>
      <Container
        onClick={(e) =>
          selectedColor(window.getComputedStyle(e.target).backgroundColor)
        }
        className="bg-light rounded ms-2 py-2"
      >
        <Row className="m-1">
          <Col className="square rounded square-lg bg-danger text-danger p-4 m-1"></Col>
          <Col className="square rounded square-lg bg-warning text-success p-4 m-1 "></Col>
        </Row>
        <Row className="m-1">
          <Col className="square rounded square-lg bg-success p-4 m-1"></Col>
          <Col className="square rounded square-lg bg-info p-4 m-1"></Col>
        </Row>
        <Row className="m-1">
          <Col className="square rounded square-lg bg-secondary p-4 m-1"></Col>
          <Col className="square rounded square-lg bg-dark p-4 m-1"></Col>
        </Row>
        <Row className="m-1">
          <Col className="square rounded square-lg deeppink p-4 m-1"></Col>
          <Col className="square rounded square-lg indigo p-4 m-1"></Col>
        </Row>
        <Row className="m-1">
          <Col className="square rounded square-lg springgreen p-4 m-1"></Col>
          <Col className="square rounded square-lg navy p-4 m-1"></Col>
        </Row>
        <Row className="m-1">
          <Col className="square rounded square-lg orange p-4 m-1"></Col>
        </Row>
        <Row className="m-1">
          <Col
            className="square rounded bg-dark text-light p-4 m-1 text-center fw-bold"
            onClick={clearCanva}
          >
            Limpiar
          </Col>
        </Row>
      </Container>
    </div>
  );
}
