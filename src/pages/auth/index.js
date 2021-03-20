import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { LoadingPage } from "../../components/Loading";

const LogIn = lazy(() => import("./login"));
const SignUp = lazy(() => import("./signup"));
const PageNotFound = lazy(() => import("../../components/error/PageNotFound"));

const Auth = () => {
  let match = useRouteMatch();
  return (
    <Suspense fallback={<LoadingPage />}>
      <Router>
        <Switch>
          <Route exact path={`${match.path}/log-in`} component={LogIn} />
          <Route exact path={`${match.path}/sign-up`} component={SignUp} />
          <Route path={`${match.path}`} component={PageNotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Auth;
