import { Component } from "react";
import { Button, ListGroupItem } from "react-bootstrap";
import { Trash3 } from "react-bootstrap-icons";

class SingleComment extends Component {
  handleDelete = async (id) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGUxYmNhMDcwNDAwMTU4YmY5NzkiLCJpYXQiOjE3Mzg4NTgwMTEsImV4cCI6MTc0MDA2NzYxMX0.KY1i3aAaFytdpVHLectYt_unBT7ZsLQJtlf6z-iXCXg",
        },
      });

      if (response.ok) {
        console.log("Commento eliminato con successo!");
        if (this.props.onDelete) {
          this.props.onDelete(id); // Chiama la funzione onDelete per aggiornare la lista
        }
      } else {
        console.error("Errore nell'eliminazione del commento");
      }
    } catch (error) {
      console.error("Errore di rete:", error);
    }
  };

  render() {
    const { commento } = this.props;

    return (
      <ListGroupItem className="d-flex justify-content-between align-items-center">
        <span>{commento.comment}</span>
        <span className="mx-2">{commento.rate}</span>
        <Button variant="danger" onClick={() => this.handleDelete(commento._id)}>
          <Trash3 />
        </Button>
      </ListGroupItem>
    );
  }
}

export default SingleComment;
