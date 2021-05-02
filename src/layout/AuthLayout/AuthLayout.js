import { Container } from "reactstrap";
import AppNavigation from "../components/navigation/AppNavigation";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <AppNavigation />
      <Container>{children}</Container>
    </div>
  );
};

export default AuthLayout;
