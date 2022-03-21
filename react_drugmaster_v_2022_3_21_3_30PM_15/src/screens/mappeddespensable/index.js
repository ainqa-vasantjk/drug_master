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

import { Grid, Typography, Button, TextField, Avatar } from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Mappeddespensable extends React.Component {
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
              id={"hDIJk"}
              container={true}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid
                key={"0"}
                id={"TgstR"}
                container={true}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                lg={"auto"}
                style={qdmstyles.MgC}
              >
                <Grid
                  key={"0"}
                  id={"TgstR"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  item={true}
                  lg={"6"}
                >
                  <Typography
                    key={"0"}
                    id={"VyJYV"}
                    align={"left"}
                    color={"initial"}
                    display={"initial"}
                    variant={"body1"}
                    children={"MAPPED DISPENSABLES"}
                    style={qdmstyles.MKcY}
                  ></Typography>
                </Grid>
                <Grid
                  key={"1"}
                  id={"TgstR"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  item={true}
                >
                  <Button
                    key={"0"}
                    id={"AZcgH"}
                    variant={"text"}
                    color={"primary"}
                    children={"+Add New"}
                    style={qdmstyles.Cxfd}
                  ></Button>
                </Grid>
              </Grid>
              <Grid
                key={"1"}
                id={"OeOjQ"}
                container={true}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                lg={"12"}
                md={"12"}
                sm={"12"}
                xl={"12"}
                xs={"12"}
              >
                <Grid
                  key={"0"}
                  id={"aq1c2"}
                  container={""}
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  item={true}
                  spacing={""}
                  lg={"4"}
                  alignContent={"center"}
                  md={"4"}
                  sm={"4"}
                  xl={"4"}
                  xs={"4"}
                  style={qdmstyles.PcFx}
                >
                  <Grid
                    key={"0"}
                    id={"dIQ02"}
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
                    style={qdmstyles.tpE}
                  >
                    <Typography
                      key={"0"}
                      id={"cTAwT"}
                      align={"inherit"}
                      color={"initial"}
                      display={"initial"}
                      variant={"body1"}
                      children={"Item Code & Description"}
                      style={qdmstyles.bJoLv}
                    ></Typography>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"dIQ02"}
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
                    <Autocomplete
                      id={"1w3RN"}
                      style={qdmstyles?.wRN}
                      value={this.state?.mappeddespensable_1w3rn ?? null}
                      onLoad={() =>
                        this.setState({
                          mappeddespensable_1w3rn:
                            this.state?.mappeddespensable_1w3rn ?? null,
                        })
                      }
                      getOptionLabel={(option) => option?.["label"]}
                      options={[] ?? []}
                      size={"small"}
                      renderInput={(params) => (
                        <ALLMCORE.TextField
                          {...params}
                          label={"label"}
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid
                  key={"1"}
                  id={"vVPnE"}
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
                    id={"5zR5Z"}
                    container={""}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    lg={"12"}
                    md={"12"}
                    sm={"12"}
                    xl={"12"}
                    xs={"12"}
                    style={qdmstyles.zRZ}
                  >
                    <Typography
                      key={"0"}
                      id={"cTAwT"}
                      align={"inherit"}
                      color={"initial"}
                      display={"initial"}
                      variant={"body1"}
                      children={"Preferred Sequence"}
                      style={qdmstyles.lzG}
                    ></Typography>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"aq1c2"}
                    container={true}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    item={true}
                    spacing={""}
                    lg={"12"}
                    alignContent={"center"}
                    md={"12"}
                    sm={"12"}
                    xl={"12"}
                    xs={"12"}
                    style={qdmstyles.OXsO}
                  >
                    <Grid
                      key={"0"}
                      id={"dIQ02"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                      lg={"10"}
                      md={"10"}
                      sm={"10"}
                      xl={"10"}
                      xs={"10"}
                    >
                      <TextField
                        key={"0"}
                        id={"EzsQf"}
                        label={""}
                        placeholder={""}
                        type={"text"}
                        select={""}
                        size={"small"}
                        fullWidth={true}
                        variant={"outlined"}
                        margin={"none"}
                        style={qdmstyles.TXoW}
                      ></TextField>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"aq1c2"}
                      container={""}
                      direction={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                      spacing={""}
                      lg={"2"}
                      alignContent={"center"}
                      md={"2"}
                      sm={"2"}
                      xl={"2"}
                      xs={"2"}
                      style={qdmstyles.TO}
                    >
                      <Avatar
                        key={"0"}
                        id={"wzPKm"}
                        alt={"Avatar"}
                        variant={"rounded"}
                        src={
                          "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/317182133"
                        }
                        style={qdmstyles.wzPKm}
                      ></Avatar>
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
)(withRouter(translate()(Mappeddespensable)));
