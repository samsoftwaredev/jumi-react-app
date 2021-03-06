import { Link } from "react-router-dom";
import { Button, Jumbotron } from "reactstrap";
import Translate from "../../../components/Translate";
import MainLayout from "../../../layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="pt-5">
        <Jumbotron>
          <h1 className="display-3">
            <Translate text="app_name_label" />
          </h1>
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
                <Translate text="pray_rosary_label" />
              </Link>
            </Button>
          </p>
        </Jumbotron>
      </div>
    </MainLayout>
  );
};

export default Home;
