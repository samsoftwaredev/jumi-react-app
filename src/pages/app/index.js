import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Groups from "./groups/groups";
import Home from "./home/home";
import Rosary from "./rosary/rosary";

const App = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/groups">
          <Groups />
        </Route>
        <Route path="/rosary">
          <Rosary />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
