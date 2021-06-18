import { useTranslation } from "react-i18next";
import { Row, Col } from "reactstrap";
import { LiveBackground, SectionHeader } from "../../../components";
import MainLayout from "../../../layout/MainLayout/MainLayout";
import { GroupCard } from "./containers";
import { hmsp, tov, people } from "./images";
import { ImageStyle } from "./Groups.style";

const listOfGroups = [
  {
    id: "1",
    eventName: "Talleres de oracion y vida para Adultos",
    abbrv: "TOV",
    location: "Richmond, CA. USA",
    online: false,
    offline: true,
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
    offline: true,
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
    offline: false,
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
    offline: true,
    date: new Date().toString(),
    languages: ["en"],
    image: "",
    institutionName: "",
    description: "",
    ages: "18-30",
  },
];

const Groups = () => {
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
              alt="Young-people-hugging"
            />
          </Col>
        </Row>
      </LiveBackground>
      <Row>
        {listOfGroups.map((i) => (
          <GroupCard
            key={i?.id}
            image={i?.image}
            eventName={i?.eventName}
            institutionName={i?.institutionName}
            ages={i?.ages}
            online={i?.online}
          />
        ))}
      </Row>
    </MainLayout>
  );
};

export default Groups;
