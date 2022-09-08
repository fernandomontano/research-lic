import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Colors({ selectedColor }) {
  const handleClick = () => {
    // handle click is the event that changes the selected color from Canvas component -🙂
    window.onclick = (e) => {
      // e.target => selected div.
      selectedColor(window.getComputedStyle(e.target).backgroundColor);
    };
  };

  return (
    <div>
      <Container >
        <Row className="m-1" onClick={handleClick}>
          <Col className="square rounded square-lg bg-danger text-danger p-4 m-1"></Col>
          <Col className="square rounded square-lg bg-warning text-success p-4 m-1 "></Col>
        </Row>
        <Row className="m-1" onClick={handleClick}>
          <Col className="square rounded square-lg bg-success p-4 m-1"></Col>
          <Col className="square rounded square-lg bg-info p-4 m-1"></Col>
        </Row>
        <Row className="m-1" onClick={handleClick}>
          <Col className="square rounded square-lg bg-secondary p-4 m-1"></Col>
          <Col className="square rounded square-lg bg-dark p-4 m-1"></Col>
        </Row>
        <Row className="m-1" onClick={handleClick}>
          <Col className="square rounded square-lg color-indigo p-4 m-1"></Col>
          <Col className="square rounded square-lg bg-light p-4 m-1"></Col>
        </Row>
        <Row className="m-1" onClick={handleClick}>
          <Col className="square rounded square-lg bg-$indigo p-4 m-1"></Col>
          <Col className="square rounded square-lg bg-dark p-4 m-1"></Col>
        </Row>
      </Container>
    </div>
  );
}
