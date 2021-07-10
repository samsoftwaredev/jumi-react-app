import React, { lazy, Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { LoadingPage } from "../../components/Loading";

const Rosary = lazy(() => import("./rosary"));
const Home = lazy(() => import("./home"));
const Groups = lazy(() => import("./groups"));
const Articles = lazy(() => import("./articles"));

const Main = () => {
  let match = useRouteMatch();
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route exact path={`${match.path}/`} component={Home} />
        <Route path={`${match.path}/rosary`} component={Rosary} />
        <Route path={`${match.path}/groups`} component={Groups} />
        <Route path={`${match.path}/articles`} component={Articles} />
      </Switch>
    </Suspense>
  );
};

export default Main;
