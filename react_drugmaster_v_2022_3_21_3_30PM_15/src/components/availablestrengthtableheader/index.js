import React from "react";
import { actions } from "drugmaster_v_dbinder";
import { NamespacesConsumer, translate } from "react-i18next";
import { withRouter } from "react-router-dom";
import { languageOptions, Permissions } from "../../utils";
import { LoggerContext } from "../../contexts";
import IDMPANEL from "idmpanel-pkg";
import { useDispatch, useSelector } from "react-redux";
import Config from "../../config";
import * as ALLMCORE from "@material-ui/core";
import cookie from "react-cookies";

import * as ALL from "../../components";
import { Modal } from "qdm-component-library";
import { Grid, Typography } from "@material-ui/core";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

function Availablestrengthtableheader(props) {
  const dispatch = useDispatch();

  const contextType = React.useContext(LoggerContext);
  const [state, setState] = React.useState({
    permissionData: null,
  });

  const changeState = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  React.useEffect(() => {
    /// initializing transalation
    if (sessionStorage.defaultLng) {
      const { i18n } = props;
      i18n.changeLanguage(sessionStorage.defaultLng);
    }
    /// setlogger && dispatch of all events

    /// fetch all permission
  }, []);

  ///fetching all permission

  React.useEffect(() => {}, [state]);

  const { data, index } = props;

  return (
    <NamespacesConsumer>
      {(t, { i18n }) => (
        <React.Fragment>
          <Grid
            key={"0"}
            id={"UYSha"}
            container={true}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            lg={"12"}
            md={"12"}
            sm={"12"}
            xl={"12"}
            xs={"12"}
            style={qdmstyles.UYSha}
          >
            <Grid
              key={"0"}
              id={"8k4Lv"}
              container={true}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={"3"}
              md={"3"}
              sm={"3"}
              xl={"3"}
              xs={"3"}
            >
              <Typography
                key={"0"}
                id={"c3m1q"}
                align={"inherit"}
                color={"initial"}
                display={"initial"}
                variant={"body1"}
                children={"Strength Value"}
                style={qdmstyles.cmq}
              ></Typography>
            </Grid>
            <Grid
              key={"1"}
              id={"XTsif"}
              container={true}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={"7"}
              md={"7"}
              sm={"7"}
              xl={"7"}
              xs={"7"}
            >
              <Typography
                key={"0"}
                id={"6PsUC"}
                align={"inherit"}
                color={"initial"}
                display={"initial"}
                variant={"body1"}
                children={"Allowed Values for Order"}
                style={qdmstyles.PsUC}
              ></Typography>
            </Grid>
            <Grid
              key={"2"}
              id={"S0IIq"}
              container={true}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              lg={"2"}
              md={"2"}
              sm={"2"}
              xl={"2"}
              xs={"2"}
            >
              <Typography
                key={"0"}
                id={"Qzi02"}
                align={"inherit"}
                color={"initial"}
                display={"initial"}
                variant={"body1"}
                children={"Action"}
                style={qdmstyles.Qzi}
              ></Typography>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Availablestrengthtableheader));
