import "./App.css";
import Container from "react-bootstrap/Container";
import Welcome from "./components/alert";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Footer from "./components/Footer";
import ColorSchemesExample from "./components/TopBar";
import fantasy from "../src/data/fantasy.json";
// import SingleBook from "./components/SingleBook";
import { Row } from "react-bootstrap";
import BookList from "./components/Booklist";
// import SingleBook from "./components/SingleBook";

function App() {
  return (
    <>
      <ColorSchemesExample title="Antonio's Book Shop"></ColorSchemesExample>
      <Container fluid className="mt-3">
        <Welcome></Welcome>
      </Container>
      <Container>
        <Row>
          {/* <SingleBook asin={fantasy[0].asin} title={fantasy[0].title} img={fantasy[0].img} price={fantasy[0].price} /> */}
          <BookList books={fantasy} />
        </Row>
      </Container>
      <Footer imageWidth={50}></Footer>
    </>
  );
}

export default App;
