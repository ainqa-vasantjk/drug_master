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

import { Grid, Paper, Avatar, Divider, Button } from "@material-ui/core";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Uploadcard extends React.Component {
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
              id={"XLmtk"}
              container={true}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              lg={"3"}
            >
              <Paper
                key={"0"}
                id={"rTKoj"}
                elevation={1}
                variant={"elevation"}
                style={qdmstyles.rTKoj}
              >
                <Grid
                  key={"0"}
                  id={"XLmtk"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={"12"}
                >
                  <Grid
                    key={"0"}
                    id={"5VWEj"}
                    container={""}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    item={true}
                    style={qdmstyles.VWEj}
                  >
                    <Avatar
                      key={"0"}
                      id={"upload_image_view"}
                      alt={"Avatar"}
                      variant={"rounded"}
                      aliasName={"uploadimageview"}
                      style={qdmstyles.LfiQ}
                    ></Avatar>
                  </Grid>
                </Grid>
                <Grid
                  key={"1"}
                  id={"tV9WH"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={qdmstyles.tVWH}
                >
                  <Divider
                    key={"0"}
                    id={"AH7fO"}
                    variant={"fullWidth"}
                    flexItem={""}
                    orientation={"horizontal"}
                    style={qdmstyles.AHfO}
                  ></Divider>
                </Grid>
                <Grid
                  key={"2"}
                  id={"upload_image_button"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  item={true}
                  aliasName={"uploadimagebutton"}
                  style={qdmstyles.DTJw}
                >
                  <Button
                    key={"0"}
                    id={"KMzei"}
                    variant={"text"}
                    color={"primary"}
                    children={"Upload Image"}
                    fullWidth={true}
                    style={qdmstyles.oMA}
                  ></Button>
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
)(withRouter(translate()(Uploadcard)));
