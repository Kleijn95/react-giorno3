import { Component } from "react";
import { Button, Form, Alert } from "react-bootstrap";

class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "1",
      elementId: this.props.asin, // Passiamo l'asin come id
    },
    alert: {
      isVisible: false,
      type: "",
      title: "",
      message: "",
    },
  };

  handleReset = () => {
    this.setState({
      newComment: {
        comment: "",
        rate: "1",
        elementId: this.props.asin, // resetto l'elementId
      },
    });
  };

  handleInputChange = (propertyName, propertyValue) => {
    this.setState({
      newComment: { ...this.state.newComment, [propertyName]: propertyValue },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Preveniamo il refresh della pagina
    console.log(this.state.newComment);
    // Chiamata POST per inviare il commento
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.newComment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0YWRlNmNhMDcwNDAwMTU4YmY5MTQiLCJpYXQiOjE3Mzg4NDU2NzAsImV4cCI6MTc0MDA1NTI3MH0.CYdbOA_p4HDBFUBspbchB22mKDEJzM4CV3DTG6vcqEM",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          this.handleReset(); // Resetto il form
          return resp.json();
        } else {
          throw new Error("Commento non inviato");
        }
      })
      .then((createdComment) => {
        this.setState({
          alert: {
            isVisible: true,
            type: "success",
            title: "Commento inviato",
            message: `Hai inviato il commento "${createdComment.comment}" con successo.`,
          },
        });
      })
      .catch((err) => {
        this.setState({
          alert: {
            isVisible: true,
            type: "danger",
            title: "Commento fallito",
            message: err.message,
          },
        });
      })
      .finally(() => {
        setTimeout(
          () =>
            this.setState({
              alert: {
                isVisible: false,
                type: "",
                title: "",
                message: "",
              },
            }),
          5000
        );
      });
  };

  render() {
    return (
      <div>
        {this.state.alert.isVisible && (
          <Alert variant={this.state.alert.type}>
            <Alert.Heading>{this.state.alert.title}</Alert.Heading>
            <p>{this.state.alert.message}</p>
          </Alert>
        )}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="comment">
            <Form.Label>Recensione</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Inserisci una tua recensione..."
              value={this.state.newComment.comment}
              onChange={(e) => this.handleInputChange("comment", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="rate">
            <Form.Label>Rate</Form.Label>
            <Form.Select
              aria-label="rate"
              value={this.state.newComment.rate}
              onChange={(e) => this.handleInputChange("rate", e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit">Invia Commento</Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
