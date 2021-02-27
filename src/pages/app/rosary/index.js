import React from "react";
import {
  useRouteMatch,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import MainLayout from "../../../layout/MainLayout";
import HowTo from "./howTo";
import Prayer from "./prayer";

const Rosary = () => {
  let match = useRouteMatch();
  let location = useLocation();
  // paths
  const rosaryPath = match.path;
  const howToPrayPath = `${match.path}/how-to-pray`;

  return (
    <MainLayout>
      {/* tabs to view content */}
      <Nav tabs className="d-flex justify-content-center">
        <NavItem>
          <Link
            className={`nav-link ${
              location.pathname === rosaryPath && "active"
            }`}
            to={rosaryPath}
          >
            Rezar Rosario
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className={`nav-link ${
              location.pathname === howToPrayPath && "active"
            }`}
            to={howToPrayPath}
          >
            Aprende a Rezar
          </Link>
        </NavItem>
      </Nav>
      {/* routes */}
      <Switch>
        <Route exact path={rosaryPath} component={Prayer} />
        <Route exact path={howToPrayPath} component={HowTo} />
      </Switch>
    </MainLayout>
  );
};

export default Rosary;
