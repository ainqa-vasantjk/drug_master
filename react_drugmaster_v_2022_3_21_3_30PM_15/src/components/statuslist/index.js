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
import {
  Grid,
  Typography,
  Checkbox,
  TextField,
  Avatar,
} from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";
import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

function Statuslist(props) {
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
            id={"yYTdx"}
            container={true}
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            lg={"12"}
            md={"12"}
            sm={"12"}
            xl={"12"}
            xs={"12"}
            spacing={"1"}
            style={qdmstyles.NVcG}
          >
            <Grid
              key={"0"}
              id={"yYTdx"}
              container={""}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={1}
              md={1}
              sm={1}
              xl={1}
              xs={1}
              item={true}
            >
              <Typography
                key={"0"}
                id={"FG5WL"}
                align={"inherit"}
                color={"initial"}
                display={"initial"}
                variant={"body1"}
                children={"Facility"}
                style={qdmstyles.KBgPH}
              ></Typography>
            </Grid>
            <Grid
              key={"1"}
              id={"yYTdx"}
              container={""}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={"2"}
              md={"2"}
              sm={"2"}
              xl={"2"}
              xs={"2"}
              item={true}
            >
              <Typography
                key={"0"}
                id={"hgfNC"}
                align={"inherit"}
                color={"initial"}
                display={"initial"}
                variant={"body1"}
                children={"AINQA Cardiac Hospital"}
                style={qdmstyles.fZKC}
              ></Typography>
            </Grid>
            <Grid
              key={"2"}
              id={"yYTdx"}
              container={""}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={1}
              md={1}
              sm={1}
              xl={1}
              xs={1}
              item={true}
            >
              <Autocomplete
                id={"s66D7"}
                style={qdmstyles?.sD}
                value={state?.statuslist_s66d7 ?? null}
                onLoad={() =>
                  setState({
                    statuslist_s66d7: state?.statuslist_s66d7 ?? null,
                  })
                }
                getOptionLabel={(option) => option?.["label"]}
                options={[] ?? []}
                size={"small"}
                renderInput={(params) => (
                  <ALLMCORE.TextField
                    {...params}
                    label={"Active"}
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid
              key={"3"}
              id={"yYTdx"}
              container={""}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={1}
              md={1}
              sm={1}
              xl={1}
              xs={1}
              item={true}
            >
              <Checkbox
                key={"0"}
                id={"KvhLv"}
                checked={true}
                color={"default"}
                size={"small"}
                style={qdmstyles.uEXR}
              ></Checkbox>
            </Grid>
            <Grid
              key={"4"}
              id={"yYTdx"}
              container={""}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={"2"}
              md={"2"}
              sm={"2"}
              xl={1}
              xs={1}
              item={true}
            >
              <TextField
                key={"0"}
                id={"ysf9u"}
                label={""}
                placeholder={"select"}
                type={"text"}
                variant={"outlined"}
                size={"small"}
                fullWidth={""}
                style={qdmstyles.PJDcv}
              ></TextField>
            </Grid>
            <Grid
              key={"5"}
              id={"yYTdx"}
              container={""}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={"2"}
              md={"2"}
              sm={"2"}
              xl={"2"}
              xs={"2"}
              item={true}
            >
              <TextField
                key={"0"}
                id={"EpEab"}
                label={""}
                placeholder={"select"}
                type={"text"}
                variant={"outlined"}
                size={"small"}
                fullWidth={""}
                style={qdmstyles.zeDZr}
              ></TextField>
            </Grid>
            <Grid
              key={"6"}
              id={"yYTdx"}
              container={""}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={"3"}
              md={"3"}
              sm={"3"}
              xl={"3"}
              xs={"3"}
              item={true}
              style={qdmstyles.nZQc}
            >
              <TextField
                key={"0"}
                id={"SX3Jx"}
                placeholder={"Type here"}
                type={"text"}
                variant={"outlined"}
                size={"small"}
                fullWidth={""}
                style={qdmstyles.QVI}
              ></TextField>
              <Avatar
                key={"1"}
                id={"yTKF3"}
                alt={"Avatar"}
                variant={"rounded"}
                src={
                  "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/324750312"
                }
                style={qdmstyles.iLh}
              ></Avatar>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Statuslist));
