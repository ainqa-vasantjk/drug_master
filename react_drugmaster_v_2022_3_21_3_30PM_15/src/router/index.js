import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./routes";
import PrivateRoute from "./privateRouter";

import {
  NotFound,
  Uploadcard,
  Drugintscreen,
  Alertrestriction,
  Drugcompound,
  Unitofmeasure,
  Mappeddespensable,
  Despensedefault,
  Test,
  Availablestrengthtabaddedit,
  Despenseandcharge,
  Status,
  Addnewavailablestrength,
  Available,
  Availablestrengths,
  Samplescreen,
  Drugmastertable,
  Instructionwindow,
  Synonymdrugmaster,
  Drugmasterphmaster,
  Drugmasterinstruction,
} from "./../screens";

const RouterApp = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={<></>} />

        {/*uploadcard Route */}

        <Route
          path={Routes.uploadcard}
          component={Uploadcard}
          idmEnabled={false}
        />

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

        {/*unitofmeasure Route */}

        <Route
          path={Routes.unitofmeasure}
          component={Unitofmeasure}
          idmEnabled={false}
        />

        {/*mappeddespensable Route */}

        <Route
          path={Routes.mappeddespensable}
          component={Mappeddespensable}
          idmEnabled={false}
        />

        {/*despensedefault Route */}

        <Route
          path={Routes.despensedefault}
          component={Despensedefault}
          idmEnabled={false}
        />

        {/*test Route */}

        <Route path={Routes.test} component={Test} idmEnabled={false} />

        {/*availablestrengthtabaddedit Route */}

        <Route
          path={Routes.availablestrengthtabaddedit}
          component={Availablestrengthtabaddedit}
          idmEnabled={false}
        />

        {/*despenseandcharge Route */}

        <Route
          path={Routes.despenseandcharge}
          component={Despenseandcharge}
          idmEnabled={false}
        />

        {/*status Route */}

        <Route path={Routes.status} component={Status} idmEnabled={false} />

        {/*addnewavailablestrength Route */}

        <Route
          path={Routes.addnewavailablestrength}
          component={Addnewavailablestrength}
          idmEnabled={false}
        />

        {/*available Route */}

        <Route
          path={Routes.available}
          component={Available}
          idmEnabled={false}
        />

        {/*availablestrengths Route */}

        <Route
          path={Routes.availablestrengths}
          component={Availablestrengths}
          idmEnabled={false}
        />

        {/*samplescreen Route */}

        <Route
          path={Routes.samplescreen}
          component={Samplescreen}
          idmEnabled={false}
        />

        {/*drugmastertable Route */}

        <Route
          path={Routes.drugmastertable}
          component={Drugmastertable}
          idmEnabled={false}
        />

        {/*instructionwindow Route */}

        <Route
          path={Routes.instructionwindow}
          component={Instructionwindow}
          idmEnabled={false}
        />

        {/*synonymdrugmaster Route */}

        <Route
          path={Routes.synonymdrugmaster}
          component={Synonymdrugmaster}
          idmEnabled={false}
        />

        {/*drugmasterphmaster Route */}

        <Route
          path={Routes.drugmasterphmaster}
          component={Drugmasterphmaster}
          idmEnabled={false}
        />

        {/*drugmasterinstruction Route */}

        <Route
          path={Routes.drugmasterinstruction}
          component={Drugmasterinstruction}
          idmEnabled={false}
        />

        {/* For unknow/non-defined path */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
