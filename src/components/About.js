import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function About() {
  return (
  <section className=" mt-5 bg-dark">
    <section className="d-flex justify-content-center align-items-center mt-5">
    <Card border="primary">
      <Card.Body className="bg-primary text-light">Somos un grupo de estudiantes de Ingeniería en Ciencias de la Computación de la Universidad Don Bosco</Card.Body>
    </Card>
    </section>
    <section className="d-flex justify-content-center align-items-center mt-5">
    <Card border="dark">
      <Card.Body className="bg-dark text-light">Nuestro equipo esta formado por:</Card.Body>
    </Card>
    </section>
    <br></br>
    <br></br>
    <Container>
   
    <Row xs={1} md={3} className="g-3">
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Giovana Daniela Anaya Márquez</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">AM201774</Card.Subtitle>
                <Card.Text>Contacto: </Card.Text>
                <Card.Link>gioanaya257@gmail.com</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Ivania María Lebrón Flores</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">LF212591</Card.Subtitle>
                <Card.Text>Contacto: </Card.Text>
                <Card.Link>ivanialebron4.180@gmail.com</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Fernando Josué Montano González</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">MG210111</Card.Subtitle>
                <Card.Text> Contacto:</Card.Text>
                <Card.Link>fernando.montano41@gmail.com</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Luciana Maria Munguia Villacorta</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">MV210941</Card.Subtitle>
                <Card.Text>Contacto:</Card.Text>
                <Card.Link>lucianamunguia@gmail.com</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Andrea Guadalupe Velásquez Joyar</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">VJ210576</Card.Subtitle>
                <Card.Text> Contacto:</Card.Text>
                <Card.Link>andreagvj@gmail.com</Card.Link>
              </Card.Body>
            </Card>
            </Col>
      </Row>
      </Container>
      </section>
  );
  

}
