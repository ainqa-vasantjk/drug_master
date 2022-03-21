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
import { Grid, Paper, Typography, Divider } from "@material-ui/core";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

function Capsule(props) {
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
            id={"3dJV7"}
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
              id={"etc9W"}
              elevation={"{3}"}
              style={qdmstyles.etcW}
            >
              <Grid
                key={"0"}
                id={"mTFOI"}
                container={true}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                lg={"12"}
                md={"12"}
                sm={"12"}
                xl={"12"}
                xs={"12"}
                style={qdmstyles.mTFOI}
              >
                <Grid
                  key={"0"}
                  id={"56Ktj"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={"5"}
                  md={"5"}
                  sm={"5"}
                  xl={"5"}
                  xs={"5"}
                  item={true}
                  style={qdmstyles.Ktj}
                >
                  <Typography
                    key={"0"}
                    id={"available_strength_left_side_value"}
                    align={"inherit"}
                    color={"initial"}
                    display={"initial"}
                    variant={"body1"}
                    children={"25"}
                    aliasName={"availablestrengthleftsidevalue"}
                    style={qdmstyles.wWamE}
                  ></Typography>
                </Grid>
                <Divider
                  key={"1"}
                  id={"i68WA"}
                  variant={"fullWidth"}
                  flexItem={true}
                  orientation={"vertical"}
                ></Divider>
                <Grid
                  key={"2"}
                  id={"VtLuv"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={"5"}
                  md={"5"}
                  sm={"5"}
                  xl={"5"}
                  xs={"5"}
                  item={true}
                >
                  <Typography
                    key={"0"}
                    id={"available_strength_right_side_value"}
                    align={"inherit"}
                    color={"initial"}
                    display={"initial"}
                    variant={"body1"}
                    children={"mg"}
                    aliasName={"availablestrengthrightsidevalue"}
                    style={qdmstyles.PMrs}
                  ></Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Capsule));
