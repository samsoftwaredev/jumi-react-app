import { Col, Container, Row } from "reactstrap";
import Translate from "../Translate";
import { FooterStyle } from "./Footer.style";

const Footer = () => {
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
    <FooterStyle id="footer">
      <Container>
        <Row className="pt-2 align-items-center">
          <Col md={6}>
            <p className="text-center text-muted">
              © Copyright {new Date().getFullYear()} JUMI
            </p>
          </Col>
          <Col md={6}>
            <h6>
              <Translate text="followUs.label" />:
            </h6>
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
    </FooterStyle>
  );
};
export default Footer;
