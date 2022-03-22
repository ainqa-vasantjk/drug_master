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

import { Grid, Typography, TextField, Divider } from "@material-ui/core";
import { ComponentRender } from "custom-material-ui-component";

import { Autocomplete } from "@material-ui/lab";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Status extends React.Component {
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
              id={"RPVil"}
              container={true}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              lg={"12"}
              md={"12"}
              sm={"12"}
              style={qdmstyles.RPVil}
            >
              <Grid
                key={"0"}
                id={"status_header"}
                container={true}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                lg={"4"}
                md={"4"}
                sm={"4"}
                aliasName={"statusheader"}
              >
                <Typography
                  key={"0"}
                  id={"KnNVp"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"STATUS"}
                  style={qdmstyles.KnNVp}
                ></Typography>
              </Grid>
              <Grid
                key={"1"}
                id={"CYeHC"}
                container={true}
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
                lg={"8"}
                md={"8"}
                sm={"8"}
                spacing={""}
                item={true}
              >
                <Grid
                  key={"0"}
                  id={"ajgKb"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={"3"}
                  md={"3"}
                  sm={"3"}
                  style={qdmstyles.ajgKb}
                >
                  <Autocomplete
                    id={"uYkPJ"}
                    style={qdmstyles?.uYkPJ}
                    value={this.state?.status_uykpj ?? null}
                    onLoad={() =>
                      this.setState({
                        status_uykpj: this.state?.status_uykpj ?? null,
                      })
                    }
                    getOptionLabel={(option) => option?.["label"]}
                    options={[] ?? []}
                    size={"small"}
                    renderInput={(params) => (
                      <ALLMCORE.TextField
                        {...params}
                       placeholder="Facility"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid
                  key={"1"}
                  id={"jLeH1"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={"6"}
                  md={"6"}
                  sm={"6"}
                >
                  <TextField
                    key={"0"}
                    id={"9RTTk"}
                    label={""}
                    placeholder={"Search & add Facility"}
                    type={""}
                    variant={"outlined"}
                    size={"small"}
                    fullWidth={true}
                    color={"primary"}
                    style={qdmstyles.RTTk}
                  ></TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              key={"1"}
              id={"uVXKs"}
              container={true}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={"12"}
              md={"12"}
              sm={"12"}
              spacing={"2"}
              style={qdmstyles.uVXKs}
            >
              <Grid
                key={"0"}
                id={"CrWu1"}
                container={true}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                lg={1}
                md={1}
                sm={1}
                item={true}
              >
                <Typography
                  key={"0"}
                  id={"r7FV0"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"Entity Type"}
                  style={qdmstyles.rFV}
                ></Typography>
              </Grid>
              <Grid
                key={"1"}
                id={"7Hr8S"}
                container={""}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                lg={"2"}
                md={"2"}
                sm={"2"}
                item={true}
              >
                <Typography
                  key={"0"}
                  id={"qp7gH"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"Entity Name"}
                  style={qdmstyles.qpgH}
                ></Typography>
              </Grid>
              <Grid
                key={"2"}
                id={"2DPvI"}
                container={""}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                lg={1}
                md={1}
                sm={1}
                item={true}
              >
                <Typography
                  key={"0"}
                  id={"nfRjR"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"status"}
                  style={qdmstyles.nfRjR}
                ></Typography>
              </Grid>
              <Grid
                key={"3"}
                id={"ITURC"}
                container={""}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                lg={1}
                md={1}
                sm={1}
              >
                <Typography
                  key={"0"}
                  id={"3SVbe"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"Formulary"}
                  style={qdmstyles.SVbe}
                ></Typography>
              </Grid>
              <Grid
                key={"4"}
                id={"CajG1"}
                container={""}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                lg={"2"}
                md={"2"}
                sm={"2"}
                item={true}
              >
                <Typography
                  key={"0"}
                  id={"844XH"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"Effective From"}
                  style={qdmstyles.XH}
                ></Typography>
              </Grid>
              <Grid
                key={"5"}
                id={"CajG1"}
                container={""}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                lg={"2"}
                md={"2"}
                sm={"2"}
                item={true}
              >
                <Typography
                  key={"0"}
                  id={"mO3PH"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"Effective To"}
                  style={qdmstyles.mOPH}
                ></Typography>
              </Grid>
              <Grid
                key={"6"}
                id={"CajG1"}
                container={""}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                lg={"3"}
                md={"2"}
                sm={"2"}
                item={true}
              >
                <Typography
                  key={"0"}
                  id={"uc4F1"}
                  align={"inherit"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"Reason"}
                  style={qdmstyles.ucF}
                ></Typography>
              </Grid>
            </Grid>
            <Grid
              key={"2"}
              id={"dkeHT"}
              container={""}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Divider key={"0"} id={"30G6A"} variant={"fullWidth"}></Divider>
            </Grid>
            <Grid
              key={"3"}
              id={"dqYyZ"}
              container={""}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <ComponentRender
                key={"0"}
                id={"TRmUl"}
                component={
                  <ALL.Statuslist
                    propsState={this.state}
                    setFun={(value) => {
                      this.changeState("Statuslist", value);
                    }}
                    stateName={"Statuslist"}
                    statevalue={this.state?.Statuslist}
                  />
                }
              ></ComponentRender>
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
)(withRouter(translate()(Status)));
