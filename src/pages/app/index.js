import React, { lazy, Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { LoadingPage } from "../../components/Loading";

const Rosary = lazy(() => import("./Rosary"));
const Home = lazy(() => import("./Home"));
const Groups = lazy(() => import("./Groups"));

const Main = () => {
  let match = useRouteMatch();
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route exact path={`${match.path}/`} component={Home} />
        <Route exact path={`${match.path}/rosary`} component={Rosary} />
        <Route exact path={`${match.path}/groups`} component={Groups} />
      </Switch>
    </Suspense>
  );
};

export default Main;
