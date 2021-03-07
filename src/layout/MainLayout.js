import { Container } from "reactstrap";
import MainFooter from "../components/footers/MainFooter";
import MainNavigation from "../components/navigation/MainNavigation";

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <Container style={{ marginTop: "75px" }} id="container" className="pt-2">
        {children}
      </Container>
      <MainFooter />
    </div>
  );
};

export default MainLayout;