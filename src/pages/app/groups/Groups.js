import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Overview, Group } from "./pages";

const Groups = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={Overview} />
      <Route path={`${path}/:id`} component={Group} />
    </Switch>
  );
};

export default Groups;
