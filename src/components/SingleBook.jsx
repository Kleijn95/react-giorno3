import { Card, Col, Button } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false, // Lo stato inizia con `false`
  };

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected }); // Inverte il valore di `selected`
  };

  render() {
    console.log(this.props.book.asin + "  " + this.props.book.title);
    return (
      <Col md={4} lg={3}>
        <Card
          style={{
            border: this.state.selected ? "3px solid red" : "", // Bordo rosso e spesso quando selezionato
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            alt={this.props.book.title}
            onClick={this.toggleSelected} // Ora il toggle avviene solo cliccando sull'immagine
            style={{ cursor: "pointer" }} // Il cursore cambia per indicare che è cliccabile
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Prezzo: ${this.props.price}</Card.Text>
            <Button variant="primary">Acquista</Button>

            {this.state.selected && <CommentArea asin={this.props.book.asin} />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
