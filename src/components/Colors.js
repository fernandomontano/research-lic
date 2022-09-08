import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Colors() {
  return (
    <div>
      <Container>
        <Row className="m-1">
          <Col className="square square-lg bg-danger text-danger p-4 m-1"></Col>
          <Col className="square square-lg bg-warning text-success p-4 m-1"></Col>
        </Row>
        <Row className="m-1">
          <Col className="square square-lg bg-success p-4 m-1"></Col>
          <Col className="square square-lg bg-info p-4 m-1"></Col>
        </Row>
        <Row className="m-1">
          <Col className="square square-lg bg-secondary p-4 m-1"></Col>
          <Col className="square square-lg bg-dark p-4 m-1"></Col>
        </Row>
        <Row className="m-1">
          <Col className="square square-lg bg-$indigo p-4 m-1"></Col>
          <Col className="square square-lg bg-dark p-4 m-1"></Col>
        </Row>
      </Container>
    </div>
  );
}
