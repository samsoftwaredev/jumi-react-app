import { Container } from "reactstrap";
import MainNavigation from "../components/navigation/MainNavigation";

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <Container className="pt-2">{children}</Container>
    </div>
  );
};

export default MainLayout;
