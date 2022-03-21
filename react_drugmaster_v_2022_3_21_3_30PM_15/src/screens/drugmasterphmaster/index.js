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
  Paper,
  Grid,
  Typography,
  TextField,
  Checkbox,
} from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Drugmasterphmaster extends React.Component {
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
            <Paper
              key={"0"}
              id={"RN9SC"}
              elevation={""}
              style={qdmstyles.JACiH}
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
                style={qdmstyles.QiCxu}
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
                    style={qdmstyles.ibWg}
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
                  style={qdmstyles.xyczR}
                >
                  <Grid
                    key={"0"}
                    id={"6ecQm"}
                    container={true}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    item={true}
                    lg={1}
                    md={"3"}
                    sm={"6"}
                    xl={1}
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
                      style={qdmstyles.yjZ}
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
                        style={qdmstyles.qZHF}
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
                      style={qdmstyles.tiaf}
                    >
                      <Autocomplete
                        id={"scvBw"}
                        style={qdmstyles?.scvBw}
                        value={this.state?.drugmasterphmaster_scvbw ?? null}
                        onLoad={() =>
                          this.setState({
                            drugmasterphmaster_scvbw:
                              this.state?.drugmasterphmaster_scvbw ?? null,
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
                      style={qdmstyles.tRxc}
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
                        style={qdmstyles.kKmt}
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
                      style={qdmstyles.gzLq}
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
                        margin={"dense"}
                        aliasName={"drugcodevalue"}
                        style={qdmstyles.vym}
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
                      style={qdmstyles.cMmTL}
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
                        style={qdmstyles.Gra}
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
                      style={qdmstyles.HlV}
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
                        margin={"dense"}
                        style={qdmstyles.klSc}
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
                    lg={"6"}
                    md={"6"}
                    sm={"6"}
                    xl={"6"}
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
                      style={qdmstyles.ovL}
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
                        style={qdmstyles.tXLO}
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
                      style={qdmstyles.gLet}
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
                        margin={"dense"}
                        style={qdmstyles.HiVP}
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
                  style={qdmstyles.NuYR}
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
                    style={qdmstyles.XLCo}
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
                      style={qdmstyles.aNB}
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
                        style={qdmstyles.fIIz}
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
                      style={qdmstyles.NbUSw}
                    >
                      <Autocomplete
                        id={"zr2IY"}
                        style={qdmstyles?.zrIY}
                        value={this.state?.drugmasterphmaster_zr2iy ?? null}
                        onLoad={() =>
                          this.setState({
                            drugmasterphmaster_zr2iy:
                              this.state?.drugmasterphmaster_zr2iy ?? null,
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
                    style={qdmstyles.DSx}
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
                      style={qdmstyles.ndtav}
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
                        style={qdmstyles.bhTAg}
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
                      style={qdmstyles.ymfUZ}
                    >
                      <Autocomplete
                        id={"RRN9Z"}
                        style={qdmstyles?.RRNZ}
                        value={this.state?.drugmasterphmaster_rrn9z ?? null}
                        onLoad={() =>
                          this.setState({
                            drugmasterphmaster_rrn9z:
                              this.state?.drugmasterphmaster_rrn9z ?? null,
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
                    style={qdmstyles.FbpM}
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
                      style={qdmstyles.OcBSR}
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
                        style={qdmstyles.vHJG}
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
                      style={qdmstyles.YXGxw}
                    >
                      <Autocomplete
                        id={"Xhow5"}
                        style={qdmstyles?.Xhow}
                        value={this.state?.drugmasterphmaster_xhow5 ?? null}
                        onLoad={() =>
                          this.setState({
                            drugmasterphmaster_xhow5:
                              this.state?.drugmasterphmaster_xhow5 ?? null,
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
                    style={qdmstyles.ZRoP}
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
                      style={qdmstyles.YcksS}
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
                        style={qdmstyles.zHoCM}
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
                      style={qdmstyles.vmLOP}
                    >
                      <Autocomplete
                        id={"HgPpR"}
                        style={qdmstyles?.HgPpR}
                        value={this.state?.drugmasterphmaster_hgppr ?? null}
                        onLoad={() =>
                          this.setState({
                            drugmasterphmaster_hgppr:
                              this.state?.drugmasterphmaster_hgppr ?? null,
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
                    style={qdmstyles.JgRB}
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
                      style={qdmstyles.cVdw}
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
                        style={qdmstyles.kUOu}
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
                      style={qdmstyles.aPpq}
                    >
                      <Checkbox
                        key={"0"}
                        id={"Dispensable_Checkbox"}
                        checked={true}
                        color={"default"}
                        size={"small"}
                        aliasName={"DispensableCheckbox"}
                      ></Checkbox>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
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
)(withRouter(translate()(Drugmasterphmaster)));
