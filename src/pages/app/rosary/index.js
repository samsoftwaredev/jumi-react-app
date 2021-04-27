import React from "react";
import {
  useRouteMatch,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import Translate from "../../../components/Translate";
import MainLayout from "../../../layout/MainLayout";
import RosaryContextProvider from "./context/RosaryContext";
import HowTo from "./pages/HowTo";
import Prayer from "./pages/Prayer";

const Rosary = () => {
  let match = useRouteMatch();
  let location = useLocation();

  const tabs = [
    {
      path: match.path,
      label: "prayRosary.label",
      component: Prayer,
    },
    {
      path: `${match.path}/how-to-pray`,
      label: "howToPrayRosary.label",
      component: HowTo,
    },
  ];

  return (
    <RosaryContextProvider>
      <MainLayout>
        {/* tabs to view components */}
        <Nav tabs className="d-flex justify-content-center">
          {tabs.map((t) => (
            <NavItem key={t.label}>
              <Link
                className={`nav-link ${
                  location.pathname === t.path && "active"
                }`}
                to={t.path}
              >
                <Translate text={t.label} />
              </Link>
            </NavItem>
          ))}
        </Nav>
        {/* routes & components */}
        <Switch>
          {tabs.map((t) => (
            <Route key={t?.path} exact path={t?.path} component={t.component} />
          ))}
        </Switch>
      </MainLayout>
    </RosaryContextProvider>
  );
};

export default Rosary;
