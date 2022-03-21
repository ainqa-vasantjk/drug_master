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

function Aliasmapping(props) {
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
            id={"76GZv"}
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
            <Paper
              key={"0"}
              id={"fxDUL"}
              elevation={"{3}"}
              style={qdmstyles.fxDUL}
            >
              <Grid
                key={"0"}
                id={"OXKhr"}
                container={true}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                item={""}
              >
                <Grid
                  key={"0"}
                  id={"TgstR"}
                  container={true}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  lg={"auto"}
                  style={qdmstyles.MPnbh}
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
                    md={"6"}
                    sm={"6"}
                    xl={"6"}
                    xs={"6"}
                  >
                    <Typography
                      key={"0"}
                      id={"aliasmapping_Typography"}
                      align={"left"}
                      color={"initial"}
                      display={"initial"}
                      variant={"body1"}
                      children={"ALIAS MAPPING"}
                      aliasName={"aliasmappingTypography"}
                      style={qdmstyles.wNJQ}
                    ></Typography>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"AliasmappingAddNewButton_button"}
                    container={""}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    item={true}
                    aliasName={"AliasmappingAddNewButton"}
                    lg={"6"}
                    md={"6"}
                    sm={"6"}
                    xl={"6"}
                    xs={"6"}
                    style={qdmstyles.lkNih}
                  >
                    <Button
                      key={"0"}
                      id={"AZcgH"}
                      variant={"text"}
                      color={"primary"}
                      children={"+ Add New"}
                      style={qdmstyles.GzXUX}
                    ></Button>
                  </Grid>
                </Grid>
                <Grid
                  key={"1"}
                  id={"7uXWP"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
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
                    spacing={"2"}
                    md={"2"}
                    sm={"2"}
                    xl={"2"}
                    xs={"2"}
                    style={qdmstyles.jbIu}
                  >
                    <Grid
                      key={"0"}
                      id={"AF287"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      style={qdmstyles.xfab}
                    >
                      <Typography
                        key={"0"}
                        id={"sourceHeading_Typography"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Source"}
                        aliasName={"sourceHeading"}
                        style={qdmstyles.LftfF}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"source_grid1"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"12"}
                      aliasName={"sourcegrid1"}
                      md={"12"}
                      sm={"12"}
                      xl={"12"}
                      xs={"12"}
                      style={qdmstyles.rSowq}
                    >
                      <Autocomplete
                        id={"80ev9"}
                        style={qdmstyles?.ev}
                        value={state?.aliasmapping_80ev9 ?? null}
                        onLoad={() =>
                          setState({
                            aliasmapping_80ev9:
                              state?.aliasmapping_80ev9 ?? null,
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
                      id={"source_autocomlete2"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"12"}
                      aliasName={"sourceautocomlete2"}
                      md={"12"}
                      sm={"12"}
                      xl={"12"}
                      xs={"12"}
                      style={qdmstyles.upXX}
                    >
                      <Autocomplete
                        id={"NynjB"}
                        style={qdmstyles?.NynjB}
                        value={state?.aliasmapping_nynjb ?? null}
                        onLoad={() =>
                          setState({
                            aliasmapping_nynjb:
                              state?.aliasmapping_nynjb ?? null,
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
                    lg={"3"}
                    wrap={"wrap"}
                    md={"3"}
                    sm={"3"}
                    xl={"3"}
                    xs={"3"}
                    style={qdmstyles.gsAds}
                  >
                    <Grid
                      key={"0"}
                      id={"AF287"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      style={qdmstyles.IBzI}
                    >
                      <Typography
                        key={"0"}
                        id={"codeHeading_Typography"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Code"}
                        aliasName={"codeHeading"}
                        style={qdmstyles.sei}
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
                      style={qdmstyles.oiY}
                    >
                      <TextField
                        key={"0"}
                        id={"code_autocomplete"}
                        label={""}
                        placeholder={""}
                        type={"text"}
                        variant={"outlined"}
                        size={"small"}
                        fullWidth={true}
                        aliasName={"codeAutocomplete"}
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
                      style={qdmstyles.QoGz}
                    >
                      <TextField
                        key={"0"}
                        id={"code_autocomplete2"}
                        label={""}
                        placeholder={""}
                        type={"text"}
                        variant={"outlined"}
                        size={"small"}
                        fullWidth={true}
                        aliasName={"codeAutomplete2"}
                      ></TextField>
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
                    lg={"7"}
                    wrap={"wrap"}
                    md={"7"}
                    sm={"7"}
                    xl={"7"}
                    xs={"7"}
                    style={qdmstyles.WUsW}
                  >
                    <Grid
                      key={"0"}
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
                      style={qdmstyles.grTZd}
                    >
                      <Typography
                        key={"0"}
                        id={"Description_Typography"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Description"}
                        aliasName={"DescriptionTypography"}
                        style={qdmstyles.wymZt}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"AF287"}
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
                      style={qdmstyles.SiuS}
                    >
                      <Grid
                        key={"0"}
                        id={"Of3cn"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"10"}
                        item={true}
                        md={"10"}
                        sm={"10"}
                        xl={"10"}
                        xs={"10"}
                      >
                        <TextField
                          key={"0"}
                          id={"description_textfield1"}
                          label={""}
                          placeholder={""}
                          type={"text"}
                          size={"small"}
                          variant={"outlined"}
                          fullWidth={true}
                          aliasName={"descriptiontextfield1"}
                        ></TextField>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"0Gaj5"}
                        container={true}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"2"}
                        md={"2"}
                        sm={"2"}
                        xl={"2"}
                        xs={"2"}
                      >
                        <Avatar
                          key={"0"}
                          id={"Pdc7J"}
                          alt={"Avatar"}
                          variant={"rounded"}
                          src={
                            "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/317182133"
                          }
                          style={qdmstyles.KeNv}
                        ></Avatar>
                      </Grid>
                    </Grid>
                    <Grid
                      key={"2"}
                      id={"AF287"}
                      container={true}
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      lg={"12"}
                      item={true}
                      md={"12"}
                      sm={"12"}
                      xl={"12"}
                      xs={"12"}
                      style={qdmstyles.cGWRH}
                    >
                      <Grid
                        key={"0"}
                        id={"J6qoC"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"10"}
                        item={true}
                        xs={"10"}
                        xl={"10"}
                        md={"10"}
                        sm={"10"}
                      >
                        <TextField
                          key={"0"}
                          id={"description_textfield2"}
                          label={""}
                          placeholder={""}
                          type={"text"}
                          variant={"outlined"}
                          size={"small"}
                          fullWidth={true}
                          aliasName={"descriptiontextfield2"}
                        ></TextField>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"UZMj1"}
                        container={true}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"2"}
                        md={"2"}
                        sm={"2"}
                        xl={"2"}
                        xs={"2"}
                      >
                        <Avatar
                          key={"0"}
                          id={"Pdc7J"}
                          alt={"Avatar"}
                          variant={"rounded"}
                          src={
                            "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/317182133"
                          }
                          style={qdmstyles.lI}
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

export default withRouter(translate()(Aliasmapping));
