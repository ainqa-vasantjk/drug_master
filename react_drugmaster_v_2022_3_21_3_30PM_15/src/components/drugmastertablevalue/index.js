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
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  Switch,
  Divider,
} from "@material-ui/core";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

function Drugmastertablevalue(props) {
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
            id={"I06HM"}
            container={true}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            lg={"12"}
            md={"12"}
            sm={"12"}
            xl={"12"}
            xs={"12"}
          >
            <Grid
              key={"0"}
              id={"xHezf"}
              container={""}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              lg={"12"}
              md={"12"}
              sm={"12"}
              xl={"12"}
              xs={"12"}
              item={true}
            >
              <Paper
                key={"0"}
                id={"gbfHy"}
                elevation={"{3}"}
                style={qdmstyles.DBqDA}
              >
                <Grid
                  key={"0"}
                  id={"qAc9p"}
                  container={true}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                >
                  <Grid
                    key={"0"}
                    id={"HKmhv"}
                    container={true}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    lg={"9"}
                    md={"9"}
                    sm={"9"}
                    xl={"9"}
                    xs={"9"}
                    spacing={1}
                    style={qdmstyles.MzG}
                  >
                    <Grid
                      key={"0"}
                      id={"LHGC4"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"3"}
                      item={true}
                      md={"3"}
                      sm={"3"}
                      xl={"3"}
                      xs={"3"}
                      style={qdmstyles.VAOQU}
                    >
                      <Typography
                        key={"0"}
                        id={"code_and_description_value"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"ROUTGEN-001 & AAMOXl"}
                        aliasName={"codeanddescriptionvalue"}
                        noWrap={true}
                        style={qdmstyles.bzWxP}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"MA8np"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"2"}
                      item={true}
                      md={"2"}
                      sm={"2"}
                      xl={"2"}
                      xs={"2"}
                      wrap={"wrap"}
                      style={qdmstyles.Wfj}
                    >
                      <Typography
                        key={"0"}
                        id={"class_value"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Cardiovascular"}
                        aliasName={"classvalue"}
                        noWrap={true}
                        style={qdmstyles.cHPhn}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"2"}
                      id={"jhYjV"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"2"}
                      item={true}
                      md={"2"}
                      sm={"2"}
                      xl={"2"}
                      xs={"2"}
                    >
                      <Typography
                        key={"0"}
                        id={"category_value"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Regular"}
                        aliasName={"categoryvalue"}
                        noWrap={true}
                        style={qdmstyles.cMNw}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"3"}
                      id={"Tz6TR"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"2"}
                      item={true}
                      sm={"2"}
                      xl={"2"}
                      xs={"2"}
                      md={"2"}
                    >
                      <Typography
                        key={"0"}
                        id={"type_value"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Medicine"}
                        aliasName={"typevalue"}
                        noWrap={true}
                        style={qdmstyles.GBTG}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"4"}
                      id={"fW36i"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={1}
                      item={true}
                      md={1}
                      sm={1}
                      xl={1}
                      xs={1}
                    >
                      <Typography
                        key={"0"}
                        id={"form_value"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Tablet"}
                        aliasName={"formvalue"}
                        noWrap={true}
                        style={qdmstyles.MSx}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"5"}
                      id={"ecYCH"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={1}
                      item={true}
                      md={1}
                      sm={1}
                      xl={1}
                      xs={1}
                    >
                      <Typography
                        key={"0"}
                        id={"route_value"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Oral"}
                        aliasName={"routevalue"}
                        noWrap={true}
                        style={qdmstyles.rDsyW}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"6"}
                      id={"ev6i9"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={1}
                      item={true}
                      md={1}
                      sm={1}
                      xl={1}
                      xs={1}
                      style={qdmstyles.HLu}
                    >
                      <Avatar
                        key={"0"}
                        onClick={() => {
                          props.history.push("/available");
                        }}
                        id={"strength_value_icon"}
                        alt={"Avatar"}
                        variant={"rounded"}
                        aliasName={"strengthvalueicon"}
                        src={
                          "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/323303442"
                        }
                        style={qdmstyles.PnsL}
                      ></Avatar>
                    </Grid>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"hUUJ7"}
                    container={true}
                    direction={"row"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    lg={"2"}
                    md={"2"}
                    sm={"2"}
                    xl={"2"}
                    xs={"2"}
                    spacing={1}
                    style={qdmstyles.pvGla}
                  >
                    <Grid
                      key={"0"}
                      id={"BYd0H"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"6"}
                      item={true}
                      md={"6"}
                      sm={"6"}
                      xl={"6"}
                      xs={"6"}
                      style={qdmstyles.fWwA}
                    >
                      <Switch
                        key={"0"}
                        id={"status_value"}
                        checked={true}
                        color={"primary"}
                        name={"switch"}
                        aliasName={"statusvalue"}
                      ></Switch>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"YZbST"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"6"}
                      item={true}
                      xl={"6"}
                      xs={"6"}
                      sm={"6"}
                      md={"6"}
                      style={qdmstyles.qkKXh}
                    >
                      <Avatar
                        key={"0"}
                        id={"action_value_icon"}
                        alt={"Avatar"}
                        variant={"rounded"}
                        aliasName={"actionvalueicon"}
                        src={
                          "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/323299686"
                        }
                        style={qdmstyles.zrlt}
                      ></Avatar>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider key={"1"} id={"jL9Jj"} variant={"fullWidth"}></Divider>
              </Paper>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Drugmastertablevalue));
