import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";

const Hero = () => {
  return (
    <div className="pt-5">
      <Jumbotron>
        <h1 className="display-3">Juventud Misionera!</h1>
        <p className="lead">
          Atraer a más jóvenes a conocer de Dios y la religión Católica
        </p>
        <hr className="my-2" />
        <p>
          Las actividades misioneras tienen como objetivo la evangelización.
          Unamonos en oración!
        </p>
        <p className="lead">
          <Button color="primary">
            <Link to="/app/rosary" className="text-white">
              Rezar Rosario
            </Link>
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Hero;
