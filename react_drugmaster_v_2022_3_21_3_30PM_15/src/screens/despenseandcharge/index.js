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
  Button,
  Box,
  Divider,
  Checkbox,
} from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Despenseandcharge extends React.Component {
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
              id={"VjG6D"}
              elevation={"{3}"}
              style={qdmstyles.VjGD}
            >
              <Grid
                key={"0"}
                id={"BQGWZ"}
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
                  id={"AJzqa"}
                  container={true}
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  style={qdmstyles.AJzqa}
                >
                  <Typography
                    key={"0"}
                    id={"MmAkm"}
                    align={"inherit"}
                    color={"initial"}
                    display={"initial"}
                    variant={"body1"}
                    children={"DEFINE CRITERIA"}
                    style={qdmstyles.MmAkm}
                  ></Typography>
                </Grid>
                <Grid
                  key={"1"}
                  id={"Q9lEz"}
                  container={true}
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  item={true}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                  spacing={1}
                  style={qdmstyles.QlEz}
                >
                  <Button
                    key={"0"}
                    id={"AUoBK"}
                    variant={"text"}
                    color={"primary"}
                    children={"+ Add New Rule Set"}
                    style={qdmstyles.AUoBK}
                  ></Button>
                  <Typography
                    key={"1"}
                    id={"HSph7"}
                    align={"inherit"}
                    color={"initial"}
                    display={"initial"}
                    variant={"body1"}
                    children={"(or)"}
                    style={qdmstyles.HSph}
                  ></Typography>
                  <Button
                    key={"2"}
                    id={"AUoBK"}
                    variant={"text"}
                    color={"primary"}
                    children={"+ Add Existing Rule Set"}
                    style={qdmstyles.ZZppy}
                  ></Button>
                </Grid>
                <Grid
                  key={"2"}
                  id={"hJITG"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={qdmstyles.hJITG}
                >
                  <Box
                    key={"0"}
                    id={"oK7oE"}
                    m={1}
                    component={"div"}
                    style={qdmstyles.oKoE}
                  >
                    <Divider
                      key={"0"}
                      id={"QkYY9"}
                      variant={"fullWidth"}
                    ></Divider>
                  </Box>
                </Grid>
                <Grid
                  key={"3"}
                  id={"iiQjK"}
                  container={true}
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  lg={"12"}
                  item={true}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                >
                  <Grid
                    key={"0"}
                    id={"AJzqa"}
                    container={true}
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    style={qdmstyles.VeP}
                  >
                    <Typography
                      key={"0"}
                      id={"MmAkm"}
                      align={"inherit"}
                      color={"initial"}
                      display={"initial"}
                      variant={"body1"}
                      children={"DISPENSE & CHARGE"}
                      style={qdmstyles.Tqjo}
                    ></Typography>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"KcbOk"}
                    container={true}
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    lg={"12"}
                    item={true}
                    md={"12"}
                    wrap={"wrap"}
                    sm={"12"}
                    xl={"12"}
                    xs={"12"}
                    spacing={"2"}
                    style={qdmstyles.KcbOk}
                  >
                    <Grid
                      key={"0"}
                      id={"tdVtU"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"2"}
                      item={true}
                    >
                      <Box
                        key={"0"}
                        id={"67nI7"}
                        m={1}
                        component={"div"}
                        style={qdmstyles.nI}
                      >
                        <Grid
                          key={"0"}
                          id={"QDdZ0"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Grid
                            key={"0"}
                            id={"2y6EP"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                          >
                            <Typography
                              key={"0"}
                              id={"C2Q5X"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Dispense Uom"}
                              style={qdmstyles.CQX}
                            ></Typography>
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"weTv6"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                          >
                            <Autocomplete
                              id={"QpXfr"}
                              style={qdmstyles?.QpXfr}
                              value={
                                this.state?.despenseandcharge_qpxfr ?? null
                              }
                              onLoad={() =>
                                this.setState({
                                  despenseandcharge_qpxfr:
                                    this.state?.despenseandcharge_qpxfr ?? null,
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
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"0Hn2u"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"2"}
                      item={true}
                    >
                      <Box
                        key={"0"}
                        id={"BxQTD"}
                        m={1}
                        component={"div"}
                        style={qdmstyles.BxQTD}
                      >
                        <Grid
                          key={"0"}
                          id={"E2hOT"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Grid
                            key={"0"}
                            id={"48PiV"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                          >
                            <Typography
                              key={"0"}
                              id={"C2Q5X"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Individual Dose Roundoff"}
                              noWrap={true}
                              style={qdmstyles.fpZxI}
                            ></Typography>
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"SiAUJ"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            style={qdmstyles.SiAUJ}
                          >
                            <Checkbox
                              key={"0"}
                              id={"1EoUl"}
                              checked={true}
                              color={"default"}
                              size={"small"}
                            ></Checkbox>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid
                      key={"2"}
                      id={"8VwWE"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"1"}
                      item={true}
                    >
                      <Box
                        key={"0"}
                        id={"GBd1p"}
                        m={1}
                        component={"div"}
                        style={qdmstyles.GBdp}
                      >
                        <Grid
                          key={"0"}
                          id={"NcaAb"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          lg={"12"}
                          item={true}
                        >
                          <Grid
                            key={"0"}
                            id={"RCTcy"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            <Typography
                              key={"0"}
                              id={"C2Q5X"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Round-Off Type"}
                              style={qdmstyles.sbjGv}
                            ></Typography>
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"3MHm3"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                          >
                            <Autocomplete
                              id={"gkpLW"}
                              style={qdmstyles?.gkpLW}
                              value={
                                this.state?.despenseandcharge_gkplw ?? null
                              }
                              onLoad={() =>
                                this.setState({
                                  despenseandcharge_gkplw:
                                    this.state?.despenseandcharge_gkplw ?? null,
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
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid
                      key={"3"}
                      id={"uXWIj"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"2"}
                      item={true}
                    >
                      <Box
                        key={"0"}
                        id={"yNB7u"}
                        m={1}
                        component={"div"}
                        style={qdmstyles.yNBu}
                      >
                        <Grid
                          key={"0"}
                          id={"rJNQ8"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          lg={"12"}
                          item={true}
                        >
                          <Grid
                            key={"0"}
                            id={"nGL7E"}
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
                            style={qdmstyles.TPjF}
                          >
                            <Typography
                              key={"0"}
                              id={"C2Q5X"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Round-Off Value"}
                              style={qdmstyles.xkXx}
                            ></Typography>
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"CihPF"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            <Autocomplete
                              id={"VseEx"}
                              style={qdmstyles?.VseEx}
                              value={
                                this.state?.despenseandcharge_vseex ?? null
                              }
                              onLoad={() =>
                                this.setState({
                                  despenseandcharge_vseex:
                                    this.state?.despenseandcharge_vseex ?? null,
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
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid
                      key={"4"}
                      id={"yBtTu"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"2"}
                      item={true}
                    >
                      <Box
                        key={"0"}
                        id={"g3wQC"}
                        m={1}
                        component={"div"}
                        style={qdmstyles.gwQC}
                      >
                        <Grid
                          key={"0"}
                          id={"Xpdqk"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          lg={"12"}
                          item={true}
                        >
                          <Grid
                            key={"0"}
                            id={"nGL7E"}
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
                            style={qdmstyles.ySoF}
                          >
                            <Typography
                              key={"0"}
                              id={"C2Q5X"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Charge Uom"}
                              style={qdmstyles.waSwS}
                            ></Typography>
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"ANYFs"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                          >
                            <Autocomplete
                              id={"x4gJ2"}
                              style={qdmstyles?.xgJ}
                              value={
                                this.state?.despenseandcharge_x4gj2 ?? null
                              }
                              onLoad={() =>
                                this.setState({
                                  despenseandcharge_x4gj2:
                                    this.state?.despenseandcharge_x4gj2 ?? null,
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
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid
                      key={"5"}
                      id={"gFK0p"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={1}
                      item={true}
                    >
                      <Box
                        key={"0"}
                        id={"u0q39"}
                        m={1}
                        component={"div"}
                        style={qdmstyles.uq}
                      >
                        <Grid
                          key={"0"}
                          id={"hE9lR"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          lg={"12"}
                          item={true}
                        >
                          <Grid
                            key={"0"}
                            id={"nGL7E"}
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
                            style={qdmstyles.VTc}
                          >
                            <Typography
                              key={"0"}
                              id={"C2Q5X"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Round-Off Type"}
                              style={qdmstyles.qqfW}
                            ></Typography>
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"4Gzax"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            lg={"12"}
                            xs={"12"}
                            xl={"12"}
                            sm={"12"}
                            md={"12"}
                            style={qdmstyles.bpH}
                          >
                            <Autocomplete
                              id={"UvmEb"}
                              style={qdmstyles?.UvmEb}
                              value={
                                this.state?.despenseandcharge_uvmeb ?? null
                              }
                              onLoad={() =>
                                this.setState({
                                  despenseandcharge_uvmeb:
                                    this.state?.despenseandcharge_uvmeb ?? null,
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
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid
                      key={"6"}
                      id={"0rW0m"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={2}
                      item={true}
                    >
                      <Box
                        key={"0"}
                        id={"5bRcW"}
                        m={1}
                        component={"div"}
                        style={qdmstyles.bRcW}
                      >
                        <Grid
                          key={"0"}
                          id={"pPjWh"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          lg={"12"}
                          item={true}
                        >
                          <Grid
                            key={"0"}
                            id={"nGL7E"}
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
                            style={qdmstyles.Ieu}
                          >
                            <Typography
                              key={"0"}
                              id={"C2Q5X"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Round-Off Value"}
                              style={qdmstyles.iprKf}
                            ></Typography>
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"4Gzax"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            lg={"12"}
                            xs={"12"}
                            xl={"12"}
                            sm={"12"}
                            md={"12"}
                            style={qdmstyles.ugQfv}
                          >
                            <Autocomplete
                              id={"QkjVf"}
                              style={qdmstyles?.QkjVf}
                              value={
                                this.state?.despenseandcharge_qkjvf ?? null
                              }
                              onLoad={() =>
                                this.setState({
                                  despenseandcharge_qkjvf:
                                    this.state?.despenseandcharge_qkjvf ?? null,
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
                        </Grid>
                      </Box>
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
)(withRouter(translate()(Despenseandcharge)));
