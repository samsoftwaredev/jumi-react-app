import { Button, Col, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import { BannerStyle, ImageStyle } from "./Home.style";
import Translate from "../../../components/Translate";
import MainLayout from "../../../layout/MainLayout/MainLayout";
import { useHistory } from "react-router";
import { LiveBackground } from "../../../components";
import { groupPeople } from "./images";

const Home = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const goTo = () => history.push("/app/rosary");

  return (
    <MainLayout>
      <LiveBackground>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={12} md={6}>
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
          </Col>
          <Col md={6}>
            <ImageStyle
              className="img-fluid"
              src={groupPeople}
              alt="Virgin Mary"
            />
          </Col>
        </Row>
      </LiveBackground>
    </MainLayout>
  );
};

export default Home;
