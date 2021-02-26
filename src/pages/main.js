import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../assets/main.scss";
import App from "./app";
import Home from "./app/home/home";
import Auth from "./auth";

const Main = () => {
  return (
    <div className="main">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/app">
            <App />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
