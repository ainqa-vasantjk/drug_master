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

function Alerttablerow(props) {
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
            id={"BKhBE"}
            container={true}
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            style={qdmstyles.BKhBE}
          >
            <Grid
              key={"0"}
              id={"E9D9f"}
              container={true}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={"12"}
              md={"12"}
              sm={"12"}
              xl={"12"}
              xs={"12"}
              style={qdmstyles.EDf}
            >
              <Grid
                key={"0"}
                id={"C7F62"}
                container={""}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                item={true}
                lg={1}
                md={1}
                sm={1}
                xl={1}
                xs={1}
              >
                <Typography
                  key={"0"}
                  id={"yul6K"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"S.No"}
                  style={qdmstyles.yulK}
                ></Typography>
              </Grid>
              <Grid
                key={"1"}
                id={"C7F62"}
                container={""}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                item={true}
                lg={"2"}
                md={"2"}
                sm={"2"}
                xl={"2"}
                xs={"2"}
              >
                <Typography
                  key={"0"}
                  id={"yul6K"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"Facility"}
                  style={qdmstyles.UJvj}
                ></Typography>
              </Grid>
              <Grid
                key={"2"}
                id={"C7F62"}
                container={""}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                item={true}
                lg={"2"}
                md={"2"}
                sm={"2"}
                xl={"2"}
                xs={"2"}
              >
                <Typography
                  key={"0"}
                  id={"yul6K"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"Service Applicability"}
                  style={qdmstyles.wYrM}
                ></Typography>
              </Grid>
              <Grid
                key={"3"}
                id={"C7F62"}
                container={""}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                item={true}
                lg={"3"}
                md={"3"}
                sm={"3"}
                xl={"3"}
                xs={"3"}
              >
                <Typography
                  key={"0"}
                  id={"yul6K"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"Rule type"}
                  style={qdmstyles.HXWqE}
                ></Typography>
              </Grid>
              <Grid
                key={"4"}
                id={"C7F62"}
                container={""}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                item={true}
                lg={"3"}
                md={"3"}
                sm={"3"}
                xl={"3"}
                xs={"3"}
              >
                <Typography
                  key={"0"}
                  id={"yul6K"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"Privilege type"}
                  style={qdmstyles.kYFNc}
                ></Typography>
              </Grid>
              <Grid
                key={"5"}
                id={"C7F62"}
                container={""}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                item={true}
                lg={1}
                md={1}
                sm={1}
                xl={1}
                xs={1}
              >
                <Typography
                  key={"0"}
                  id={"yul6K"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"Action"}
                  style={qdmstyles.igNZh}
                ></Typography>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Alerttablerow));
