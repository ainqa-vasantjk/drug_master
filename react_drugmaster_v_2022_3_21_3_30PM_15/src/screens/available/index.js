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

import { Grid, Paper, Typography, Avatar, Divider } from "@material-ui/core";
import { ComponentRender } from "custom-material-ui-component";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Available extends React.Component {
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
              id={"Z6EBo"}
              container={true}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              lg={"4"}
              md={"4"}
              sm={"4"}
              xl={"4"}
              xs={"4"}
            >
              <Grid
                key={"0"}
                id={"Z9Hs0"}
                container={""}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                item={true}
                lg={"12"}
                md={"12"}
                sm={"12"}
                xl={"12"}
                xs={"12"}
              >
                <Paper
                  key={"0"}
                  id={"pCtsN"}
                  elevation={"{3}"}
                  style={qdmstyles.pCtsN}
                >
                  <Grid
                    key={"0"}
                    id={"p9FEL"}
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
                      id={"Y6MRQ"}
                      container={true}
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      lg={"12"}
                      item={true}
                      md={"12"}
                      sm={"12"}
                      xl={"12"}
                      xs={"12"}
                      style={qdmstyles.YMRQ}
                    >
                      <Grid
                        key={"0"}
                        id={"Z8H2H"}
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
                          id={"6qn9l"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"AVAILABLE STRENGTH"}
                          style={qdmstyles.qnl}
                        ></Typography>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"5WDf9"}
                        container={""}
                        direction={"row"}
                        justifyContent={"flex-end"}
                        alignItems={"center"}
                        lg={"2"}
                        md={"2"}
                        sm={"2"}
                        xl={"2"}
                        xs={"2"}
                        style={qdmstyles.WDf}
                      >
                        <Avatar
                          key={"0"}
                          id={"csnok"}
                          alt={"Avatar"}
                          variant={"rounded"}
                          style={qdmstyles.csnok}
                        ></Avatar>
                      </Grid>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"PLePk"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"12"}
                      item={true}
                      md={"12"}
                      sm={"12"}
                      xl={"12"}
                      xs={"12"}
                      style={qdmstyles.PLePk}
                    >
                      <Divider
                        key={"0"}
                        id={"u6B8U"}
                        variant={"fullWidth"}
                        flexItem={""}
                      ></Divider>
                    </Grid>
                    <Grid
                      key={"2"}
                      id={"T7xTu"}
                      container={true}
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      lg={"12"}
                      item={true}
                      md={"12"}
                      sm={"12"}
                      xl={"12"}
                      xs={"12"}
                      style={qdmstyles.TxTu}
                    >
                      <Grid
                        key={"0"}
                        id={"oEUGh"}
                        container={true}
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        lg={"12"}
                        item={true}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                      >
                        <Grid
                          key={"0"}
                          id={"pYP7X"}
                          container={true}
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                          lg={"12"}
                          item={true}
                        >
                          <Grid
                            key={"0"}
                            id={"S5mqN"}
                            container={true}
                            direction={"row"}
                            justifyContent={"flex-start"}
                            alignItems={"center"}
                            lg={"5"}
                            md={"5"}
                            sm={"5"}
                            xl={"5"}
                            xs={"5"}
                          >
                            <Typography
                              key={"0"}
                              id={"U5nAb"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Strength Value"}
                              style={qdmstyles.UnAb}
                            ></Typography>
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"w8Av4"}
                            container={true}
                            direction={"row"}
                            justifyContent={"flex-start"}
                            alignItems={"center"}
                            lg={"5"}
                            xl={"5"}
                            md={"5"}
                            sm={"5"}
                            xs={"5"}
                          >
                            <Typography
                              key={"0"}
                              id={"GFYVy"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Strength Volume"}
                              style={qdmstyles.GFYVy}
                            ></Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          key={"1"}
                          id={"4eEz8"}
                          container={true}
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                          lg={"12"}
                          md={"12"}
                          sm={"12"}
                          xl={"12"}
                          xs={"12"}
                          item={true}
                          style={qdmstyles.eEz}
                        >
                          <Grid
                            key={"0"}
                            id={"0yFDe"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            lg={"5"}
                            xl={"5"}
                            md={"5"}
                            sm={"5"}
                            xs={"5"}
                          >
                            <ComponentRender
                              key={"0"}
                              id={"AL8Li"}
                              component={
                                <ALL.Capsule
                                  propsState={this.state}
                                  setFun={(value) => {
                                    this.changeState("Capsule", value);
                                  }}
                                  stateName={"Capsule"}
                                  statevalue={this.state?.Capsule}
                                />
                              }
                            ></ComponentRender>
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"XLXZi"}
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
                            style={qdmstyles.YKtx}
                          >
                            <Typography
                              key={"0"}
                              id={"JMvWO"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={" /"}
                              style={qdmstyles.YBla}
                            ></Typography>
                          </Grid>
                          <Grid
                            key={"2"}
                            id={"xTaHq"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            lg={"5"}
                            item={true}
                            md={"5"}
                            sm={"5"}
                            xl={"5"}
                            xs={"5"}
                          >
                            <ComponentRender
                              key={"0"}
                              id={"Djrof"}
                              component={
                                <ALL.Capsule
                                  propsState={this.state}
                                  setFun={(value) => {
                                    this.changeState("Capsule", value);
                                  }}
                                  stateName={"Capsule"}
                                  statevalue={this.state?.Capsule}
                                />
                              }
                            ></ComponentRender>
                          </Grid>
                        </Grid>
                      </Grid>
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
)(withRouter(translate()(Available)));
