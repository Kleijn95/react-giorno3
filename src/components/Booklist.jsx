import { Button, Form } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "", // Stato per memorizzare la stringa di ricerca
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value }); // Aggiorna la query di ricerca
  };

  render() {
    // Filtra i libri in base alla stringa di ricerca
    const filteredBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <>
        <Form className="d-flex mb-3">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={this.state.searchQuery} // Imposta il valore del campo di ricerca
            onChange={this.handleSearchChange} // Gestisce il cambiamento nel campo di ricerca
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        {/* Mappa i libri filtrati sulla base della ricerca */}
        {filteredBooks.map((book, index) => (
          <SingleBook key={index} title={book.title} img={book.img} price={book.price} />
        ))}
      </>
    );
  }
}

export default BookList;
