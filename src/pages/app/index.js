import React, { lazy, Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Spinner } from "reactstrap";

const Groups = lazy(() => import("./groups"));
const Rosary = lazy(() => import("./rosary"));

const App = () => {
  let match = useRouteMatch();
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path={`${match.path}/groups`} component={Groups} />
        <Route path={`${match.path}/rosary`} component={Rosary} />
      </Switch>
    </Suspense>
  );
};

export default App;
