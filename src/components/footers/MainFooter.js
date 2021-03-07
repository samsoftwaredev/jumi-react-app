import { Col, Container, Row } from "reactstrap";
import Translate from "../Translate";

const MainFooter = () => {
  const socialMedia = [
    {
      icon: "",
      label: "Facebook",
      url: "https://www.facebook.com/112283280567588/",
    },
    {
      icon: "",
      label: "YouTube",
      url: "https://youtube.com/channel/UCq7PXebEbR3Pw6n2LLQppmA",
    },
  ];

  return (
    <footer id="footer" className="bg-light mt-5">
      <Container>
        <Row className="pt-2 align-items-center">
          <Col md={6}>
            <p className="text-center text-muted">
              © Copyright {new Date().getFullYear()} JUMI
            </p>
          </Col>
          <Col md={6}>
            <h5>
              <Translate text="followUs.label" />:
            </h5>
            <ul className="ml-4 list-group ">
              {socialMedia.map((s) => (
                <li key={s.label}>
                  <a target="social-media" href={s.url}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default MainFooter;
