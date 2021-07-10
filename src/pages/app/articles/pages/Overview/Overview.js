import { Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { LiveBackground, SectionHeader } from "../../../../../components";
import MainLayout from "../../../../../layout/MainLayout";
import { ArticleCard } from "../../containers";

const listOfGroups = [
  {
    id: "0",
    title: "Is there more than one way to pray?",
    series: 1,
    episode: 1,
    description: "Aprenderas como orar en 15 differentes modalidades.",
  },
];

const Overview = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <LiveBackground>
        <Row className="mb-5 d-flex justify-content-center align-items-center">
          <Col sm={12} md={6}>
            <SectionHeader
              title={t("articles.label")}
              description={t("articles.description")}
            />
          </Col>
          <Col sm={12} md={6}>
            {/* <ImageStyle
              className="img-fluid"
              src={people}
              alt="Young People Group"
            /> */}
          </Col>
        </Row>
      </LiveBackground>
      <Row className="m-md-3">
        {listOfGroups.map((i) => (
          <ArticleCard
            key={i?.id}
            id={i?.id}
            image={i?.image}
            title={i?.title}
            description={i?.description}
            series={i?.series}
            episode={i?.episode}
          />
        ))}
      </Row>
    </MainLayout>
  );
};

export default Overview;
