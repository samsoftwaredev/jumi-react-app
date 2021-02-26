import { Container } from "reactstrap";
import AppNavigation from "../components/navigation/AppNavigation";

const MainLayout = ({ children }) => {
  return (
    <div>
      <AppNavigation />
      <Container>{children}</Container>
    </div>
  );
};

export default MainLayout;
