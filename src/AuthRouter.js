import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import SignIn from "./SignIn";
import JobExplore from "./JobExplore";

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/job-explore" component={JobExplore} />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRouter;
