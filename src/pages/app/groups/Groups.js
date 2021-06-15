import { Col, Container, Row } from "reactstrap";
import MainLayout from "../../../layout/MainLayout/MainLayout";
import { hmsp, tov } from "./images";

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
      "Learn the about the word of God, while having fun doing activities and metting people your age.",
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
  return (
    <MainLayout>
      <h2>Meetups:</h2>
      <Container>
        {listOfGroups.map((i) => (
          <Row key={i.id} className="d-flex justify-content-center my-5" form>
            <Col xs={2} sm={2} md={4}>
              <img
                className="rounded img-fluid"
                src={i?.image}
                alt={i?.eventName}
              />
            </Col>
            <Col>
              <small className="d-block">{i?.date}</small>
              <h5>{i?.eventName}</h5>
              <p>{i?.institutionName}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </MainLayout>
  );
};

export default Groups;
