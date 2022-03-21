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
  Divider,
  Typography,
  Paper,
  Button,
  TextField,
} from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";
import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

function Orderdefault(props) {
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
            id={"DIAYz"}
            container={true}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            item={true}
            lg={"12"}
            md={"12"}
            sm={"12"}
            xl={"12"}
            xs={"12"}
          >
            <Grid
              key={"0"}
              id={"n1RM4"}
              container={""}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              lg={"12"}
            >
              <Divider
                key={"0"}
                id={"yohAt"}
                variant={"fullWidth"}
                flexItem={""}
                orientation={"horizontal"}
                light={true}
              ></Divider>
            </Grid>
            <Grid
              key={"1"}
              id={"CZVZN"}
              container={true}
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              lg={"12"}
              item={true}
              md={"12"}
              sm={"12"}
              spacing={1}
              xl={"12"}
              xs={"12"}
              style={qdmstyles.CZVZN}
            >
              <Grid
                key={"0"}
                id={"2MXs9"}
                container={true}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                item={true}
                lg={"3"}
                md={"3"}
                sm={"3"}
                xl={"3"}
                xs={"3"}
                style={qdmstyles.MXs}
              >
                <Grid
                  key={"0"}
                  id={"d2nWC"}
                  container={""}
                  direction={"column"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  item={true}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                  style={qdmstyles.yVpZ}
                >
                  <Typography
                    key={"0"}
                    id={"routesAllowedHeading_typogrpahy"}
                    align={"inherit"}
                    color={"initial"}
                    display={"initial"}
                    variant={"body1"}
                    children={"Routes Allowed"}
                    aliasName={"routesAllowedHeading"}
                    style={qdmstyles.Kjef}
                  ></Typography>
                </Grid>
                <Grid
                  key={"1"}
                  id={"d2nWC"}
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
                    id={"m2BR5"}
                    style={qdmstyles?.mBR}
                    value={state?.orderdefault_m2br5 ?? null}
                    onLoad={() =>
                      setState({
                        orderdefault_m2br5: state?.orderdefault_m2br5 ?? null,
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
                id={"2MXs9"}
                container={true}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                item={true}
                lg={"3"}
                sm={"3"}
                md={"3"}
                xl={"3"}
                xs={"3"}
              >
                <Grid
                  key={"0"}
                  id={"d2nWC"}
                  container={""}
                  direction={"column"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  item={true}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                  style={qdmstyles.uLpUf}
                >
                  <Typography
                    key={"0"}
                    id={"defaultRouteHeading_Typography"}
                    align={"inherit"}
                    color={"initial"}
                    display={"initial"}
                    variant={"body1"}
                    children={"Default Route"}
                    aliasName={"defaultRouteHeading"}
                    style={qdmstyles.fIBP}
                  ></Typography>
                </Grid>
                <Grid
                  key={"1"}
                  id={"d2nWC"}
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
                    id={"HlzLi"}
                    style={qdmstyles?.HlzLi}
                    value={state?.orderdefault_hlzli ?? null}
                    onLoad={() =>
                      setState({
                        orderdefault_hlzli: state?.orderdefault_hlzli ?? null,
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
            </Grid>
            <Grid
              key={"2"}
              id={"n1RM4"}
              container={""}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              lg={"12"}
            >
              <Divider
                key={"0"}
                id={"yohAt"}
                variant={"fullWidth"}
                flexItem={""}
                orientation={"horizontal"}
                light={true}
              ></Divider>
            </Grid>
            <Grid
              key={"3"}
              id={"b7AAp"}
              container={true}
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
              <Grid
                key={"0"}
                id={"pULoO"}
                container={true}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                lg={"auto"}
                item={true}
                alignContent={"stretch"}
                md={"auto"}
                sm={"auto"}
                xl={"auto"}
                xs={"auto"}
                style={qdmstyles.pULoO}
              >
                <Typography
                  key={"0"}
                  id={"addNewFrequencyHeading_typography"}
                  align={"inherit"}
                  color={"primary"}
                  display={"initial"}
                  variant={"body1"}
                  children={"ADD NEW FREQUENCY DEFAULTS"}
                  aliasName={"addNewFrequencyHeading"}
                  style={qdmstyles.Gthho}
                ></Typography>
              </Grid>
              <Grid
                key={"1"}
                id={"0NqD2"}
                container={true}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                item={true}
                lg={"12"}
                style={qdmstyles.NqD}
              >
                <Paper
                  key={"0"}
                  id={"A4OWh"}
                  elevation={""}
                  variant={"elevation"}
                  style={qdmstyles.AOWh}
                >
                  <Grid
                    key={"0"}
                    id={"0wzSg"}
                    container={true}
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    style={qdmstyles.wzSg}
                  >
                    <Grid
                      key={"0"}
                      id={"AySG3"}
                      container={true}
                      direction={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      item={true}
                      style={qdmstyles.AySG}
                    >
                      <Typography
                        key={"0"}
                        id={
                          "definecriteriabypateintandPharamacyHeading_Typography"
                        }
                        align={"inherit"}
                        color={"primary"}
                        display={"initial"}
                        variant={"body1"}
                        children={"DEFINE CRITERIA BY PATIENT AND PHARMACY"}
                        aliasName={"definecriteriabypateintandPharamacyHeading"}
                        style={qdmstyles.mYMbI}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"h6VuZ"}
                      container={true}
                      direction={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      lg={"12"}
                      item={""}
                      md={"12"}
                      sm={"12"}
                      xl={"12"}
                      xs={"12"}
                      style={qdmstyles.hVuZ}
                    >
                      <Grid
                        key={"0"}
                        id={"wDQNk"}
                        container={""}
                        direction={"row"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        item={true}
                        lg={"auto"}
                        style={qdmstyles.wDQNk}
                      >
                        <Button
                          key={"0"}
                          id={"addNewRuleSetButton_button"}
                          variant={"text"}
                          color={"primary"}
                          children={"Add New Rule Set"}
                          aliasName={"addNewRuleSetButton"}
                          style={qdmstyles.RximJ}
                        ></Button>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"CU1k8"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Typography
                          key={"0"}
                          id={"OrHeading_Typography"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"(or)"}
                          aliasName={"OrHeading"}
                        ></Typography>
                      </Grid>
                      <Grid
                        key={"2"}
                        id={"DWbgk"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        item={true}
                        lg={"auto"}
                        style={qdmstyles.DWbgk}
                      >
                        <Button
                          key={"0"}
                          id={"addExistingRuleSetButton_Button"}
                          variant={"text"}
                          color={"primary"}
                          children={"Add Existing Rule Set"}
                          aliasName={"addExistingRuleSetButton"}
                          style={qdmstyles.GLPN}
                        ></Button>
                      </Grid>
                    </Grid>
                    <Grid
                      key={"2"}
                      id={"6nXk1"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"12"}
                      style={qdmstyles.nXk}
                    >
                      <Divider
                        key={"0"}
                        id={"aL6n6"}
                        variant={"fullWidth"}
                        orientation={"horizontal"}
                        light={""}
                        flexItem={""}
                        absolute={""}
                      ></Divider>
                    </Grid>
                    <Grid
                      key={"3"}
                      id={"C2Q2C"}
                      container={true}
                      direction={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      lg={"12"}
                      md={"12"}
                      sm={"12"}
                      xl={"12"}
                      xs={"12"}
                      style={qdmstyles.MSle}
                    >
                      <Grid
                        key={"0"}
                        id={"A0aTF"}
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
                          id={"K8jKe"}
                          container={true}
                          direction={"row"}
                          justifyContent={"flex-start"}
                          alignItems={"flex-start"}
                          lg={"10"}
                          spacing={"2"}
                          md={"10"}
                          sm={"10"}
                          xl={"10"}
                          xs={"10"}
                        >
                          <Grid
                            key={"0"}
                            id={"MwW3q"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            lg={"4"}
                            item={true}
                            md={"6"}
                            sm={"6"}
                            xl={"4"}
                            xs={"6"}
                            style={qdmstyles.OYA}
                          >
                            <Typography
                              key={"0"}
                              id={"TI1yl"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Frequency"}
                              style={qdmstyles.gVmts}
                            ></Typography>
                            <Autocomplete
                              id={"NBPty"}
                              style={qdmstyles?.NBPty}
                              value={state?.orderdefault_nbpty ?? null}
                              onLoad={() =>
                                setState({
                                  orderdefault_nbpty:
                                    state?.orderdefault_nbpty ?? null,
                                })
                              }
                              getOptionLabel={(option) => option?.["label"]}
                              options={[] ?? []}
                              renderInput={(params) => (
                                <ALLMCORE.TextField
                                  {...params}
                                  label={"label"}
                                  variant="outlined"
                                />
                              )}
                            />
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"XcWnj"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            lg={"2"}
                            item={true}
                            md={"3"}
                            sm={"3"}
                            xl={"2"}
                            xs={"3"}
                          >
                            <Typography
                              key={"0"}
                              id={"b6j0B"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Duration Code & Uom"}
                              style={qdmstyles.Gog}
                            ></Typography>
                            <Grid
                              key={"1"}
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
                              style={qdmstyles.efS}
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
                                style={qdmstyles.WPBK}
                              >
                                <TextField
                                  key={"0"}
                                  id={"KOrzv"}
                                  label={""}
                                  placeholder={""}
                                  type={"text"}
                                  variant={"outlined"}
                                  fullWidth={true}
                                  margin={"dense"}
                                ></TextField>
                              </Grid>
                              <Divider
                                key={"1"}
                                id={"i68WA"}
                                variant={"fullWidth"}
                                flexItem={true}
                                orientation={"vertical"}
                                style={qdmstyles.NBFOo}
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
                                <Autocomplete
                                  id={"G49J8"}
                                  style={qdmstyles?.GJ}
                                  value={state?.orderdefault_g49j8 ?? null}
                                  onLoad={() =>
                                    setState({
                                      orderdefault_g49j8:
                                        state?.orderdefault_g49j8 ?? null,
                                    })
                                  }
                                  getOptionLabel={(option) => option?.["label"]}
                                  options={[] ?? []}
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
                          </Grid>
                          <Grid
                            key={"2"}
                            id={"XcWnj"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            lg={"2"}
                            item={true}
                            md={"3"}
                            sm={"3"}
                            xl={"2"}
                            xs={"3"}
                          >
                            <Typography
                              key={"0"}
                              id={"b6j0B"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Dose Value & Uom"}
                              style={qdmstyles.JAlLV}
                            ></Typography>
                            <Grid
                              key={"1"}
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
                              style={qdmstyles.ptTGO}
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
                                style={qdmstyles.EHUO}
                              >
                                <TextField
                                  key={"0"}
                                  id={"KOrzv"}
                                  label={""}
                                  placeholder={""}
                                  type={"text"}
                                  variant={"outlined"}
                                  fullWidth={true}
                                  margin={"dense"}
                                ></TextField>
                              </Grid>
                              <Divider
                                key={"1"}
                                id={"i68WA"}
                                variant={"fullWidth"}
                                flexItem={true}
                                orientation={"vertical"}
                                style={qdmstyles.ywq}
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
                                <Autocomplete
                                  id={"t2Gzu"}
                                  style={qdmstyles?.tGzu}
                                  value={state?.orderdefault_t2gzu ?? null}
                                  onLoad={() =>
                                    setState({
                                      orderdefault_t2gzu:
                                        state?.orderdefault_t2gzu ?? null,
                                    })
                                  }
                                  getOptionLabel={(option) => option?.["label"]}
                                  options={[] ?? []}
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
                          </Grid>
                          <Grid
                            key={"3"}
                            id={"XcWnj"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            lg={"2"}
                            item={true}
                            md={"6"}
                            sm={"6"}
                            xl={"2"}
                            xs={"6"}
                          >
                            <Typography
                              key={"0"}
                              id={"b6j0B"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Infusion Rate & Uom"}
                              style={qdmstyles.Ryxuv}
                            ></Typography>
                            <Grid
                              key={"1"}
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
                              style={qdmstyles.kZriA}
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
                                style={qdmstyles.elYp}
                              >
                                <TextField
                                  key={"0"}
                                  id={"KOrzv"}
                                  label={""}
                                  placeholder={""}
                                  type={"text"}
                                  variant={"outlined"}
                                  fullWidth={true}
                                  margin={"dense"}
                                ></TextField>
                              </Grid>
                              <Divider
                                key={"1"}
                                id={"i68WA"}
                                variant={"fullWidth"}
                                flexItem={true}
                                orientation={"vertical"}
                                style={qdmstyles.dZWRY}
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
                                <Autocomplete
                                  id={"2JQEd"}
                                  style={qdmstyles?.JQEd}
                                  value={state?.orderdefault_2jqed ?? null}
                                  onLoad={() =>
                                    setState({
                                      orderdefault_2jqed:
                                        state?.orderdefault_2jqed ?? null,
                                    })
                                  }
                                  getOptionLabel={(option) => option?.["label"]}
                                  options={[] ?? []}
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
                          </Grid>
                          <Grid
                            key={"4"}
                            id={"XcWnj"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            lg={"2"}
                            item={true}
                            md={"6"}
                            sm={"6"}
                            xl={"2"}
                            xs={"6"}
                          >
                            <Typography
                              key={"0"}
                              id={"b6j0B"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Infuse Over Duration & Uom"}
                              style={qdmstyles.kzr}
                            ></Typography>
                            <Grid
                              key={"1"}
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
                              style={qdmstyles.YPwCt}
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
                                style={qdmstyles.abN}
                              >
                                <TextField
                                  key={"0"}
                                  id={"KOrzv"}
                                  label={""}
                                  placeholder={""}
                                  type={"text"}
                                  variant={"outlined"}
                                  fullWidth={true}
                                  margin={"dense"}
                                ></TextField>
                              </Grid>
                              <Divider
                                key={"1"}
                                id={"i68WA"}
                                variant={"fullWidth"}
                                flexItem={true}
                                orientation={"vertical"}
                                style={qdmstyles.mxgZ}
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
                                <Autocomplete
                                  id={"Qfi9Q"}
                                  style={qdmstyles?.QfiQ}
                                  value={state?.orderdefault_qfi9q ?? null}
                                  onLoad={() =>
                                    setState({
                                      orderdefault_qfi9q:
                                        state?.orderdefault_qfi9q ?? null,
                                    })
                                  }
                                  getOptionLabel={(option) => option?.["label"]}
                                  options={[] ?? []}
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
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      key={"4"}
                      id={"iRF0G"}
                      container={true}
                      direction={"row"}
                      justifyContent={"flex-end"}
                      alignItems={"center"}
                      item={true}
                      style={qdmstyles.iRFG}
                    >
                      <Grid
                        key={"0"}
                        id={"Bf7YT"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"4"}
                        item={true}
                        style={qdmstyles.BfYT}
                      >
                        <Button
                          key={"0"}
                          id={"MoXx0"}
                          variant={"text"}
                          color={"primary"}
                          children={"Save & Add another"}
                          style={qdmstyles.MoXx}
                        ></Button>
                        <Button
                          key={"1"}
                          id={"MoXx0"}
                          variant={"contained"}
                          color={"primary"}
                          children={" Add"}
                          size={"small"}
                          style={qdmstyles.HKqUA}
                        ></Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Orderdefault));
