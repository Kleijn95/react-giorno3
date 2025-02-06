import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { Spinner } from "react-bootstrap"; // Importiamo Spinner

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
  };

  fetchComments = async () => {
    this.setState({ isLoading: true });
    try {
      // Usa `this.props.asin` invece di `asin`
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0YWRlNmNhMDcwNDAwMTU4YmY5MTQiLCJpYXQiOjE3Mzg4NDU2NzAsImV4cCI6MTc0MDA1NTI3MH0.CYdbOA_p4HDBFUBspbchB22mKDEJzM4CV3DTG6vcqEM",
        },
      });
      console.log(resp);
      if (resp.ok) {
        const comments = await resp.json();
        this.setState({ comments });
        console.log(comments);
      } else {
        console.log("Errore nel recupero dei commenti");
      }
    } catch (error) {
      console.log("Errore nella richiesta API:", error);
    } finally {
      this.setState({ isLoading: false }); // Correzione del finally
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div>
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant="primary" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <h5>Commenti:</h5>
        {/* Passiamo lo stato corretto */}
        <CommentList comments={this.state.comments} />
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;
