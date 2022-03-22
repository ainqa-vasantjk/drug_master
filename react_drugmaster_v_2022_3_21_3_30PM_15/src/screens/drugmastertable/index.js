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

import { Paper, Grid, Typography, Button } from "@material-ui/core";
import { CustRowTable } from "custom-material-ui-component";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Drugmastertable extends React.Component {
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
            <Paper
              key={"0"}
              id={"S6KKa"}
              elevation={"{3}"}
              style={qdmstyles.SKKa}
            >
              <Paper
                key={"0"}
                id={"zTaTr"}
                elevation={"{3}"}
                style={qdmstyles.zTaTr}
              >
                <Grid
                  key={"0"}
                  id={"q6Nyp"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid
                    key={"0"}
                    id={"P48UY"}
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
                      id={"ajikb"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"2"}
                      item={true}
                      md={"4"}
                      sm={"4"}
                      xl={"2"}
                      xs={"4"}
                    >
                      <Typography
                        key={"0"}
                        id={"Kfob3"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Drug Catalog Master"}
                        style={qdmstyles.Kfob}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"SD4cP"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"2"}
                      item={true}
                      md={"2"}
                      sm={"2"}
                      xs={"2"}
                      xl={"2"}
                      style={qdmstyles.SDcP}
                    >
                      <Button
                        onClick={() => {
                          this.props.history.push("/drugintscreen");
                        }}
                        key={"0"}
                        id={"HlSGX"}
                        variant={"contained"}
                        color={"primary"}
                        children={"+ add new"}
                        comment={""}
                        disableElevation={true}
                        style={qdmstyles.HlSGX}
                      ></Button>
                    </Grid>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"TMgBy"}
                    container={true}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    lg={"12"}
                    md={"12"}
                    sm={"12"}
                    xl={"12"}
                    xs={"12"}
                    item={true}
                    style={qdmstyles.TMgBy}
                  >
                    <Grid
                      key={"0"}
                      id={"QlgdO"}
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
                        id={"G28xA"}
                        elevation={"{3}"}
                        style={qdmstyles.GxA}
                      >
                        <CustRowTable
                          key={"0"}
                          id={"ruP7y"}
                          HeaderComp={
                            <ALL.Drugmastertablerow
                              propsState={this.state}
                              setFun={(value) => {
                                this.changeState("Drugmastertablerow", value);
                              }}
                              stateName={"Drugmastertablerow"}
                              statevalue={this.state?.Drugmastertablerow}
                            />
                          }
                          BodyComp={
                            <ALL.Drugmastertablevalue
                              propsState={this.state}
                              setFun={(value) => {
                                this.changeState("Drugmastertablevalue", value);
                              }}
                              stateName={"Drugmastertablevalue"}
                              statevalue={this.state?.Drugmastertablevalue}
                            />
                          }
                        ></CustRowTable>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Paper>
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
)(withRouter(translate()(Drugmastertable)));
