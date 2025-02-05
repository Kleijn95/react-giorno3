const Footer = (props) => {
  return (
    <div className="bg-dark text-white text-center">
      <p className="mt-5 py-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis officia hic doloribus totam, quas
        distinctio dolore fuga reiciendis. Officia, non illum! Pariatur, dolorum consequuntur minima quas incidunt eius
        voluptatibus distinctio?
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <img
          src="https://images.unsplash.com/photo-1593882100241-aef1449fe351?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={props.imageWidth}
        />
        <p className="ms-2">&copy; 2025</p>
      </div>
    </div>
  );
};

export default Footer;
