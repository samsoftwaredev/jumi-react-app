import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Jumbotron } from "reactstrap";
import Translate from "../../../components/Translate";
import MainLayout from "../../../layout/MainLayout/MainLayout";

const Home = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="pt-5">
        <Jumbotron>
          <h1 className="display-3">
            <Translate text="app.name" />
          </h1>
          <p className="lead">{t("objective.label")}</p>
          <hr className="my-2" />
          <p>{t("objective.description")}</p>
          <p className="lead">
            <Link to="/app/rosary" className="btn btn-primary">
              <Translate text="prayRosary.label" />
            </Link>
          </p>
        </Jumbotron>
      </div>
    </MainLayout>
  );
};

export default Home;
