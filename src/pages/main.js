import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../assets/main.scss";
import PageNotFound from "../components/error/PageNotFound";
import App from "./app";
import Home from "./app/home/home";
import Auth from "./auth";

const Main = () => {
  return (
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/auth" component={Auth} />
      <Route exact path="/" component={Home} />
      <Route exact path="/error" component={PageNotFound} />
      <Redirect to="/error" />
    </Switch>
  );
};

export default Main;
