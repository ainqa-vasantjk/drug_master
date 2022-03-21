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

import { Grid, Typography, Avatar, Divider } from "@material-ui/core";
import { ComponentRender } from "custom-material-ui-component";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Availablestrengths extends React.Component {
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
              id={"nCDlI"}
              container={true}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid
                key={"0"}
                id={"49HiW"}
                container={true}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                lg={"4"}
                style={qdmstyles.gBtQU}
              >
                <Grid
                  key={"0"}
                  id={"IsWS0"}
                  container={true}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography
                    key={"0"}
                    id={"KdoEF"}
                    align={"inherit"}
                    color={"initial"}
                    display={"initial"}
                    variant={"body1"}
                    children={"AVAILABLE STRENGTH"}
                    style={qdmstyles.zRKoH}
                  ></Typography>
                  <Avatar
                    key={"1"}
                    id={"jgNkt"}
                    alt={"Avatar"}
                    variant={"rounded"}
                    style={qdmstyles.IxZo}
                  ></Avatar>
                </Grid>
                <Grid
                  key={"1"}
                  id={"xlERM"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={"12"}
                >
                  <Divider
                    key={"0"}
                    id={"zF0eV"}
                    variant={"fullWidth"}
                    flexItem={""}
                    orientation={"horizontal"}
                    light={""}
                  ></Divider>
                </Grid>
                <Divider
                  key={"2"}
                  id={"GsCkC"}
                  variant={"fullWidth"}
                  flexItem={true}
                  orientation={"horizontal"}
                ></Divider>
                <Grid
                  key={"3"}
                  id={"mfX8b"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={"12"}
                >
                  <Grid
                    key={"0"}
                    id={"eJY3M"}
                    container={true}
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    lg={"12"}
                    style={qdmstyles.dgvVW}
                  >
                    <Grid
                      key={"0"}
                      id={"37RrS"}
                      container={true}
                      direction={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      lg={"5"}
                    >
                      <Typography
                        key={"0"}
                        id={"0lPoH"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Strength Volume"}
                        style={qdmstyles.DxTTZ}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"OPd6o"}
                      container={true}
                      direction={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      lg={"5"}
                    >
                      <Typography
                        key={"0"}
                        id={"Bm7ZO"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Strength Value"}
                        style={qdmstyles.Rojh}
                      ></Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"cCUCQ"}
                    container={true}
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Grid
                      key={"0"}
                      id={"okMY6"}
                      container={true}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"5"}
                    >
                      <ComponentRender
                        key={"0"}
                        id={"WdRiQ"}
                        component={
                          <ALL.Strengthvalue
                            propsState={this.state}
                            setFun={(value) => {
                              this.changeState("Strengthvalue", value);
                            }}
                            stateName={"Strengthvalue"}
                            statevalue={this.state?.Strengthvalue}
                          />
                        }
                      ></ComponentRender>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"wqOHD"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={1}
                      item={true}
                    >
                      <Typography
                        key={"0"}
                        id={"HeYiG"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"/"}
                        style={qdmstyles.Dy}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"2"}
                      id={"MAldU"}
                      container={true}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"5"}
                    >
                      <ComponentRender
                        key={"0"}
                        id={"yQKkl"}
                        component={
                          <ALL.Strengthvalue
                            propsState={this.state}
                            setFun={(value) => {
                              this.changeState("Strengthvalue", value);
                            }}
                            stateName={"Strengthvalue"}
                            statevalue={this.state?.Strengthvalue}
                          />
                        }
                        style={qdmstyles.NCHld}
                      ></ComponentRender>
                    </Grid>
                  </Grid>
                </Grid>
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
)(withRouter(translate()(Availablestrengths)));
