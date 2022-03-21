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
  TextField,
  Button,
  Box,
  Divider,
  Avatar,
} from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Unitofmeasure extends React.Component {
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
              id={"r8lZw"}
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
                id={"hVUlX"}
                elevation={"{3}"}
                style={qdmstyles.hVUlX}
              >
                <Grid
                  key={"0"}
                  id={"0iQGv"}
                  container={true}
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"flex-end"}
                  item={true}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                  spacing={"2"}
                  style={qdmstyles.iQGv}
                >
                  <Grid
                    key={"0"}
                    id={"kbI7d"}
                    container={true}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    item={true}
                    lg={"2"}
                    md={"2"}
                    sm={"2"}
                    xl={"2"}
                    xs={"2"}
                    style={qdmstyles.kbId}
                  >
                    <Grid
                      key={"0"}
                      id={"Z4gyu"}
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
                      style={qdmstyles.Zgyu}
                    >
                      <Typography
                        key={"0"}
                        id={"BaseStockUomHeading_Typography"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Base Stock Uom"}
                        aliasName={"BaseStockUomHeading"}
                        style={qdmstyles.oSuh}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"6RLAx"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                      lg={"12"}
                      md={"12"}
                      xl={"12"}
                      xs={"12"}
                      sm={"12"}
                      style={qdmstyles.RLAx}
                    >
                      <Autocomplete
                        id={"uOsIE"}
                        style={qdmstyles?.uOsIE}
                        value={this.state?.unitofmeasure_uosie ?? null}
                        onLoad={() =>
                          this.setState({
                            unitofmeasure_uosie:
                              this.state?.unitofmeasure_uosie ?? null,
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
                    id={"kbI7d"}
                    container={true}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    item={true}
                    lg={"2"}
                    md={"2"}
                    sm={"2"}
                    xl={"2"}
                    xs={"2"}
                    style={qdmstyles.qejKM}
                  >
                    <Grid
                      key={"0"}
                      id={"Z4gyu"}
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
                      style={qdmstyles.lr}
                    >
                      <Typography
                        key={"0"}
                        id={"AverageRateHeading_Typography"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Average Rate"}
                        aliasName={"AverageRateHeading"}
                        style={qdmstyles.BVYjg}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"6RLAx"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                      lg={"12"}
                      md={"12"}
                      xl={"12"}
                      xs={"12"}
                      sm={"12"}
                      style={qdmstyles.YMHV}
                    >
                      <TextField
                        key={"0"}
                        id={"AverageRateHeading_Typography"}
                        label={""}
                        placeholder={""}
                        type={"text"}
                        variant={"outlined"}
                        size={"small"}
                        aliasName={"AverageRateInput"}
                        fullWidth={true}
                        style={qdmstyles.rto}
                      ></TextField>
                    </Grid>
                  </Grid>
                  <Grid
                    key={"2"}
                    id={"kbI7d"}
                    container={true}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    item={true}
                    lg={"2"}
                    md={"2"}
                    sm={"2"}
                    xl={"2"}
                    xs={"2"}
                    style={qdmstyles.Nghj}
                  >
                    <Grid
                      key={"0"}
                      id={"Z4gyu"}
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
                      style={qdmstyles.RUmj}
                    >
                      <Typography
                        key={"0"}
                        id={"stockValueHeading_Typography"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Stock Value"}
                        aliasName={"stockValueHeading"}
                        style={qdmstyles.DQgi}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"6RLAx"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                      lg={"12"}
                      md={"12"}
                      xl={"12"}
                      xs={"12"}
                      sm={"12"}
                      style={qdmstyles.VsvJY}
                    >
                      <TextField
                        key={"0"}
                        id={"stockValue_Texfield"}
                        label={""}
                        placeholder={""}
                        type={"text"}
                        variant={"outlined"}
                        size={"small"}
                        aliasName={"stockValueInput"}
                        fullWidth={true}
                        style={qdmstyles.YCTjy}
                      ></TextField>
                    </Grid>
                  </Grid>
                  <Grid
                    key={"3"}
                    id={"kbI7d"}
                    container={true}
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    item={true}
                    lg={"2"}
                    md={"2"}
                    sm={"2"}
                    xl={"2"}
                    xs={"2"}
                    style={qdmstyles.GqoF}
                  >
                    <Grid
                      key={"0"}
                      id={"rIaXw"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                    >
                      <Button
                        key={"0"}
                        id={"del6P"}
                        variant={"text"}
                        color={"primary"}
                        children={"View Stock details"}
                        size={"small"}
                        fullWidth={""}
                        style={qdmstyles.delP}
                      ></Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  key={"1"}
                  id={"JFrVn"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  item={true}
                  lg={"12"}
                >
                  <Box key={"0"} id={"EmTqx"} m={1} component={"div"}>
                    <Divider
                      key={"0"}
                      id={"ZMYao"}
                      variant={"fullWidth"}
                    ></Divider>
                  </Box>
                </Grid>
                <Grid
                  key={"2"}
                  id={"3MSlo"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                  item={true}
                >
                  <Grid
                    key={"0"}
                    id={"JFZRu"}
                    container={true}
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    item={true}
                    lg={"12"}
                    md={"12"}
                    sm={"12"}
                    xl={"12"}
                    xs={"12"}
                    style={qdmstyles.JFZRu}
                  >
                    <Grid
                      key={"0"}
                      id={"q4xYK"}
                      container={""}
                      direction={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      lg={"10"}
                      md={"10"}
                      sm={"10"}
                      xl={"10"}
                      xs={"10"}
                      item={true}
                    >
                      <Typography
                        key={"0"}
                        id={"gHOTR"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"APPLICABLE UOM"}
                        style={qdmstyles.gHOTR}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"Xxuio"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                      lg={"2"}
                      md={"2"}
                      sm={"2"}
                      xl={"2"}
                      xs={"2"}
                      style={qdmstyles.Xxuio}
                    >
                      <Button
                        key={"0"}
                        id={"9SHjf"}
                        variant={"text"}
                        color={"primary"}
                        children={"+ Add New"}
                        style={qdmstyles.SHjf}
                      ></Button>
                    </Grid>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"7V2qa"}
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
                      id={"LUUaI"}
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
                      alignContent={"center"}
                    >
                      <Grid
                        key={"0"}
                        id={"0mTZK"}
                        container={true}
                        direction={"row"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        spacing={"2"}
                        lg={"12"}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                        style={qdmstyles.mTZK}
                      >
                        <Grid
                          key={"0"}
                          id={"empYV"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          item={true}
                          lg={"3"}
                          md={"3"}
                          sm={"3"}
                          xl={"3"}
                          xs={"3"}
                        >
                          <Typography
                            key={"0"}
                            id={"ApplicabilityHeading_Typography"}
                            align={"inherit"}
                            color={"initial"}
                            display={"initial"}
                            variant={"body1"}
                            children={"Applicability"}
                            aliasName={"ApplicabilityHeading"}
                            style={qdmstyles.YD}
                          ></Typography>
                        </Grid>
                        <Grid
                          key={"1"}
                          id={"empYV"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          item={true}
                          lg={"3"}
                          md={"3"}
                          sm={"3"}
                          xl={"3"}
                          xs={"3"}
                        >
                          <Typography
                            key={"0"}
                            id={"packuomHeading_Typography"}
                            align={"inherit"}
                            color={"initial"}
                            display={"initial"}
                            variant={"body1"}
                            children={"Pack Uom"}
                            aliasName={"packUomHeading"}
                            style={qdmstyles.guyBf}
                          ></Typography>
                        </Grid>
                        <Grid
                          key={"2"}
                          id={"empYV"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          item={true}
                          lg={1}
                          md={1}
                          sm={1}
                          xl={1}
                          xs={1}
                        >
                          <Typography
                            key={"0"}
                            id={"packSizeHeading_Typography"}
                            align={"inherit"}
                            color={"initial"}
                            display={"initial"}
                            variant={"body1"}
                            children={"Pack Size"}
                            aliasName={"packSizeHeading"}
                            style={qdmstyles.DZOaQ}
                          ></Typography>
                        </Grid>
                        <Grid
                          key={"3"}
                          id={"empYV"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          item={true}
                          lg={"3"}
                          md={"3"}
                          sm={"3"}
                          xl={"3"}
                          xs={"3"}
                        >
                          <Typography
                            key={"0"}
                            id={"PackUnitFormHeading_Typography"}
                            align={"inherit"}
                            color={"initial"}
                            display={"initial"}
                            variant={"body1"}
                            children={"Pack Unit Uom"}
                            aliasName={"PackUnitFormHeading"}
                            style={qdmstyles.DTpa}
                          ></Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"fVDRS"}
                        container={true}
                        direction={"row"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        spacing={"2"}
                        lg={"12"}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                      >
                        <Grid
                          key={"0"}
                          id={"empYV"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          item={true}
                          lg={"3"}
                          md={"3"}
                          sm={"3"}
                          xl={"3"}
                          xs={"3"}
                        >
                          <Autocomplete
                            id={"k1SYG"}
                            style={qdmstyles?.kSYG}
                            value={this.state?.unitofmeasure_k1syg ?? null}
                            onLoad={() =>
                              this.setState({
                                unitofmeasure_k1syg:
                                  this.state?.unitofmeasure_k1syg ?? null,
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
                          key={"1"}
                          id={"empYV"}
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
                        >
                          <Grid
                            key={"0"}
                            id={"empYV"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            lg={"10"}
                            md={"10"}
                            sm={"10"}
                            xl={"10"}
                            xs={"10"}
                          >
                            <Autocomplete
                              id={"ntWdx"}
                              style={qdmstyles?.ntWdx}
                              value={this.state?.unitofmeasure_ntwdx ?? null}
                              onLoad={() =>
                                this.setState({
                                  unitofmeasure_ntwdx:
                                    this.state?.unitofmeasure_ntwdx ?? null,
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
                            key={"1"}
                            id={"empYV"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            lg={"2"}
                            md={"2"}
                            sm={"2"}
                            xl={"2"}
                            xs={"2"}
                            style={qdmstyles.vVjko}
                          >
                            <Typography
                              key={"0"}
                              id={"ApplicabilityHeading_Typography"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"of"}
                              aliasName={"packUomOf3_Typography"}
                              style={qdmstyles.pPYs}
                            ></Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          key={"2"}
                          id={"empYV"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          item={true}
                          lg={1}
                          md={1}
                          sm={1}
                          xl={1}
                          xs={1}
                        >
                          <TextField
                            key={"0"}
                            id={"packSizeinput4_textfield"}
                            label={""}
                            placeholder={""}
                            type={"text"}
                            variant={"outlined"}
                            size={"small"}
                            fullWidth={true}
                            aliasName={"packSizeinput4"}
                            style={qdmstyles.aML}
                          ></TextField>
                        </Grid>
                        <Grid
                          key={"3"}
                          id={"empYV"}
                          container={true}
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                          item={true}
                          lg={"3"}
                          md={"3"}
                          sm={"3"}
                          xl={"3"}
                          xs={"3"}
                        >
                          <Grid
                            key={"0"}
                            id={"empYV"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            lg={"10"}
                            md={"10"}
                            sm={"10"}
                            xl={"10"}
                            xs={"10"}
                          >
                            <Autocomplete
                              id={"67zjV"}
                              style={qdmstyles?.zjV}
                              value={this.state?.unitofmeasure_67zjv ?? null}
                              onLoad={() =>
                                this.setState({
                                  unitofmeasure_67zjv:
                                    this.state?.unitofmeasure_67zjv ?? null,
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
                            key={"1"}
                            id={"empYV"}
                            container={""}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            item={true}
                            lg={"2"}
                            md={1}
                            sm={1}
                            xl={1}
                            xs={1}
                            style={qdmstyles.wND}
                          >
                            <Avatar
                              key={"0"}
                              id={"delete_icon4"}
                              alt={"Avatar"}
                              variant={"rounded"}
                              src={
                                "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/317182133"
                              }
                              aliasName={"deleteicon4"}
                              style={qdmstyles.lqqbx}
                            ></Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
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
)(withRouter(translate()(Unitofmeasure)));
