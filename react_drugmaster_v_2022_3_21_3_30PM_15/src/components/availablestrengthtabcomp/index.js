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
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { CustRowTable } from "custom-material-ui-component";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

function Availablestrengthtabcomp(props) {
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
            id={"wXq4l"}
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
              id={"jMabS"}
              container={""}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              lg={"12"}
              md={"12"}
              sm={"12"}
              xl={"12"}
              xs={"12"}
            >
              <Paper
                key={"0"}
                id={"WXw2c"}
                elevation={"{3}"}
                style={qdmstyles.LKdSH}
              >
                <Grid
                  key={"0"}
                  id={"cDHn4"}
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
                    id={"nP1ez"}
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
                  >
                    <Typography
                      key={"0"}
                      id={"list_of_available_strengths_header"}
                      align={"inherit"}
                      color={"initial"}
                      display={"initial"}
                      variant={"body1"}
                      children={"LIST OF AVAILABLE STRENGTHS"}
                      aliasName={"listofavailablestrengthsheader"}
                      style={qdmstyles.nyjDP}
                    ></Typography>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"anTxp"}
                    container={""}
                    direction={"row"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    lg={"2"}
                    md={"2"}
                    sm={"2"}
                    xl={"2"}
                    xs={"2"}
                    style={qdmstyles.QdpTU}
                  >
                    <Button
                      key={"0"}
                      id={"available_strength_add_new_button"}
                      variant={"text"}
                      color={"primary"}
                      children={"+ Add New"}
                      aliasName={"availablestrengthaddnewbutton"}
                      style={qdmstyles.clx}
                    ></Button>
                  </Grid>
                </Grid>
                <Grid
                  key={"1"}
                  id={"FUAms"}
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
                    id={"VMPVS"}
                    container={""}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    lg={"12"}
                    md={"12"}
                    sm={"12"}
                    xl={"12"}
                    xs={"12"}
                  >
                    <CustRowTable
                      key={"0"}
                      id={"iUGPb"}
                      HeaderComp={
                        <ALL.Availablestrengthtableheader
                          propsState={state}
                          setFun={(value) => {
                            changeState("Availablestrengthtableheader", value);
                          }}
                          stateName={"Availablestrengthtableheader"}
                          statevalue={state?.Availablestrengthtableheader}
                        />
                      }
                      BodyComp={
                        <ALL.Availablestrengthtablevalue
                          propsState={state}
                          setFun={(value) => {
                            changeState("Availablestrengthtablevalue", value);
                          }}
                          stateName={"Availablestrengthtablevalue"}
                          statevalue={state?.Availablestrengthtablevalue}
                        />
                      }
                    ></CustRowTable>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Availablestrengthtabcomp));
