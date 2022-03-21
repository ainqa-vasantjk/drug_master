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
  Button,
  TextField,
  Avatar,
} from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Synonymdrugmaster extends React.Component {
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
              id={"OXKhr"}
              container={""}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              item={true}
            >
              <Paper
                key={"0"}
                id={"2CyVg"}
                elevation={"{3}"}
                style={qdmstyles.CyVg}
              >
                <Grid
                  key={"0"}
                  id={"TgstR"}
                  container={true}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  lg={"12"}
                  item={true}
                  xl={"12"}
                  xs={"12"}
                  sm={"12"}
                  md={"12"}
                  style={qdmstyles.TgstR}
                >
                  <Grid
                    key={"0"}
                    id={"TgstR"}
                    container={""}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    item={true}
                    lg={"5"}
                    md={"10"}
                    sm={"6"}
                    xl={"6"}
                    xs={"6"}
                  >
                    <Typography
                      key={"0"}
                      id={"SynonymHeading_Typography"}
                      align={"left"}
                      color={"initial"}
                      display={"initial"}
                      variant={"body1"}
                      children={"SYNONYM"}
                      aliasName={"SynonymHeading"}
                      style={qdmstyles.VyJYV}
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
                    lg={"2"}
                    md={"2"}
                    sm={"2"}
                    xl={"2"}
                    xs={"2"}
                    style={qdmstyles.ZvWi}
                  >
                    <Button
                      key={"0"}
                      id={"SynonymAddnewbutton_Button"}
                      variant={"text"}
                      color={"primary"}
                      children={"+ Add New"}
                      aliasName={"SynonymAddnewbutton"}
                      style={qdmstyles.AZcgH}
                    ></Button>
                  </Grid>
                </Grid>
                <Grid
                  key={"1"}
                  id={"0PNTj"}
                  container={true}
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  item={true}
                  wrap={"wrap"}
                  spacing={""}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                >
                  <Grid
                    key={"0"}
                    id={"7uXWP"}
                    container={true}
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"baseline"}
                    lg={"12"}
                    item={true}
                    md={"12"}
                    sm={"12"}
                    xl={"12"}
                    xs={"12"}
                  >
                    <Grid
                      key={"0"}
                      id={"kOGE4"}
                      container={""}
                      direction={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                      lg={"2"}
                      wrap={"wrap"}
                      spacing={""}
                      md={"3"}
                      sm={"6"}
                      xl={"2"}
                      xs={"6"}
                      style={qdmstyles.kOGE}
                    >
                      <Grid
                        key={"0"}
                        id={"AF287"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        style={qdmstyles.AF}
                      >
                        <Typography
                          key={"0"}
                          id={"synonymTypeHeading_Typography"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"Synonym Type"}
                          aliasName={"synonymTypeHeading"}
                          style={qdmstyles.ZqL}
                        ></Typography>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"AF287"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"12"}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                        style={qdmstyles.uTZJ}
                      >
                        <Autocomplete
                          id={"exZhK"}
                          style={qdmstyles?.exZhK}
                          value={this.state?.synonymdrugmaster_exzhk ?? null}
                          onLoad={() =>
                            this.setState({
                              synonymdrugmaster_exzhk:
                                this.state?.synonymdrugmaster_exzhk ?? null,
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
                        id={"AF287"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"12"}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                        style={qdmstyles.dmzRT}
                      >
                        <Autocomplete
                          id={"xreGw"}
                          style={qdmstyles?.xreGw}
                          value={this.state?.synonymdrugmaster_xregw ?? null}
                          onLoad={() =>
                            this.setState({
                              synonymdrugmaster_xregw:
                                this.state?.synonymdrugmaster_xregw ?? null,
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
                      id={"kOGE4"}
                      container={""}
                      direction={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                      lg={"2"}
                      wrap={"wrap"}
                      md={"3"}
                      sm={"6"}
                      xl={"2"}
                      xs={"6"}
                      style={qdmstyles.rUzcN}
                    >
                      <Grid
                        key={"0"}
                        id={"AF287"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        style={qdmstyles.QbKku}
                      >
                        <Typography
                          key={"0"}
                          id={"NameHeading_Typography"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"Name"}
                          aliasName={"NameHeading"}
                          style={qdmstyles.GDaJy}
                        ></Typography>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"NameAutocomplete1_autocomplete"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"12"}
                        aliasName={"NameAutocomplete1"}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                        style={qdmstyles.uZbyS}
                      >
                        <Autocomplete
                          id={"KhxnY"}
                          style={qdmstyles?.KhxnY}
                          value={this.state?.synonymdrugmaster_khxny ?? null}
                          onLoad={() =>
                            this.setState({
                              synonymdrugmaster_khxny:
                                this.state?.synonymdrugmaster_khxny ?? null,
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
                        id={"AF287"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"12"}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                        style={qdmstyles.XV}
                      >
                        <Autocomplete
                          id={"3JIMp"}
                          style={qdmstyles?.JIMp}
                          value={this.state?.synonymdrugmaster_3jimp ?? null}
                          onLoad={() =>
                            this.setState({
                              synonymdrugmaster_3jimp:
                                this.state?.synonymdrugmaster_3jimp ?? null,
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
                      id={"kOGE4"}
                      container={""}
                      direction={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                      lg={"3"}
                      wrap={"wrap"}
                      md={"6"}
                      sm={"5"}
                      xl={"3"}
                      xs={"5"}
                      style={qdmstyles.yIgU}
                    >
                      <Grid
                        key={"0"}
                        id={"AF287"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        style={qdmstyles.gepa}
                      >
                        <Typography
                          key={"0"}
                          id={"ShortdescriptionHeading_Typography"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"Short Description"}
                          aliasName={"ShortdescriptionHeading"}
                          style={qdmstyles.lPvY}
                        ></Typography>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"AF287"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"12"}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                        style={qdmstyles.yas}
                      >
                        <TextField
                          key={"0"}
                          id={"short_description_value1"}
                          label={""}
                          placeholder={""}
                          type={"text"}
                          variant={"outlined"}
                          size={"small"}
                          fullWidth={true}
                          margin={"none"}
                          aliasName={"shortdescriptionvalue1"}
                        ></TextField>
                      </Grid>
                      <Grid
                        key={"2"}
                        id={"AF287"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"12"}
                        xl={"12"}
                        xs={"12"}
                        sm={"12"}
                        md={"12"}
                        style={qdmstyles.HcGYc}
                      >
                        <TextField
                          key={"0"}
                          id={"short_description_value2"}
                          label={""}
                          placeholder={""}
                          type={"text"}
                          variant={"outlined"}
                          size={"small"}
                          fullWidth={true}
                          margin={"none"}
                          aliasName={"shortdescriptionvalue2"}
                        ></TextField>
                      </Grid>
                    </Grid>
                    <Grid
                      key={"3"}
                      id={"kOGE4"}
                      container={true}
                      direction={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"flex-end"}
                      item={true}
                      lg={"5"}
                      wrap={"wrap"}
                      md={"5"}
                      sm={"7"}
                      xl={"5"}
                      xs={"7"}
                      style={qdmstyles.Meo}
                    >
                      <Grid
                        key={"0"}
                        id={"AF287"}
                        container={""}
                        direction={"row"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        lg={"12"}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                        item={true}
                        style={qdmstyles.uRuUF}
                      >
                        <Typography
                          key={"0"}
                          id={"long_desctipition_header"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"Long Description"}
                          aliasName={"longdesctipitionheader"}
                          style={qdmstyles.EjcLc}
                        ></Typography>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"O6AJB"}
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
                        style={qdmstyles.OAJB}
                      >
                        <Grid
                          key={"0"}
                          id={"b0OQd"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          lg={"11"}
                          item={true}
                          md={"11"}
                          sm={"11"}
                          xl={"11"}
                          xs={"11"}
                        >
                          <TextField
                            key={"0"}
                            id={"long_description_value1"}
                            label={""}
                            placeholder={""}
                            type={"text"}
                            variant={"outlined"}
                            fullWidth={true}
                            size={"small"}
                            margin={"none"}
                            aliasName={"longdescriptionvalue1"}
                          ></TextField>
                        </Grid>
                        <Grid
                          key={"1"}
                          id={"yxZOY"}
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
                          style={qdmstyles.cn}
                        >
                          <Avatar
                            key={"0"}
                            id={"Pdc7J"}
                            alt={"Avatar"}
                            variant={"rounded"}
                            src={
                              "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/317182133"
                            }
                            style={qdmstyles.QAgoh}
                          ></Avatar>
                        </Grid>
                      </Grid>
                      <Grid
                        key={"2"}
                        id={"O6AJB"}
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
                        style={qdmstyles.IBql}
                      >
                        <Grid
                          key={"0"}
                          id={"b0OQd"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          lg={"11"}
                          item={true}
                          md={"11"}
                          sm={"11"}
                          xl={"11"}
                          xs={"11"}
                        >
                          <TextField
                            key={"0"}
                            id={"long_description_value2"}
                            label={""}
                            placeholder={""}
                            type={"text"}
                            variant={"outlined"}
                            size={"small"}
                            fullWidth={true}
                            margin={"none"}
                            aliasName={"long_description_value2"}
                          ></TextField>
                        </Grid>
                        <Grid
                          key={"1"}
                          id={"yxZOY"}
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
                          style={qdmstyles.GPWbh}
                        >
                          <Avatar
                            key={"0"}
                            id={"Pdc7J"}
                            alt={"Avatar"}
                            variant={"rounded"}
                            src={
                              "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/317182133"
                            }
                            style={qdmstyles.eVBI}
                          ></Avatar>
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
)(withRouter(translate()(Synonymdrugmaster)));
