import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Groups from "./groups";
import Rosary from "./rosary";

const App = () => {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/groups`} component={Groups} />
      <Route path={`${match.path}/rosary`} component={Rosary} />
    </Switch>
  );
};

export default App;
