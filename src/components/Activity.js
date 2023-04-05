import { Col, Row, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Acitivity() {
  return (
    <>
      <h1 className="text-center pb-4 pt-4">How It Works</h1>
      <Container>
        <Row className="justify-content-center">
          <Col md="auto" xs="auto" className="m-2">
            <Card className="shadow border-0">
              <Card.Img
                className="icons"
                variant="top"
                src="./images/login.png"
              />
              <Card.Body>
                <Card.Title className="text-center">Login / SignUp</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto" xs="auto" className="m-2">
            <Card className="shadow border-0">
              <Card.Img
                className="icons"
                variant="top"
                src="./images/route.png"
              />
              <Card.Body>
                <Card.Title className="text-center">Create a Route</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto" xs="auto" className="m-2">
            <Card className="shadow border-0">
              <Card.Img
                className="icons"
                variant="top"
                src="./images/connect.png"
              />
              <Card.Body>
                <Card.Title className="text-center">
                  Connect with friends
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
