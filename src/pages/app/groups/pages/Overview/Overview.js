import { useTranslation } from "react-i18next";
import { Row, Col } from "reactstrap";
import { LiveBackground, SectionHeader } from "../../../../../components";
import MainLayout from "../../../../../layout/MainLayout";
import { GroupCard } from "../../containers";
import { hmsp, tov, people } from "../../images";
import { ImageStyle } from "./Overview.style";

const listOfGroups = [
  {
    id: "1",
    eventName: "Talleres de oracion y vida para Adultos",
    abbrv: "TOV",
    location: "Richmond, CA. USA",
    online: false,
    inPerson: true,
    date: new Date().toString(),
    languages: ["es"],
    image: tov,
    institutionName: "TOV",
    description: "Aprenderas como orar en 15 differentes modalidades.",
    ages: "21+",
  },
  {
    id: "2",
    eventName: "Juventud Misionera",
    abbrv: "JUMI",
    location: "Richmond, CA. USA",
    online: false,
    inPerson: true,
    date: new Date().toString(),
    languages: ["es"],
    image: hmsp,
    institutionName: "HMSP",
    description:
      "Learn the about the word of God, while having fun doing activities and meeting people your age.",
    ages: "18-30",
  },
  {
    id: "3",
    eventName: "Catholicus",
    abbrv: "",
    location: "El Paso, TX. USA",
    online: true,
    inPerson: false,
    date: new Date().toString(),
    languages: ["es", "en"],
    image: "",
    institutionName: "",
    description: "",
    ages: "18-30",
  },
  {
    id: "4",
    eventName: "New Mans",
    abbrv: "",
    location: "Berkely, CA. USA",
    online: true,
    inPerson: true,
    date: new Date().toString(),
    languages: ["en"],
    image: "",
    institutionName: "",
    description: "",
    ages: "18-30",
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
              title={t("religiousGroups.label")}
              description={t("religiousGroups.description")}
            />
          </Col>
          <Col sm={12} md={6}>
            <ImageStyle
              className="img-fluid"
              src={people}
              alt="Young People Group"
            />
          </Col>
        </Row>
      </LiveBackground>
      <Row className="m-md-3">
        {listOfGroups.map((i) => (
          <GroupCard
            key={i?.id}
            id={i?.id}
            image={i?.image}
            eventName={i?.eventName}
            institutionName={i?.institutionName}
            ages={i?.ages}
            online={i?.online}
            inPerson={i?.inPerson}
          />
        ))}
      </Row>
    </MainLayout>
  );
};

export default Overview;
