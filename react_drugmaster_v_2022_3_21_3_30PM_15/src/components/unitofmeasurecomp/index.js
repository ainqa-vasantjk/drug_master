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

function Unitofmeasurecomp(props) {
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
              style={qdmstyles.LtO}
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
                style={qdmstyles.LuLpj}
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
                  style={qdmstyles.gJkJ}
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
                    style={qdmstyles.jJJ}
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
                      style={qdmstyles.AzVx}
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
                    style={qdmstyles.FSP}
                  >
                    <Autocomplete
                      id={"sZ944"}
                      style={qdmstyles?.sZ}
                      value={state?.unitofmeasurecomp_sz944 ?? null}
                      onLoad={() =>
                        setState({
                          unitofmeasurecomp_sz944:
                            state?.unitofmeasurecomp_sz944 ?? null,
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
                  style={qdmstyles.KQxxG}
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
                    style={qdmstyles.fjGmM}
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
                      style={qdmstyles.KGm}
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
                    style={qdmstyles.hiPuT}
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
                      // style={qdmstyles.FxFNF}
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
                  style={qdmstyles.husub}
                >
                  <Grid
                    key={"0"}
                    id={"stock_header"}
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
                    aliasName={"stockheader"}
                    style={qdmstyles.DtBT}
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
                      style={qdmstyles.CIdGZ}
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
                    style={qdmstyles.ss}
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
                      // style={qdmstyles.WvQI}
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
                  sm={"3"}
                  xl={"2"}
                  xs={"3"}
                  style={qdmstyles.GSZZ}
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
                      id={"view_stock_details_button"}
                      variant={"text"}
                      color={"primary"}
                      children={"View Stock details"}
                      size={"small"}
                      fullWidth={""}
                      aliasName={"viewstockdetailsbutton"}
                      style={qdmstyles.HOlsc}
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
                  style={qdmstyles.NrEq}
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
                      style={qdmstyles.BguM}
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
                    style={qdmstyles.KZPj}
                  >
                    <Button
                      key={"0"}
                      id={"applicable_uom_add_new_button"}
                      variant={"text"}
                      color={"primary"}
                      children={"+ Add New"}
                      aliasName={"applicableuomaddnewbutton"}
                      style={qdmstyles.ARHq}
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
                      style={qdmstyles.sWsdd}
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
                          style={qdmstyles.WFauo}
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
                          style={qdmstyles.usxT}
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
                          style={qdmstyles.hvwxy}
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
                          style={qdmstyles.YeGM}
                        ></Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"fVDRS"}
                      container={true}
                      direction={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"flex-start"}
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
                          id={"OqVny"}
                          style={qdmstyles?.OqVny}
                          value={state?.unitofmeasurecomp_oqvny ?? null}
                          onLoad={() =>
                            setState({
                              unitofmeasurecomp_oqvny:
                                state?.unitofmeasurecomp_oqvny ?? null,
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
                            id={"lSown"}
                            style={qdmstyles?.lSown}
                            value={state?.unitofmeasurecomp_lsown ?? null}
                            onLoad={() =>
                              setState({
                                unitofmeasurecomp_lsown:
                                  state?.unitofmeasurecomp_lsown ?? null,
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
                          style={qdmstyles.XQf}
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
                            style={qdmstyles.NrhHN}
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
                          style={qdmstyles.PWtn}
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
                            id={"qqCiC"}
                            style={qdmstyles?.qqCiC}
                            value={state?.unitofmeasurecomp_qqcic ?? null}
                            onLoad={() =>
                              setState({
                                unitofmeasurecomp_qqcic:
                                  state?.unitofmeasurecomp_qqcic ?? null,
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
                          style={qdmstyles.VFi}
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
                            style={qdmstyles.CiRc}
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

export default withRouter(translate()(Unitofmeasurecomp));
