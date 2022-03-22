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

import { Grid, Paper, Typography, Button, TextField } from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Drugcompound extends React.Component {
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
                  style={qdmstyles.SIhlr}
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
                    style={qdmstyles.PsFFI}
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
                        style={qdmstyles.YAwD}
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
                        children={"+Add New"}
                        aliasName={"CompondAddnewButton"}
                        style={qdmstyles.ds}
                      ></Button>
                    </Grid>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"oZ25m"}
                    container={true}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    spacing={"3"}
                  >
                    <Grid
                      key={"0"}
                      id={"R3123"}
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
                          style={qdmstyles.CPjoJ}
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
                        style={qdmstyles.RXDH}
                      >
                        <Autocomplete
                          id={"GGIvc"}
                          style={qdmstyles?.GGIvc}
                          value={this.state?.drugcompound_ggivc ?? null}
                          onLoad={() =>
                            this.setState({
                              drugcompound_ggivc:
                                this.state?.drugcompound_ggivc ?? null,
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
                          id={"0VyaY"}
                          style={qdmstyles?.VyaY}
                          value={this.state?.drugcompound_0vyay ?? null}
                          onLoad={() =>
                            this.setState({
                              drugcompound_0vyay:
                                this.state?.drugcompound_0vyay ?? null,
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
                      id={"nL5qY"}
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
                      spacing={""}
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
                          style={qdmstyles.EEDvg}
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
                          style={qdmstyles.XlZEw}
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
                          style={qdmstyles.EmFeT}
                        ></TextField>
                      </Grid>
                    </Grid>
                    <Grid
                      key={"2"}
                      id={"nL5qY"}
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
                      spacing={""}
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
                          id={"strengthandconcentrationHeading_Typography"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"Strength/Concentration"}
                          aliasName={"strengthandconcentrationHeading"}
                          style={qdmstyles.vm}
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
                          style={qdmstyles.kbM}
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
                          style={qdmstyles.WVtY}
                        ></TextField>
                      </Grid>
                    </Grid>
                    <Grid
                      key={"3"}
                      id={"nL5qY"}
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
                      spacing={""}
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
                          style={qdmstyles.GTzj}
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
                            key={"0"}
                            id={"p4SrD"}
                            label={""}
                            placeholder={""}
                            type={"text"}
                            variant={"outlined"}
                            size={"small"}
                            style={qdmstyles.eizL}
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
                            id={"Bodt9"}
                            style={qdmstyles?.Bodt}
                            value={this.state?.drugcompound_bodt9 ?? null}
                            onLoad={() =>
                              this.setState({
                                drugcompound_bodt9:
                                  this.state?.drugcompound_bodt9 ?? null,
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
                            key={"0"}
                            id={"p4SrD"}
                            label={""}
                            placeholder={""}
                            type={"text"}
                            variant={"outlined"}
                            size={"small"}
                            style={qdmstyles.nWRRz}
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
                            id={"A8I9W"}
                            style={qdmstyles?.AIW}
                            value={this.state?.drugcompound_a8i9w ?? null}
                            onLoad={() =>
                              this.setState({
                                drugcompound_a8i9w:
                                  this.state?.drugcompound_a8i9w ?? null,
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
                      key={"4"}
                      id={"nL5qY"}
                      container={true}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                      lg={"4"}
                      md={"4"}
                      sm={"6"}
                      xl={"4"}
                      xs={"6"}
                      spacing={""}
                      style={qdmstyles.cPKf}
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
                          style={qdmstyles.CxeW}
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
                        style={qdmstyles.VsLx}
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
                          style={qdmstyles.kuER}
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
                          style={qdmstyles.srIJA}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
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
)(withRouter(translate()(Drugcompound)));
