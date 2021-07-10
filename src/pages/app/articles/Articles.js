import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Overview, Article } from "./pages";

const Articles = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={Overview} />
      <Route path={`${path}/:id`} component={Article} />
    </Switch>
  );
};

export default Articles;
