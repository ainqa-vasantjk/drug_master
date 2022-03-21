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

import {
  Grid,
  Paper,
  Typography,
  Avatar,
  Divider,
  Box,
  Button,
} from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Instructionwindow extends React.Component {
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
              id={"G1q6Q"}
              container={true}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              lg={"10"}
              md={"10"}
              sm={"10"}
              xl={"10"}
              xs={"10"}
            >
              <Paper
                key={"0"}
                id={"I2if7"}
                elevation={"{3}"}
                style={qdmstyles.arK}
              >
                <Grid
                  key={"0"}
                  id={"sJZsO"}
                  container={true}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                  style={qdmstyles.TQIrv}
                >
                  <Grid
                    key={"0"}
                    id={"6Ygnf"}
                    container={true}
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    lg={"3"}
                    md={"3"}
                    sm={"3"}
                    xl={"3"}
                    xs={"3"}
                  >
                    <Typography
                      key={"0"}
                      id={"addInstructions_Typography"}
                      align={"inherit"}
                      color={"initial"}
                      display={"initial"}
                      variant={"body1"}
                      children={"ADD INSTRUCTIONS"}
                      aliasName={"addInstructionsTypography"}
                      style={qdmstyles.huQWE}
                    ></Typography>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"ohqRw"}
                    container={true}
                    direction={"row"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    lg={1}
                    md={1}
                    sm={1}
                    xl={1}
                    xs={1}
                  >
                    <Avatar
                      key={"0"}
                      id={"close_icon"}
                      alt={"Avatar"}
                      variant={"rounded"}
                      aliasName={"closeicon"}
                      style={qdmstyles.ftJB}
                    ></Avatar>
                  </Grid>
                </Grid>
                <Divider
                  key={"1"}
                  id={"hzN6n"}
                  variant={"fullWidth"}
                  style={qdmstyles.TwDvp}
                ></Divider>
                <Grid
                  key={"2"}
                  id={"IwptL"}
                  container={true}
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid
                    key={"0"}
                    id={"mraSZ"}
                    container={true}
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    item={true}
                    lg={"12"}
                    md={"12"}
                  >
                    <Grid
                      key={"0"}
                      id={"Rrg5g"}
                      container={true}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                      lg={"6"}
                      md={"6"}
                      sm={"6"}
                      xl={"6"}
                      xs={"6"}
                      style={qdmstyles.Rrgg}
                    >
                      <Typography
                        key={"0"}
                        id={"InstructionType_Typography"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Instruction Type"}
                        aliasName={"InstructionTypeTypography"}
                        style={qdmstyles.VNCk}
                      ></Typography>
                      <Autocomplete
                        id={"4VlFF"}
                        style={qdmstyles?.VlFF}
                        value={this.state?.instructionwindow_4vlff ?? null}
                        onLoad={() =>
                          this.setState({
                            instructionwindow_4vlff:
                              this.state?.instructionwindow_4vlff ?? null,
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
                    id={"mraSZ"}
                    container={true}
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    item={true}
                    lg={"12"}
                  >
                    <Grid
                      key={"0"}
                      id={"HKwb7"}
                      container={true}
                      direction={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      item={true}
                      lg={"6"}
                      md={"6"}
                      sm={"6"}
                      xl={"6"}
                      xs={"6"}
                    >
                      <Typography
                        key={"0"}
                        id={"instructionDescription_Typography"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Instruction Description"}
                        aliasName={"instructionDescriptionTypography"}
                        style={qdmstyles.JFpJ}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"05l1O"}
                      container={true}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box key={"0"} id={"FSxha"} m={1} component={"div"}></Box>
                    </Grid>
                  </Grid>
                  <Grid
                    key={"2"}
                    id={"mraSZ"}
                    container={true}
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    item={true}
                    lg={"12"}
                  >
                    <Grid
                      key={"0"}
                      id={"HKwb7"}
                      container={true}
                      direction={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      item={true}
                      lg={"6"}
                      md={"6"}
                      sm={"6"}
                      xl={"6"}
                      xs={"6"}
                    >
                      <Typography
                        key={"0"}
                        id={"instruction_local_language_header"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Instruction Local Language"}
                        aliasName={"instructionlocallanguageheader"}
                        style={qdmstyles.BGX}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"U5DoF"}
                      container={true}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box key={"0"} id={"cMq76"} m={1} component={"div"}></Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  key={"3"}
                  id={"66hWy"}
                  container={true}
                  direction={"row"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                  spacing={1}
                  style={qdmstyles.yWg}
                >
                  <Grid
                    key={"0"}
                    id={"Et6L0"}
                    container={""}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    item={true}
                    spacing={"6"}
                    lg={"6"}
                    md={"3"}
                    sm={"6"}
                    xl={"6"}
                    xs={"6"}
                    style={qdmstyles.hYHKP}
                  >
                    <Button
                      key={"0"}
                      id={"save&Addanother_Button"}
                      variant={"text"}
                      color={"primary"}
                      children={"Save & Add another"}
                      size={"small"}
                      aliasName={"save&AddanotherButton"}
                      style={qdmstyles.bUu}
                    ></Button>
                    <Button
                      key={"1"}
                      id={"addButtonOfAddInstructionDailog_button"}
                      variant={"contained"}
                      color={"primary"}
                      children={" Add"}
                      size={"small"}
                      aliasName={"addButtonOfAddInstructionDailog"}
                      style={qdmstyles.ad}
                    ></Button>
                  </Grid>
                </Grid>
              </Paper>
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
)(withRouter(translate()(Instructionwindow)));
