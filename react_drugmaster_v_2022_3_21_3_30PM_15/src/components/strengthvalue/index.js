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
import { Grid, Typography, Divider } from "@material-ui/core";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

function Strengthvalue(props) {
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
            id={"eOybp"}
            container={true}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            lg={"12"}
            style={qdmstyles.eOybp}
          >
            <Grid
              key={"0"}
              id={"c7LbR"}
              container={true}
              direction={"row"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              lg={"5"}
            >
              <Typography
                key={"0"}
                id={"P4gb9"}
                align={"inherit"}
                color={"initial"}
                display={"initial"}
                variant={"body1"}
                children={"25"}
                style={qdmstyles.Pgb}
              ></Typography>
            </Grid>
            <Divider
              key={"1"}
              id={"CJ8JH"}
              variant={"fullWidth"}
              flexItem={true}
              orientation={"vertical"}
            ></Divider>
            <Grid
              key={"2"}
              id={"JHsXN"}
              container={true}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={"5"}
            >
              <Typography
                key={"0"}
                id={"0hRk3"}
                align={"inherit"}
                color={"initial"}
                display={"initial"}
                variant={"body1"}
                children={"mg"}
                style={qdmstyles.hRk}
              ></Typography>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Strengthvalue));
