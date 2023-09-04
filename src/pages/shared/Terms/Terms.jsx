// import React from 'react';

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container className="vh-100 py-5">
      <h3>Terms & Conditions</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        asperiores, tempore nemo aperiam natus quidem quod molestiae saepe
        recusandae reprehenderit alias inventore laudantium minus voluptatum
        nulla officia. Consequuntur, quia et!
      </p>

      <Link to={"/register"}> {"<"}- Go back to registration form.</Link>
    </Container>
  );
};

export default Terms;
