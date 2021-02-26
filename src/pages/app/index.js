import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Groups from "./groups/groups";
import Home from "./home/home";
import Rosary from "./rosary/rosary";

const App = () => {
  let match = useRouteMatch();
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path={`${match.path}/groups`}>
          <Groups />
        </Route>
        <Route exact path={`${match.path}/rosary`}>
          <Rosary />
        </Route>
        <Route path={`${match.path}`}>
          <p>Page not found! 404</p>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
