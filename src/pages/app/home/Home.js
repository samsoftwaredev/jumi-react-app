import { Button, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { BannerStyle, ImageStyle, RowStyle } from "./Home.style";
import Translate from "../../../components/Translate";
import MainLayout from "../../../layout/MainLayout/MainLayout";
import { useHistory } from "react-router";
import { LiveBackground } from "../../../components";
import { groupPeople, virginMary } from "./images";

const Home = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <MainLayout>
      <LiveBackground>
        <RowStyle className="my-5 d-flex justify-content-center align-items-center">
          <Col sm={12} md={6}>
            <BannerStyle>
              <h1 className="banner-header">
                <Translate text="app.name" />
              </h1>
              <p className="banner-description">{t("objective.label")}</p>
              <Button
                className="btn-pink"
                onClick={() => history.push("/app/groups")}
              >
                <Translate text="religiousGroups.invite" />
              </Button>
            </BannerStyle>
          </Col>
          <Col md={6}>
            <ImageStyle
              className="img-fluid"
              src={groupPeople}
              alt="Friends Hugging"
            />
          </Col>
        </RowStyle>
        <RowStyle className="d-flex justify-content-center align-items-center">
          <Col md={6}>
            <ImageStyle
              className="img-fluid"
              src={virginMary}
              alt="Virgin Mary"
            />
          </Col>
          <Col sm={12} md={6}>
            <BannerStyle className="text-right">
              <h3 className="banner-header-sub">
                <Translate text="rosary.label" />
              </h3>
              <p className="banner-description-sub">
                {t("rosary.description")}
              </p>
              <p className="banner-action">{t("rosary.invite")}</p>
              <Button
                className="btn-pink"
                onClick={() => history.push("/app/rosary")}
              >
                <Translate text="prayRosary.label" />
              </Button>
            </BannerStyle>
          </Col>
        </RowStyle>
      </LiveBackground>
    </MainLayout>
  );
};

export default Home;
