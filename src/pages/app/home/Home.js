import { Button } from "reactstrap";
import { useTranslation } from "react-i18next";
import { BannerStyle } from "./Home.style";
import Translate from "../../../components/Translate";
import MainLayout from "../../../layout/MainLayout/MainLayout";
import { useHistory } from "react-router";

const Home = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const goTo = () => history.push("/app/rosary");

  return (
    <MainLayout>
      <BannerStyle>
        <h1 className="banner-header">
          <Translate text="app.name" />
        </h1>
        <p className="banner-description">{t("objective.label")}</p>
        <p className="banner-action">{t("objective.description")}</p>
        <Button className="banner-button" onClick={goTo}>
          <Translate text="prayRosary.label" />
        </Button>
      </BannerStyle>
    </MainLayout>
  );
};

export default Home;
