import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./Components/Signup";

function Router() {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
}

export default Router;
