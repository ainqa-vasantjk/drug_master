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
import { Grid, Box, Checkbox, Typography } from "@material-ui/core";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

function Drugotherattributes(props) {
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
            id={"dmbxa"}
            container={true}
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            lg={"12"}
            wrap={"wrap"}
            alignContent={"flex-start"}
            style={qdmstyles.dmbxa}
          >
            <Box
              key={"0"}
              id={"a85gl"}
              m={1}
              component={"div"}
              style={qdmstyles.agl}
            >
              <Checkbox
                key={"0"}
                id={"B7nCd"}
                checked={""}
                color={"default"}
                size={"small"}
                style={qdmstyles.BnCd}
              ></Checkbox>
              <Typography
                key={"1"}
                id={"BU52G"}
                align={"inherit"}
                color={"initial"}
                display={"initial"}
                variant={"body1"}
                children={"Use As Additive"}
                style={qdmstyles.BUG}
              ></Typography>
            </Box>
            <Box
              key={"1"}
              id={"a85gl"}
              m={1}
              component={"div"}
              style={qdmstyles.ihUn}
            >
              <Checkbox
                key={"0"}
                id={"B7nCd"}
                checked={""}
                color={"default"}
                size={"small"}
                style={qdmstyles.FigQA}
              ></Checkbox>
              <Typography
                key={"1"}
                id={"BU52G"}
                align={"inherit"}
                color={"initial"}
                display={"initial"}
                variant={"body1"}
                children={"Use For Compound Preparation"}
                style={qdmstyles.bUWkK}
              ></Typography>
            </Box>
            <Box
              key={"2"}
              id={"a85gl"}
              m={1}
              component={"div"}
              style={qdmstyles.qUEoU}
            >
              <Checkbox
                key={"0"}
                id={"B7nCd"}
                checked={true}
                color={"default"}
                size={"small"}
                style={qdmstyles.hbcSQ}
              ></Checkbox>
              <Typography
                key={"1"}
                id={"BU52G"}
                align={"inherit"}
                color={"initial"}
                display={"initial"}
                variant={"body1"}
                children={"Dispense Via Rx Only"}
                style={qdmstyles.uTrv}
              ></Typography>
            </Box>
            <Box
              key={"3"}
              id={"a85gl"}
              m={1}
              component={"div"}
              style={qdmstyles.qcBS}
            >
              <Checkbox
                key={"0"}
                id={"B7nCd"}
                checked={true}
                color={"default"}
                size={"small"}
                style={qdmstyles.jDvDk}
              ></Checkbox>
              <Typography
                key={"1"}
                id={"BU52G"}
                align={"inherit"}
                color={"initial"}
                display={"initial"}
                variant={"body1"}
                children={"Counselling Required"}
                style={qdmstyles.cRMr}
              ></Typography>
            </Box>
          </Grid>
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Drugotherattributes));
