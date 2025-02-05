import { Card, Col, Button } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false, // Lo stato inizia con `false`
  };

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected }); // Inverte il valore di `selected`
  };

  render() {
    return (
      <Col md={4} lg={3}>
        <Card
          onClick={this.toggleSelected} // Il click sull'intera Card fa il toggle
          style={{
            border: this.state.selected ? "3px solid red" : "", // Bordo rosso e spesso quando selezionato
          }}
        >
          <Card.Img variant="top" src={this.props.img} alt={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Prezzo: ${this.props.price}</Card.Text>
            <Button variant="primary">Acquista</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
