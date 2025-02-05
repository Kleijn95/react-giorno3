import { Card, Container, Row, Col, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const FantasyBooks = () => {
  return (
    <Container fluid>
      <Row className="g-5 d-flex justify-content-center px-2">
        {fantasy.map((book) => (
          <Col key={book.asin} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Prezzo: ${book.price}</Card.Text>
                <Button variant="primary">Acquista</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FantasyBooks;
