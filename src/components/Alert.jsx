import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <Alert variant="success">
      <Alert.Heading>Antonios BookShop</Alert.Heading>
      <p className="fw-light">The Magic Of Reading</p> {/* Sottotitolo */}
      <hr />
      <p className="mb-0">Whatever book you are looking for, you will find it here :)</p>
    </Alert>
  );
}

export default Welcome;
