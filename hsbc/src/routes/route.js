import React from "react";
import { Switch, Route } from "react-router-dom";

import Customer360 from "../pages/Customer360/Customer360";

export default (
  <Route>
    <Route exact path="/" component={Customer360} />
    <Route exact path="/login" component={Customer360} />
  </Route>
);
