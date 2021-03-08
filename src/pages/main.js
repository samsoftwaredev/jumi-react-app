import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Spinner } from "reactstrap";
import "../assets/main.scss";
import PageNotFound from "../components/error/PageNotFound";

const Auth = lazy(() => import("./auth"));
const App = lazy(() => import("./app"));
const Home = lazy(() => import("./app/home"));

const Main = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/app" component={App} />
        <Route path="/auth" component={Auth} />
        <Route exact path="/" component={Home} />
        <Route path="/error" component={PageNotFound} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default Main;
