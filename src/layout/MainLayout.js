import { Container } from "reactstrap";
import MainFooter from "../components/footers/MainFooter";
import { TopNav } from "../components/Navigation";

const MainLayout = ({ children }) => {
  return (
    <div>
      <TopNav />
      <Container style={{ marginTop: "75px" }} id="container" className="pt-2">
        {children}
      </Container>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
