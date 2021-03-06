import React from "react";
import { actions } from "drugmaster_v_dbinder";
import { connect } from "react-redux";
import { NamespacesConsumer, translate } from "react-i18next";
import { withRouter } from "react-router-dom";
import { languageOptions, Permissions } from "../../utils";
import { LoggerContext } from "../../contexts";
import { CustRowTable } from "custom-material-ui-component";
import IDMPANEL from "idmpanel-pkg";
import Config from "../../config";
import cookie from "react-cookies";
import Order from "./purchase-order-icon.svg";
import * as ALL from "../../components";
import * as ALLMCORE from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Modal } from "qdm-component-library";
import Alertrestriction from "../alertrestriction/index";
import { MuiStepper } from "custom-material-ui-component";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import Despenseandcharge from "../despenseandcharge/index";
import {
  Paper,
  Grid,
  Avatar,
  Divider,
  Button,
  Typography,
  TextField,
  Checkbox,
  Box,
} from "@material-ui/core";
import { ComponentRender, MuiTab } from "custom-material-ui-component";

import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

const Styles = (theme) => ({
  auto: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
    },
  },
  textbor: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
    },
  },
});

class Drugintscreen extends React.Component {
  static contextType = LoggerContext;
  constructor(props, context) {
    super(props, context);
    this.state = {
      permissionData: null,
      showStatusPage: false,
      showAlertPage: false,
      stepperActiveValue: 0,
      isdispensable: false,
      compoundAddnew: [""],
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
    const { classes } = this.props;
    console.log("value", this.state);
    return (
      <NamespacesConsumer>
        {(t, { i18n }) => (
          <React.Fragment>
            {/* <ComponentRender
              key={"0"}
              id={"eZdYL"}
              component={
                <ALL.Steppercomponent
                  propsState={this.state}
                  setFun={(value) => {
                    this.changeState("Steppercomponent", value);
                  }}
                  stateName={"Steppercomponent"}
                  statevalue={this.state?.Steppercomponent}
                />
              }
            ></ComponentRender> */}
            <Grid
              key={"0"}
              id={"U4vjk"}
              container={true}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid
                key={"0"}
                id={"Y5rK3"}
                container={true}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                lg={"12"}
                md={"12"}
                sm={"12"}
                xl={"12"}
                xs={"12"}
                style={qdmstyles.stpp}
              >
                <Grid
                  key={"0"}
                  id={"mAG6q"}
                  container={""}
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  lg={9}
                  md={9}
                  sm={9}
                  xl={9}
                  xs={9}
                  item={true}
                  style={{ display: "flex" }}
                >
                  <Paper
                    key={"0"}
                    id={"D84US"}
                    elevation={"{3}"}
                    style={qdmstyles.fDGwz}
                    onClick={() => this.props.history.push("./drugmastertable")}
                  >
                    <ArrowBackIosOutlinedIcon
                      fontSize="small"
                      style={{ placeSelf: "center" }}
                    />
                  </Paper>

                  <Typography
                    key={"0"}
                    id={"yf8Th"}
                    align={"inherit"}
                    color={"initial"}
                    display={"initial"}
                    variant={"body1"}
                    children={"Add New Drug catalog master"}
                    style={qdmstyles.LP}
                  ></Typography>
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{ margin: "20px 0" }}
                  />
                  <MuiStepper
                    value={this.state.stepperActiveValue}
                    activeStep={"1"}
                    key={"3"}
                    onChange={(e) => this.onchange_8mjav(e)}
                    id={"8MJAV"}
                    stepsHeader={[
                      {
                        header: "Drug master setup",
                        fullWidth: true,
                        body: {},
                      },
                      {
                        header: "Alerts and Restrictions",
                        fullWidth: true,
                        body: {},
                      },
                    ]}
                    bodyRequired={""}
                    stepperActiveTextColor={"#2A60BC"}
                    alternativeLabel={""}
                    isControlleRequired={""}
                    stepperActiveColor={"#2A60BC"}
                    HeaderFontColor={"#2A60BC"}
                    previousLabel={""}
                    aliasName={"targetscreen"}
                    style={qdmstyles.MJAV}
                  ></MuiStepper>
                </Grid>
                <Grid
                  key={"3"}
                  id={"SM3lw"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={"3"}
                  item={true}
                  md={"3"}
                  sm={"3"}
                  xl={"3"}
                  xs={"3"}
                  style={qdmstyles.JGG}
                >
                  <Button
                    key={"0"}
                    id={"add_new_drug_catalog_cancel_button"}
                    variant={"text"}
                    color={"primary"}
                    size={"small"}
                    children={"cancel"}
                    aliasName={"addnewdrugcatalogcancelbutton"}
                    style={qdmstyles.tiSU}
                    onClick={() =>
                      this.setState({
                        showAlertPage: false,
                        stepperActiveValue: 0,
                      })
                    }
                  ></Button>
                  {!this.state.showAlertPage ? (
                    <Button
                      key={"1"}
                      disableElevation={true}
                      id={"add_new_drug_catalog_save_and_process_button"}
                      onClick={() =>
                        this.setState({
                          showAlertPage: true,
                          stepperActiveValue: 1,
                        })
                      }
                      variant={"contained"}
                      color={"primary"}
                      children={"Save and Proceed"}
                      size={"small"}
                      aliasName={"addnewdrugcatalogsaveandprocessbutton"}
                      style={qdmstyles.fBNLn}
                    ></Button>
                  ) : (
                    <>
                      <Button
                        key={"2"}
                        disableElevation={true}
                        id={"add_new_drug_catalog_previous_button"}
                        onClick={() =>
                          this.setState({
                            showAlertPage: false,
                            stepperActiveValue: 0,
                          })
                        }
                        variant={"contained"}
                        color={"primary"}
                        children={"Previous"}
                        size={"small"}
                        aliasName={"addnewdrugcatalogpreviousbutton"}
                        style={{
                          backgroundColor: "#DEE5EC",
                          color: " #2A3C50",
                          font: " normal normal medium 16px/25px Poppins ",
                          margin: "0 5px",
                        }}
                      ></Button>
                      <Button
                        key={"3"}
                        disableElevation={true}
                        id={"add_new_drug_catalog_save_button"}
                        variant={"contained"}
                        color={"primary"}
                        children={"Save"}
                        size={"small"}
                        aliasName={"addnewdrugcatalogsavebutton"}
                        style={{
                          backgroundColor: "#EC6A49",
                          font: "normal normal medium 16px/25px Poppins",
                          margin: "0 5px",
                        }}
                      ></Button>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
            {!this.state.showAlertPage ? (
              <Paper
                key={"1"}
                id={"GuNrF"}
                elevation={"{3}"}
                style={qdmstyles.GuNrF}
              >
                <Grid
                  key={"0"}
                  id={"m1DLn"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"stretch"}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                  spacing={"1"}
                  style={qdmstyles.mDLn}
                >
                  {this.state.isdispensable && (
                    <>
                      <Grid
                        key={"0"}
                        id={"khsxZ"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"stretch"}
                        lg={"2"}
                        md={"2"}
                        sm={"3"}
                        xl={"2"}
                        xs={"3"}
                        item={true}
                      >
                        <Paper
                          key={"0"}
                          id={"rTKoj"}
                          variant={"outlined"}
                          style={qdmstyles.XVrA}
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
                              style={qdmstyles.Letch}
                            >
                              <Avatar
                                key={"0"}
                                id={"upload_image_view"}
                                alt={"Avatar"}
                                variant={"rounded"}
                                aliasName={"uploadimageview"}
                                style={qdmstyles.DnFrG}
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
                            style={qdmstyles.bhxM}
                          >
                            <Divider
                              key={"0"}
                              id={"AH7fO"}
                              variant={"fullWidth"}
                              flexItem={""}
                              orientation={"horizontal"}
                              style={qdmstyles.UMQM}
                            ></Divider>
                          </Grid>
                          <Grid
                            key={"2"}
                            id={"5VWEj"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            style={qdmstyles.RzsB}
                          >
                            <Button
                              key={"0"}
                              id={"upload_image_button"}
                              variant={"text"}
                              color={"primary"}
                              children={"Upload Image"}
                              fullWidth={true}
                              aliasName={"uploadimagebutton"}
                              style={qdmstyles.uqe}
                            ></Button>
                          </Grid>
                        </Paper>
                      </Grid>
                    </>
                  )}
                  <Grid
                    key={"1"}
                    id={"vGiAm"}
                    container={""}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    lg={this.state.isdispensable ? "10" : "12"}
                    md={this.state.isdispensable ? "10" : "12"}
                    item={true}
                    sm={this.state.isdispensable ? "9" : "12"}
                    xs={this.state.isdispensable ? "9" : "12"}
                    xl={this.state.isdispensable ? "10" : "12"}
                  >
                    <Paper
                      key={"0"}
                      id={"RN9SC"}
                      elevation={""}
                      style={qdmstyles.cdG}
                    >
                      <Grid
                        key={"0"}
                        id={"WbID5"}
                        container={true}
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        item={true}
                        lg={"12"}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                        spacing={1}
                        wrap={"wrap"}
                        style={qdmstyles.kjth}
                      >
                        <Grid
                          key={"0"}
                          id={"rtmlg"}
                          container={true}
                          direction={"row"}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                          xs={"12"}
                          xl={"12"}
                          sm={"12"}
                          md={"12"}
                          lg={"12"}
                          item={true}
                        >
                          <Typography
                            key={"0"}
                            id={"ph_drug_master_header"}
                            align={"inherit"}
                            color={"primary"}
                            display={"initial"}
                            variant={"body1"}
                            children={"PH DRUG MASTER"}
                            aliasName={"phdrugmasterheader"}
                            style={qdmstyles.bvrxm}
                          ></Typography>
                        </Grid>
                        <Grid
                          key={"1"}
                          id={"CWXd4"}
                          container={true}
                          direction={"row"}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                          item={true}
                          spacing={""}
                          wrap={"wrap"}
                          lg={"12"}
                          md={"12"}
                          sm={"12"}
                          xl={"12"}
                          xs={"12"}
                          style={qdmstyles.eqsr}
                        >
                          <Grid
                            key={"0"}
                            id={"6ecQm"}
                            container={true}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            lg={2}
                            md={"3"}
                            sm={"6"}
                            xl={2}
                            xs={"6"}
                          >
                            <Grid
                              key={"0"}
                              id={"kwZd6"}
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
                              style={qdmstyles.xIYz}
                            >
                              <Typography
                                key={"0"}
                                id={"codeStandard_Typography"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={"Code Standard"}
                                aliasName={"codeStandardHeading"}
                                style={qdmstyles.dBCay}
                              ></Typography>
                            </Grid>
                            <Grid
                              key={"1"}
                              id={"kwZd6"}
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
                              style={qdmstyles.gfX}
                            >
                              <Autocomplete
                                id={"Hk0O4"}
                                style={qdmstyles?.HkO}
                                value={this.state?.drugintscreen_hk0o4 ?? null}
                                onLoad={() =>
                                  this.setState({
                                    drugintscreen_hk0o4:
                                      this.state?.drugintscreen_hk0o4 ?? null,
                                  })
                                }
                                getOptionLabel={(option) => option?.[""]}
                                options={[] ?? []}
                                size={"small"}
                                renderInput={(params) => (
                                  <ALLMCORE.TextField
                                    size={"small"}
                                    {...params}
                                    placeholder=""
                                    variant="outlined"
                                  />
                                )}
                              />
                            </Grid>
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"6ecQm"}
                            container={true}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            lg={"2"}
                            md={"3"}
                            sm={"6"}
                            xl={"2"}
                            xs={"6"}
                          >
                            <Grid
                              key={"0"}
                              id={"kwZd6"}
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
                              style={qdmstyles.QIbHD}
                            >
                              <Typography
                                key={"0"}
                                id={"drugCode_Typography"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={"Drug Code"}
                                aliasName={"drugCodeHeading"}
                                style={qdmstyles.uVXd}
                              ></Typography>
                            </Grid>
                            <Grid
                              key={"1"}
                              id={"kwZd6"}
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
                              style={qdmstyles.ModB}
                            >
                              <TextField
                                key={"0"}
                                id={"drug_code_value"}
                                label={""}
                                placeholder={"RANTD-01"}
                                type={"text"}
                                variant={"outlined"}
                                size={"small"}
                                fullWidth={true}
                                aliasName={"drugcodevalue"}
                                style={qdmstyles.Yfc}
                              ></TextField>
                            </Grid>
                          </Grid>
                          <Grid
                            key={"2"}
                            id={"6ecQm"}
                            container={true}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            lg={"3"}
                            md={"6"}
                            sm={"6"}
                            xl={"3"}
                            xs={"6"}
                          >
                            <Grid
                              key={"0"}
                              id={"kwZd6"}
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
                              style={qdmstyles.TJYq}
                            >
                              <Typography
                                key={"0"}
                                id={"shortDescription_Typography"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={"Short Description"}
                                aliasName={"shortDescriptionHeading"}
                                style={qdmstyles.oJx}
                              ></Typography>
                            </Grid>
                            <Grid
                              key={"1"}
                              id={"kwZd6"}
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
                              style={qdmstyles.fbfVp}
                            >
                              <TextField
                                key={"0"}
                                id={"InputofShortDescription_Textfield"}
                                label={""}
                                placeholder={"Ranitidine Oral Tablet"}
                                type={"text"}
                                variant={"outlined"}
                                size={"small"}
                                aliasName={"InputofShortDescription"}
                                fullWidth={true}
                                style={qdmstyles.gbQzl}
                              ></TextField>
                            </Grid>
                          </Grid>
                          <Grid
                            key={"3"}
                            id={"6ecQm"}
                            container={true}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            lg={"5"}
                            md={"6"}
                            sm={"6"}
                            xl={"5"}
                            xs={"6"}
                          >
                            <Grid
                              key={"0"}
                              id={"kwZd6"}
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
                              style={qdmstyles.qog}
                            >
                              <Typography
                                key={"0"}
                                id={"longDescription_Typography"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={"Long Description"}
                                aliasName={"longDescriptionHeading"}
                                style={qdmstyles.PqLw}
                              ></Typography>
                            </Grid>
                            <Grid
                              key={"1"}
                              id={"kwZd6"}
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
                              style={qdmstyles.LXcKc}
                            >
                              <TextField
                                key={"0"}
                                id={"InputofLongDescription_Textfield"}
                                label={""}
                                placeholder={"Ranitidine Oral Tablet"}
                                type={"text"}
                                variant={"outlined"}
                                size={"small"}
                                aliasName={"InputofLongDescription"}
                                fullWidth={true}
                                style={qdmstyles.rpidP}
                              ></TextField>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          key={"2"}
                          id={"CWXd4"}
                          container={true}
                          direction={"row"}
                          justifyContent={"flex-start"}
                          alignItems={"flex-start"}
                          item={true}
                          spacing={1}
                          wrap={"wrap"}
                          lg={"12"}
                          md={"12"}
                          sm={"12"}
                          xl={"12"}
                          xs={"12"}
                          style={qdmstyles.Wpl}
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
                            lg={"3"}
                            alignContent={"center"}
                            md={"3"}
                            sm={"6"}
                            xl={"3"}
                            xs={"6"}
                            style={qdmstyles.ewP}
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
                              style={qdmstyles.mMIQ}
                            >
                              <Typography
                                key={"0"}
                                id={"drugClass_Typography"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={"Drug Class"}
                                aliasName={"drugClassHeading"}
                                style={qdmstyles.Yhjxg}
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
                              style={qdmstyles.Rarp}
                            >
                              <Autocomplete
                                id={"4df89"}
                                style={qdmstyles?.df}
                                value={this.state?.drugintscreen_4df89 ?? null}
                                onLoad={() =>
                                  this.setState({
                                    drugintscreen_4df89:
                                      this.state?.drugintscreen_4df89 ?? null,
                                  })
                                }
                                getOptionLabel={(option) => option?.[""]}
                                options={[] ?? []}
                                size={"small"}
                                renderInput={(params) => (
                                  <ALLMCORE.TextField
                                    {...params}
                                    placeholder=""
                                    variant="outlined"
                                  />
                                )}
                              />
                            </Grid>
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
                            sm={"6"}
                            xl={"2"}
                            xs={"6"}
                            style={qdmstyles.MMifZ}
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
                              style={qdmstyles.qUBw}
                            >
                              <Typography
                                key={"0"}
                                id={"drugCategory_Textfield"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={"Drug Category"}
                                aliasName={"drugCategoryHeading"}
                                style={qdmstyles.NlzO}
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
                              style={qdmstyles.Ssdx}
                            >
                              <Autocomplete
                                id={"3l5se"}
                                style={qdmstyles?.lse}
                                value={this.state?.drugintscreen_3l5se ?? null}
                                onLoad={() =>
                                  this.setState({
                                    drugintscreen_3l5se:
                                      this.state?.drugintscreen_3l5se ?? null,
                                  })
                                }
                                getOptionLabel={(option) => option?.[""]}
                                options={[] ?? []}
                                size={"small"}
                                renderInput={(params) => (
                                  <ALLMCORE.TextField
                                    {...params}
                                    placeholder=""
                                    variant="outlined"
                                  />
                                )}
                              />
                            </Grid>
                          </Grid>
                          <Grid
                            key={"2"}
                            id={"aq1c2"}
                            container={""}
                            direction={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            spacing={""}
                            lg={"2"}
                            alignContent={"center"}
                            md={"4"}
                            sm={"4"}
                            xl={"2"}
                            xs={"4"}
                            style={qdmstyles.qGUQy}
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
                              style={qdmstyles.kLUQ}
                            >
                              <Typography
                                key={"0"}
                                id={"drugType_Typography"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={"Drug Type"}
                                aliasName={"drugTypeHeading"}
                                style={qdmstyles.eHPb}
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
                              style={qdmstyles.VEbTM}
                            >
                              <Autocomplete
                                id={"qCjmh"}
                                style={qdmstyles?.qCjmh}
                                value={this.state?.drugintscreen_qcjmh ?? null}
                                onLoad={() =>
                                  this.setState({
                                    drugintscreen_qcjmh:
                                      this.state?.drugintscreen_qcjmh ?? null,
                                  })
                                }
                                getOptionLabel={(option) => option?.[""]}
                                options={[] ?? []}
                                size={"small"}
                                renderInput={(params) => (
                                  <ALLMCORE.TextField
                                    {...params}
                                    placeholder=""
                                    variant="outlined"
                                  />
                                )}
                              />
                            </Grid>
                          </Grid>
                          <Grid
                            key={"3"}
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
                            sm={"6"}
                            xl={"4"}
                            xs={"6"}
                            style={qdmstyles.RsaET}
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
                              style={qdmstyles.yzEo}
                            >
                              <Typography
                                key={"0"}
                                id={"drugGeneric_Typography"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={"Drug Generic"}
                                aliasName={"drugGenericHeading"}
                                style={qdmstyles.mrwSp}
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
                              style={qdmstyles.iagcZ}
                            >
                              <Autocomplete
                                id={"605Py"}
                                style={qdmstyles?.Py}
                                value={this.state?.drugintscreen_605py ?? null}
                                onLoad={() =>
                                  this.setState({
                                    drugintscreen_605py:
                                      this.state?.drugintscreen_605py ?? null,
                                  })
                                }
                                getOptionLabel={(option) => option?.[""]}
                                options={[] ?? []}
                                size={"small"}
                                renderInput={(params) => (
                                  <ALLMCORE.TextField
                                    {...params}
                                    placeholder=""
                                    variant="outlined"
                                  />
                                )}
                              />
                            </Grid>
                          </Grid>
                          <Grid
                            key={"4"}
                            id={"aq1c2"}
                            container={""}
                            direction={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            spacing={""}
                            lg={1}
                            alignContent={"center"}
                            md={1}
                            sm={"2"}
                            xl={1}
                            xs={"2"}
                            style={qdmstyles.Kosko}
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
                              style={qdmstyles.AfiO}
                            >
                              <Typography
                                key={"0"}
                                id={"Dispensable_CheckboxHeading"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={"Dispensable"}
                                aliasName={"DispensableCheckboxHeading"}
                                style={qdmstyles.BBmu}
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
                              style={qdmstyles.GRNA}
                            >
                              <Checkbox
                                key={"0"}
                                id={"Dispensable_Checkbox"}
                                checked={this.state.isdispensable}
                                style={{ color: "#2A60BC" }}
                                size={"small"}
                                aliasName={"DispensableCheckbox"}
                                onClick={() =>
                                  this.setState({
                                    isdispensable: this.state.isdispensable
                                      ? false
                                      : true,
                                  })
                                }
                              ></Checkbox>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid
                  key={"1"}
                  id={"oSbbs"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid
                    key={"0"}
                    id={"WI79n"}
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
                      id={"TOgaz"}
                      elevation={"{3}"}
                      style={qdmstyles.vQHg}
                    >
                      <Grid
                        key={"0"}
                        id={"TgstR"}
                        container={true}
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        lg={"12"}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                        style={qdmstyles.TwGt}
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
                            id={"compoundHeading_Typography"}
                            align={"left"}
                            color={"initial"}
                            display={"initial"}
                            variant={"body1"}
                            children={"COMPOUND"}
                            aliasName={"compoundHeading"}
                            style={qdmstyles.yJwKG}
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
                            id={"CompondAddnewButton_button"}
                            variant={"text"}
                            color={"primary"}
                            children={"+ Add New"}
                            aliasName={"CompondAddnewButton"}
                            style={qdmstyles.wsy}
                            onClick={() =>
                              this.setState({
                                compoundAddnew: [
                                  ...this.state.compoundAddnew,
                                  "",
                                ],
                              })
                            }
                          ></Button>
                        </Grid>
                      </Grid>
                      {this.state.compoundAddnew.map(
                        (e, compoundaddnewindex) => {
                          return (
                            <div key={compoundaddnewindex}>
                              <Grid
                                key={"1"}
                                id={"oZ25m"}
                                container={true}
                                direction={"row"}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                spacing={"3"}
                              >
                                <Grid
                                  key={"0"}
                                  id={"R3123"}
                                  spacing={"1"}
                                  container={true}
                                  direction={"row"}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                  lg={"2"}
                                  md={"2"}
                                  item={true}
                                  sm={"6"}
                                  xl={"2"}
                                  xs={"6"}
                                >
                                  <Grid
                                    key={"0"}
                                    id={"CTVXT"}
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
                                    <Typography
                                      key={"0"}
                                      id={"DrugcodeHeading_Typography"}
                                      align={"inherit"}
                                      color={"initial"}
                                      display={"initial"}
                                      variant={"body1"}
                                      children={"Drug Code"}
                                      aliasName={"DrugcodeHeading"}
                                      style={qdmstyles.Usbr}
                                    ></Typography>
                                  </Grid>
                                  <Grid
                                    key={"1"}
                                    id={"CTVXT"}
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
                                    style={qdmstyles.PUW}
                                  >
                                    <Autocomplete
                                      id={"GW7ar"}
                                      style={qdmstyles?.GWar}
                                      value={
                                        this.state?.drugintscreen_gw7ar ?? null
                                      }
                                      onLoad={() =>
                                        this.setState({
                                          drugintscreen_gw7ar:
                                            this.state?.drugintscreen_gw7ar ??
                                            null,
                                        })
                                      }
                                      getOptionLabel={(option) => option?.[""]}
                                      options={[] ?? []}
                                      size={"small"}
                                      renderInput={(params) => (
                                        <ALLMCORE.TextField
                                          {...params}
                                          placeholder=""
                                          variant="outlined"
                                        />
                                      )}
                                    />
                                  </Grid>
                                  <Grid
                                    key={"2"}
                                    id={"CTVXT"}
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
                                      id={"kHkk2"}
                                      style={qdmstyles?.kHkk}
                                      value={
                                        this.state?.drugintscreen_khkk2 ?? null
                                      }
                                      onLoad={() =>
                                        this.setState({
                                          drugintscreen_khkk2:
                                            this.state?.drugintscreen_khkk2 ??
                                            null,
                                        })
                                      }
                                      getOptionLabel={(option) => option?.[""]}
                                      options={[] ?? []}
                                      size={"small"}
                                      renderInput={(params) => (
                                        <ALLMCORE.TextField
                                          {...params}
                                          placeholder=""
                                          variant="outlined"
                                        />
                                      )}
                                    />
                                  </Grid>
                                </Grid>
                                <Grid
                                  key={"1"}
                                  id={"nL5qY"}
                                  spacing={"1"}
                                  container={true}
                                  direction={"row"}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                  item={true}
                                  lg={"2"}
                                  md={"2"}
                                  sm={"6"}
                                  xl={"2"}
                                  xs={"6"}
                                >
                                  <Grid
                                    key={"0"}
                                    id={"CTVXT"}
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
                                    <Typography
                                      key={"0"}
                                      id={"descriptionHeading_Typography"}
                                      align={"inherit"}
                                      color={"initial"}
                                      display={"initial"}
                                      variant={"body1"}
                                      children={"Description"}
                                      aliasName={"descriptionHeading"}
                                      style={qdmstyles.UAZJs}
                                    ></Typography>
                                  </Grid>
                                  <Grid
                                    key={"1"}
                                    id={"CTVXT"}
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
                                    <TextField
                                      key={"0"}
                                      id={"p4SrD"}
                                      label={""}
                                      placeholder={"Local language"}
                                      type={"text"}
                                      variant={"outlined"}
                                      size={"small"}
                                      fullWidth={true}
                                      style={qdmstyles.VeII}
                                    ></TextField>
                                  </Grid>
                                  <Grid
                                    key={"2"}
                                    id={"CTVXT"}
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
                                    <TextField
                                      key={"0"}
                                      id={"p4SrD"}
                                      label={""}
                                      placeholder={"Tallman"}
                                      type={"text"}
                                      variant={"outlined"}
                                      size={"small"}
                                      fullWidth={true}
                                      style={qdmstyles.dExq}
                                    ></TextField>
                                  </Grid>
                                </Grid>
                                <Grid
                                  key={"2"}
                                  id={"nL5qY"}
                                  spacing={"1"}
                                  container={true}
                                  direction={"row"}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                  item={true}
                                  lg={"2"}
                                  md={"2"}
                                  sm={"4"}
                                  xl={"2"}
                                  xs={"4"}
                                >
                                  <Grid
                                    key={"0"}
                                    id={"CTVXT"}
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
                                    <Typography
                                      key={"0"}
                                      id={
                                        "strengthandconcentrationHeading_Typography"
                                      }
                                      align={"inherit"}
                                      color={"initial"}
                                      display={"initial"}
                                      variant={"body1"}
                                      children={"Strength/Concentration"}
                                      aliasName={
                                        "strengthandconcentrationHeading"
                                      }
                                      style={qdmstyles.Rhky}
                                    ></Typography>
                                  </Grid>
                                  <Grid
                                    key={"1"}
                                    id={"CTVXT"}
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
                                    <TextField
                                      key={"0"}
                                      id={"p4SrD"}
                                      label={""}
                                      placeholder={""}
                                      type={"text"}
                                      variant={"outlined"}
                                      size={"small"}
                                      fullWidth={true}
                                      style={qdmstyles.iRSf}
                                    ></TextField>
                                  </Grid>
                                  <Grid
                                    key={"2"}
                                    id={"CTVXT"}
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
                                    <TextField
                                      key={"0"}
                                      id={"p4SrD"}
                                      label={""}
                                      placeholder={""}
                                      type={"text"}
                                      variant={"outlined"}
                                      size={"small"}
                                      fullWidth={true}
                                      style={qdmstyles.IzlHx}
                                    ></TextField>
                                  </Grid>
                                </Grid>
                                <Grid
                                  key={"3"}
                                  id={"nL5qY"}
                                  spacing={"1"}
                                  container={true}
                                  direction={"row"}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                  item={true}
                                  lg={"2"}
                                  md={"2"}
                                  sm={"3"}
                                  xl={"2"}
                                  xs={"3"}
                                >
                                  <Grid
                                    key={"0"}
                                    id={"CTVXT"}
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
                                    <Typography
                                      key={"0"}
                                      id={"RequiredQuantityHeading_Typography"}
                                      align={"inherit"}
                                      color={"initial"}
                                      display={"initial"}
                                      variant={"body1"}
                                      children={"Required Quantity & UOM"}
                                      aliasName={"RequiredQuantityHeading"}
                                      style={qdmstyles.eBPpS}
                                    ></Typography>
                                  </Grid>
                                  <Grid
                                    key={"1"}
                                    id={"oZV3U"}
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
                                    // spacing={"1"}
                                  >
                                    <Grid
                                      key={"0"}
                                      id={"CTVXT"}
                                      container={""}
                                      direction={"row"}
                                      justifyContent={"center"}
                                      alignItems={"center"}
                                      item={true}
                                      lg={"6"}
                                      md={"6"}
                                      sm={"6"}
                                      xl={"6"}
                                      xs={"6"}
                                    >
                                      <TextField
                                        className={classes.textbor}
                                        key={"0"}
                                        id={"p4SrD"}
                                        label={""}
                                        placeholder={""}
                                        type={"text"}
                                        variant={"outlined"}
                                        size={"small"}
                                        style={qdmstyles.ZMoO}
                                      ></TextField>
                                    </Grid>
                                    <Grid
                                      key={"1"}
                                      id={"CTVXT"}
                                      container={""}
                                      direction={"row"}
                                      justifyContent={"center"}
                                      alignItems={"center"}
                                      item={true}
                                      lg={"6"}
                                      md={"6"}
                                      sm={"6"}
                                      xl={"6"}
                                      xs={"6"}
                                    >
                                      <Autocomplete
                                        className={classes.auto}
                                        id={"THJqP"}
                                        style={qdmstyles?.THJqP}
                                        value={
                                          this.state?.drugintscreen_thjqp ??
                                          null
                                        }
                                        onLoad={() =>
                                          this.setState({
                                            drugintscreen_thjqp:
                                              this.state?.drugintscreen_thjqp ??
                                              null,
                                          })
                                        }
                                        getOptionLabel={(option) =>
                                          option?.[""]
                                        }
                                        options={[] ?? []}
                                        size={"small"}
                                        renderInput={(params) => (
                                          <ALLMCORE.TextField
                                            {...params}
                                            placeholder=""
                                            variant="outlined"
                                          />
                                        )}
                                      />
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    key={"2"}
                                    id={"oZV3U"}
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
                                      id={"CTVXT"}
                                      container={""}
                                      direction={"row"}
                                      justifyContent={"center"}
                                      alignItems={"center"}
                                      item={true}
                                      lg={"6"}
                                      md={"6"}
                                      sm={"6"}
                                      xl={"6"}
                                      xs={"6"}
                                    >
                                      <TextField
                                        className={classes.textbor}
                                        key={"0"}
                                        id={"p4SrD"}
                                        label={""}
                                        placeholder={""}
                                        type={"text"}
                                        variant={"outlined"}
                                        size={"small"}
                                        style={qdmstyles.Bdno}
                                      ></TextField>
                                    </Grid>
                                    <Grid
                                      key={"1"}
                                      id={"CTVXT"}
                                      container={""}
                                      direction={"row"}
                                      justifyContent={"center"}
                                      alignItems={"center"}
                                      item={true}
                                      lg={"6"}
                                      md={"6"}
                                      sm={"6"}
                                      xl={"6"}
                                      xs={"6"}
                                    >
                                      <Autocomplete
                                        className={classes.auto}
                                        id={"6PdAe"}
                                        style={qdmstyles?.PdAe}
                                        value={
                                          this.state?.drugintscreen_6pdae ??
                                          null
                                        }
                                        onLoad={() =>
                                          this.setState({
                                            drugintscreen_6pdae:
                                              this.state?.drugintscreen_6pdae ??
                                              null,
                                          })
                                        }
                                        getOptionLabel={(option) =>
                                          option?.[""]
                                        }
                                        options={[] ?? []}
                                        size={"small"}
                                        renderInput={(params) => (
                                          <ALLMCORE.TextField
                                            {...params}
                                            placeholder=""
                                            variant="outlined"
                                          />
                                        )}
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid
                                  key={"4"}
                                  id={"nL5qY"}
                                  spacing={"1"}
                                  container={true}
                                  direction={"row"}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                  item={true}
                                  lg={"4"}
                                  md={"4"}
                                  sm={"5"}
                                  xl={"4"}
                                  xs={"5"}
                                  style={qdmstyles.FkohN}
                                >
                                  <Grid
                                    key={"0"}
                                    id={"CTVXT"}
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
                                    <Typography
                                      key={"0"}
                                      id={"remarksHeading_Typography"}
                                      align={"inherit"}
                                      color={"initial"}
                                      display={"initial"}
                                      variant={"body1"}
                                      children={"Remarks"}
                                      aliasName={"RemarksHeading"}
                                      style={qdmstyles.joa}
                                    ></Typography>
                                  </Grid>
                                  <Grid
                                    key={"1"}
                                    id={"CTVXT"}
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
                                    style={qdmstyles.gaNHc}
                                  >
                                    <TextField
                                      key={"0"}
                                      id={"p4SrD"}
                                      label={""}
                                      placeholder={"Type Here"}
                                      type={"text"}
                                      variant={"outlined"}
                                      select={""}
                                      fullWidth={true}
                                      size={"small"}
                                      style={qdmstyles.vHsV}
                                    ></TextField>
                                  </Grid>
                                  <Grid
                                    key={"2"}
                                    id={"CTVXT"}
                                    container={""}
                                    direction={"row"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    item={true}
                                    lg={"12"}
                                    xl={"12"}
                                    md={"12"}
                                    sm={"12"}
                                    xs={"12"}
                                  >
                                    <TextField
                                      key={"0"}
                                      id={"p4SrD"}
                                      label={""}
                                      placeholder={"Type Here"}
                                      type={"text"}
                                      variant={"outlined"}
                                      select={""}
                                      fullWidth={true}
                                      size={"small"}
                                      style={qdmstyles.SJKhO}
                                    ></TextField>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </div>
                          );
                        }
                      )}
                    </Paper>
                  </Grid>
                </Grid>

                <Grid
                  key={"2"}
                  id={"5vNt9"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={qdmstyles.vNt}
                >
                  <Grid
                    key={"0"}
                    id={"x6qUr"}
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
                      id={"VI5ak"}
                      elevation={"{3}"}
                      style={qdmstyles.VIak}
                    >
                      <MuiTab
                        selectedTabColor="#2A60BC"
                        indicatorColor="#2A60BC"
                        key={"0"}
                        id={"aWOWA"}
                        varient={"scrollable"}
                        component={"layout"}
                        orientation={"horizontal"}
                        tabs={[
                          {
                            header: "Synonym",
                            fullWidth: true,
                            body: (
                              <ALL.Synonymcomp
                                propsState={this.state}
                                setFun={(value) => {
                                  this.changeState("Synonymcomp", value);
                                }}
                                stateName={"Synonymcomp"}
                                statevalue={this.state.Synonymcomp}
                              />
                            ),
                          },
                          {
                            header: "Alias Mapping",
                            fullWidth: true,
                            body: (
                              <ALL.Aliasmappingcomp
                                propsState={this.state}
                                setFun={(value) => {
                                  this.changeState("Aliasmappingcomp", value);
                                }}
                                stateName={"Aliasmappingcomp"}
                                statevalue={this.state.Aliasmappingcomp}
                              />
                            ),
                          },
                          {
                            header: "Available Strength",
                            fullWidth: true,
                            body: (
                              <ALL.Availablestrengthtabcomp
                                propsState={this.state}
                                setFun={(value) => {
                                  this.changeState(
                                    "Availablestrengthtabcomp",
                                    value
                                  );
                                }}
                                stateName={"Availablestrengthtabcomp"}
                                statevalue={this.state.Availablestrengthtabcomp}
                              />
                            ),
                          },
                          {
                            header: "Drug Other Attributes",
                            fullWidth: true,
                            body: (
                              <ALL.Drugotherattributes
                                propsState={this.state}
                                setFun={(value) => {
                                  this.changeState(
                                    "Drugotherattributes",
                                    value
                                  );
                                }}
                                stateName={"Drugotherattributes"}
                                statevalue={this.state.Drugotherattributes}
                              />
                            ),
                          },
                          {
                            header: "Unit Of Measure",
                            fullWidth: true,
                            body: (
                              <ALL.Unitofmeasurecomp
                                propsState={this.state}
                                setFun={(value) => {
                                  this.changeState("Unitofmeasurecomp", value);
                                }}
                                stateName={"Unitofmeasurecomp"}
                                statevalue={this.state.Unitofmeasurecomp}
                              />
                            ),
                          },
                          {
                            header: "Dispense & Charge",
                            fullWidth: true,
                            body: (
                              <Despenseandcharge
                                propsState={this.state}
                                setFun={(value) => {
                                  this.changeState("despenseandcharge", value);
                                }}
                                stateName={"despenseandcharge"}
                                statevalue={this.state.despenseandcharge}
                              />
                            ),
                          },
                          {
                            header: "Order Defaults",
                            fullWidth: true,
                            body: (
                              <ALL.Orderdetailscomp
                                propsState={this.state}
                                setFun={(value) => {
                                  this.changeState("Orderdetailscomp", value);
                                }}
                                stateName={"Orderdetailscomp"}
                                statevalue={this.state.Orderdetailscomp}
                              />
                            ),
                          },
                          {
                            header: "Dispense Defaults",
                            fullWidth: true,
                            body: (
                              <ALL.Despensedefaultcomp
                                propsState={this.state}
                                setFun={(value) => {
                                  this.changeState(
                                    "Despensedefaultcomp",
                                    value
                                  );
                                }}
                                stateName={"Despensedefaultcomp"}
                                statevalue={this.state.Despensedefaultcomp}
                              />
                            ),
                          },
                          {
                            header: "Instructions",
                            fullWidth: true,
                            body: (
                              <ALL.Instructioncomp
                                propsState={this.state}
                                setFun={(value) => {
                                  this.changeState("Instructioncomp", value);
                                }}
                                stateName={"Instructioncomp"}
                                statevalue={this.state.Instructioncomp}
                              />
                            ),
                          },
                          {
                            header: "Mapped Dispensables",
                            fullWidth: true,
                            body: (
                              <ALL.Mappeddespensablecomp
                                propsState={this.state}
                                setFun={(value) => {
                                  this.changeState(
                                    "Mappeddespensablecomp",
                                    value
                                  );
                                }}
                                stateName={"Mappeddespensablecomp"}
                                statevalue={this.state.Mappeddespensablecomp}
                              />
                            ),
                          },
                        ]}
                        // style={qdmstyles.aWOWA}
                      ></MuiTab>
                    </Paper>
                  </Grid>
                </Grid>

                <Grid
                  key={"3"}
                  id={"QmXa7"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={qdmstyles.QmXa}
                >
                  <Grid
                    key={"0"}
                    id={"Ai9jq"}
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
                      id={"If6NF"}
                      elevation={"{3}"}
                      style={qdmstyles.IfNF}
                    >
                      {!this.state.showStatuspage && (
                        <Grid
                          key={"0"}
                          id={"Tm1em"}
                          container={true}
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <>
                            <Grid
                              key={"0"}
                              id={"Ja5NS"}
                              container={""}
                              direction={"row"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              lg={"2"}
                            >
                              <Typography
                                key={"0"}
                                id={"status_header"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={"STATUS"}
                                aliasName={"statusheader"}
                                style={qdmstyles.FPew}
                              ></Typography>
                            </Grid>

                            <Grid
                              key={"1"}
                              id={"YhT40"}
                              container={""}
                              direction={"row"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              lg={"2"}
                              style={qdmstyles.YhT}
                            >
                              <Button
                                key={"0"}
                                id={"status_add_new_button"}
                                onClick={() =>
                                  this.setState({ showStatuspage: true })
                                }
                                variant={"text"}
                                color={"primary"}
                                children={"+ Add New"}
                                aliasName={"statusaddnewbutton"}
                                style={qdmstyles.KIyu}
                              ></Button>
                            </Grid>
                          </>
                        </Grid>
                      )}
                      {this.state.showStatuspage && (
                        <>
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
                                      status_uykpj:
                                        this.state?.status_uykpj ?? null,
                                    })
                                  }
                                  getOptionLabel={(option) => option?.[""]}
                                  options={[] ?? []}
                                  size={"small"}
                                  renderInput={(params) => (
                                    <ALLMCORE.TextField
                                      {...params}
                                      label={""}
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
                            spacing={"1"}
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
                            <Divider
                              key={"0"}
                              id={"30G6A"}
                              variant={"fullWidth"}
                            ></Divider>
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
                        </>
                      )}
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            ) : (
              <Alertrestriction />
            )}
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
)(withRouter(withStyles(Styles)(translate()(Drugintscreen))));
