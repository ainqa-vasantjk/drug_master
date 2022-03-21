import React from "react";
import { actions } from "drugmaster_v_dbinder";
import { connect } from "react-redux";
import { NamespacesConsumer, translate } from "react-i18next";
import { withRouter } from "react-router-dom";
import { languageOptions, Permissions } from "../../utils";
import { LoggerContext } from "../../contexts";

import IDMPANEL from "idmpanel-pkg";
import Config from "../../config";
import cookie from "react-cookies";

import * as ALL from "../../components";
import * as ALLMCORE from "@material-ui/core";

import { Modal } from "qdm-component-library";

import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { ComponentRender } from "custom-material-ui-component";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Addnewavailablestrength extends React.Component {
  static contextType = LoggerContext;
  constructor(props, context) {
    super(props, context);
    this.state = {
      permissionData: null,
    };
  }

  changeState = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  componentDidMount() {
    /// initializing transalation
    if (sessionStorage.defaultLng) {
      const { i18n } = this.props;
      i18n.changeLanguage(sessionStorage.defaultLng);
    }

    /// setlogger && dispatch of all events

    /// fetch all permission
  }

  ///fetching all permission

  shouldComponentUpdate(props, state) {
    return true;
  }

  render() {
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
                  style={qdmstyles.WXwc}
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
                        style={qdmstyles.Uej}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"anTxp"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"2"}
                      md={"2"}
                      sm={"2"}
                      xl={"2"}
                      xs={"2"}
                      style={qdmstyles.anTxp}
                    >
                      <Button
                        key={"0"}
                        onClick={() => {
                          this.props.history.push(
                            "/availablestrengthtabaddedit"
                          );
                        }}
                        id={"available_strength_add_new_button"}
                        variant={"text"}
                        color={"primary"}
                        children={"+ Add New"}
                        aliasName={"availablestrengthaddnewbutton"}
                        style={qdmstyles.pGueF}
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
                      <ComponentRender
                        key={"0"}
                        id={"cd0XZ"}
                        component={
                          <ALL.Availablestrengthtableheader
                            propsState={this.state}
                            setFun={(value) => {
                              this.changeState(
                                "Availablestrengthtableheader",
                                value
                              );
                            }}
                            stateName={"Availablestrengthtableheader"}
                            statevalue={
                              this.state?.Availablestrengthtableheader
                            }
                          />
                        }
                      ></ComponentRender>
                      <ComponentRender
                        key={"1"}
                        id={"yd2Il"}
                        component={
                          <ALL.Availablestrengthtablevalue
                            propsState={this.state}
                            setFun={(value) => {
                              this.changeState(
                                "Availablestrengthtablevalue",
                                value
                              );
                            }}
                            stateName={"Availablestrengthtablevalue"}
                            statevalue={this.state?.Availablestrengthtablevalue}
                          />
                        }
                      ></ComponentRender>
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
}
const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  actions
)(withRouter(translate()(Addnewavailablestrength)));
