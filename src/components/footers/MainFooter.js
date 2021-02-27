import { Col, Container, Row } from "reactstrap";

const MainFooter = () => {
  return (
    <footer id="footer" className="bg-light mt-5">
      <Container className="py-4">
        <Row>
          <Col md="4">JUMI</Col>
          <Col md="4">Nav</Col>
          <Col md="4">Social Media</Col>
        </Row>
      </Container>
    </footer>
  );
};
export default MainFooter;
