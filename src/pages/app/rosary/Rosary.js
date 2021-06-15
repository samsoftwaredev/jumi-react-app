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
import MainLayout from "../../../layout/MainLayout/MainLayout";
import RosaryContextProvider from "./context/RosaryContext";
import { Prayer, HowTo } from "./pages";

const Rosary = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();

  const tabs = [
    {
      path: path,
      exact: true,
      label: "prayRosary.label",
      component: Prayer,
    },
    {
      path: `${path}/how-to-pray`,
      exact: false,
      label: "howToPrayRosary.label",
      component: HowTo,
    },
  ];

  return (
    <RosaryContextProvider>
      <MainLayout showFooter={false}>
        {/* tabs to view components */}
        <Nav tabs className="d-flex justify-content-center">
          {tabs.map((t) => (
            <NavItem key={t.label}>
              <Link
                className={`nav-link ${pathname === t.path && "active"}`}
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
            <Route
              exact={t?.exact}
              key={t?.path}
              path={t?.path}
              component={t?.component}
            />
          ))}
        </Switch>
      </MainLayout>
    </RosaryContextProvider>
  );
};

export default Rosary;
