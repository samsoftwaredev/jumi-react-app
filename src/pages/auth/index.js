import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import PageNotFound from "../../components/error/PageNotFound";
import LogIn from "./login";
import SignUp from "./signup";

const Auth = () => {
  let match = useRouteMatch();
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path={`${match.path}/log-in`}>
          <LogIn />
        </Route>
        <Route exact path={`${match.path}/sign-up`}>
          <SignUp />
        </Route>
        <Route path={`${match.path}`}>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Auth;
