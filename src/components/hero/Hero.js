import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Hero = (props) => {
  return (
    <div className="pt-5">
      <Jumbotron>
        <h1 className="display-3">Juventud Misionera!</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>Unite a nosotros y aprende de tu religion</p>
        <p className="lead">
          <Button color="primary">Rezar Rosario</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Hero;
