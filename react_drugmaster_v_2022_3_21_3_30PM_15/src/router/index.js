import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./routes";
import PrivateRoute from "./privateRouter";

import {
  NotFound,
  Drugintscreen,
  Alertrestriction,
  Drugcompound,
  Test,
  Drugmastertable,
} from "./../screens";

const RouterApp = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={<></>} />

        {/*drugintscreen Route */}

        <Route
          path={Routes.drugintscreen}
          component={Drugintscreen}
          idmEnabled={false}
        />

        {/*alertrestriction Route */}

        <Route
          path={Routes.alertrestriction}
          component={Alertrestriction}
          idmEnabled={false}
        />

        {/*drugcompound Route */}

        <Route
          path={Routes.drugcompound}
          component={Drugcompound}
          idmEnabled={false}
        />

        {/*test Route */}

        <Route path={Routes.test} component={Test} idmEnabled={false} />

        {/*drugmastertable Route */}

        <Route
          path={Routes.drugmastertable}
          component={Drugmastertable}
          idmEnabled={false}
        />

        {/* For unknow/non-defined path */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
