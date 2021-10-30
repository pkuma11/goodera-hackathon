import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import SignIn from "./SignIn";

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRouter;
