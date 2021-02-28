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

  const tabs = [
    {
      path: match.path,
      label: "Rezar Rosario",
      component: Prayer,
    },
    {
      path: `${match.path}/how-to-pray`,
      label: "Aprende a Rezar",
      component: HowTo,
    },
  ];

  return (
    <MainLayout>
      {/* tabs to view components */}
      <Nav tabs className="d-flex justify-content-center">
        {tabs.map((t) => (
          <NavItem key={t.label}>
            <Link
              className={`nav-link ${location.pathname === t.path && "active"}`}
              to={t.path}
            >
              {t.label}
            </Link>
          </NavItem>
        ))}
      </Nav>
      {/* routes & component */}
      <Switch>
        {tabs.map((t) => (
          <Route key={t?.path} exact path={t?.path} component={t.component} />
        ))}
      </Switch>
    </MainLayout>
  );
};

export default Rosary;
