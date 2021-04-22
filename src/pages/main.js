import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../assets/styles/main.scss";
import PageNotFound from "../components/error/PageNotFound";
import { LoadingPage } from "../components/Loading";

const Auth = lazy(() => import("./auth"));
const App = lazy(() => import("./app"));
const Home = lazy(() => import("./app/home"));

const Main = () => (
  <Suspense fallback={<LoadingPage />}>
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/auth" component={Auth} />
      <Route exact path="/" component={Home} />
      <Route path="/error" component={PageNotFound} />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Main;
