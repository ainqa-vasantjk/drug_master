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
import { makeStyles } from "@material-ui/core";
import * as ALL from "../../components";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Modal,
  Avatar,
  Divider,
} from "@material-ui/core";
import { CustRowTable } from "custom-material-ui-component";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    outline: 0,
  },
}));
function Availablestrengthtabcomp(props) {
  const dispatch = useDispatch();

  const contextType = React.useContext(LoggerContext);
  const [state, setState] = React.useState({
    permissionData: null,
    showavailableStrengthmodal: false,
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
  const handlemodalclose = () => {
    setState({ showavailableStrengthmodal: false });
  };
  React.useEffect(() => {}, [state]);

  const { data, index } = props;
  const classes = useStyles();
  return (
    <NamespacesConsumer>
      {(t, { i18n }) => (
        <React.Fragment>
          <Grid
            key={"0"}
            id={"wXq4l"}
            container={true}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            lg={"12"}
            md={"12"}
            sm={"12"}
            xl={"12"}
            xs={"12"}
          >
            <Grid
              key={"0"}
              id={"jMabS"}
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
                id={"WXw2c"}
                elevation={"{3}"}
                style={qdmstyles.LKdSH}
              >
                <Grid
                  key={"0"}
                  id={"cDHn4"}
                  container={true}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                  style={{ margin: "17px 0 9px 0" }}
                >
                  <Grid
                    key={"0"}
                    id={"nP1ez"}
                    container={""}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    lg={"6"}
                    item={true}
                    md={"6"}
                    sm={"6"}
                    xl={"6"}
                    xs={"6"}
                  >
                    <Typography
                      key={"0"}
                      id={"list_of_available_strengths_header"}
                      align={"inherit"}
                      color={"initial"}
                      display={"initial"}
                      variant={"body1"}
                      children={"LIST OF AVAILABLE STRENGTHS"}
                      aliasName={"listofavailablestrengthsheader"}
                      style={qdmstyles.nyjDP}
                    ></Typography>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"anTxp"}
                    container={""}
                    direction={"row"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    lg={"2"}
                    md={"2"}
                    sm={"2"}
                    xl={"2"}
                    xs={"2"}
                    style={qdmstyles.QdpTU}
                  >
                    <Button
                      key={"0"}
                      onClick={() =>
                        setState({ showavailableStrengthmodal: true })
                      }
                      id={"available_strength_add_new_button"}
                      variant={"text"}
                      color={"primary"}
                      children={"+ Add New"}
                      aliasName={"availablestrengthaddnewbutton"}
                      style={qdmstyles.clx}
                    ></Button>
                  </Grid>
                </Grid>
                <Grid
                  key={"1"}
                  id={"FUAms"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                >
                  <Grid
                    key={"0"}
                    id={"VMPVS"}
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
                    <CustRowTable
                      key={"0"}
                      id={"iUGPb"}
                      HeaderComp={
                        <ALL.Availablestrengthtableheader
                          propsState={state}
                          setFun={(value) => {
                            changeState("Availablestrengthtableheader", value);
                          }}
                          stateName={"Availablestrengthtableheader"}
                          statevalue={state?.Availablestrengthtableheader}
                        />
                      }
                      BodyComp={
                        <ALL.Availablestrengthtablevalue
                          propsState={state}
                          setFun={(value) => {
                            changeState("Availablestrengthtablevalue", value);
                          }}
                          stateName={"Availablestrengthtablevalue"}
                          statevalue={state?.Availablestrengthtablevalue}
                        />
                      }
                    ></CustRowTable>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <>
            <Modal
              open={state.showavailableStrengthmodal}
              className={classes.modal}
              onClose={() => handlemodalclose()}
            >
              <Grid
                className={classes.grid}
                key={"0"}
                id={"Z6EBo"}
                container={true}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                lg={"4"}
                md={"6"}
                sm={"8"}
                xl={"4"}
                xs={"8"}
              >
                <Grid
                  key={"0"}
                  id={"Z9Hs0"}
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
                    id={"pCtsN"}
                    elevation={"{3}"}
                    style={qdmstyles.wQg}
                  >
                    <Grid
                      key={"0"}
                      id={"p9FEL"}
                      container={true}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"12"}
                      md={"12"}
                      sm={"12"}
                      xl={"12"}
                      xs={"12"}
                    >
                      <Grid
                        key={"0"}
                        id={"Y6MRQ"}
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
                        style={qdmstyles.TnP}
                      >
                        <Grid
                          key={"0"}
                          id={"Z8H2H"}
                          container={true}
                          direction={"row"}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                          lg={"7"}
                          md={"7"}
                          sm={"7"}
                          xl={"7"}
                          xs={"7"}
                        >
                          <Typography
                            key={"0"}
                            id={"6qn9l"}
                            align={"inherit"}
                            color={"initial"}
                            display={"initial"}
                            variant={"body1"}
                            children={"AVAILABLE STRENGTH"}
                            style={qdmstyles.Orf}
                          ></Typography>
                        </Grid>
                        <Grid
                          key={"1"}
                          id={"5WDf9"}
                          container={""}
                          direction={"row"}
                          justifyContent={"flex-end"}
                          alignItems={"center"}
                          lg={"2"}
                          md={"2"}
                          sm={"2"}
                          xl={"2"}
                          xs={"2"}
                          style={qdmstyles.IVzt}
                        >
                          <Paper
                            elevation={false}
                            style={{
                              width: "26px",
                              height: "26px",
                              borderRadius: "50%",
                              backgroundColor: "#E5E8EE",
                              display: "grid",
                              cursor: "pointer",
                            }}
                            onClick={() => handlemodalclose()}
                          >
                            <CloseRoundedIcon
                              fontSize="small"
                              style={{ placeSelf: "center" }}
                            />
                          </Paper>
                          {/* <Avatar
                              key={"0"}
                              id={"csnok"}
                              alt={"Avatar"}
                              variant={"rounded"}
                              style={qdmstyles.Njo}
                            ></Avatar> */}
                        </Grid>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"PLePk"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"12"}
                        item={true}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                        style={qdmstyles.lcX}
                      >
                        <Divider
                          key={"0"}
                          id={"u6B8U"}
                          variant={"fullWidth"}
                          flexItem={""}
                          style={{ margin: "none" }}
                        ></Divider>
                      </Grid>
                      <Grid
                        key={"2"}
                        id={"T7xTu"}
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
                        style={qdmstyles.taeFY}
                      >
                        <Grid
                          key={"0"}
                          id={"oEUGh"}
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
                        >
                          <Grid
                            key={"0"}
                            id={"pYP7X"}
                            container={true}
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            lg={"12"}
                            item={true}
                            style={{ margin: "8px 24px" }}
                          >
                            <Grid
                              key={"0"}
                              id={"S5mqN"}
                              container={true}
                              direction={"row"}
                              justifyContent={"flex-start"}
                              alignItems={"center"}
                              lg={"5"}
                              md={"5"}
                              sm={"5"}
                              xl={"5"}
                              xs={"5"}
                            >
                              <Typography
                                key={"0"}
                                id={"U5nAb"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={"Strength Value"}
                                style={qdmstyles.WQVX}
                              ></Typography>
                            </Grid>
                            <Grid
                              key={"1"}
                              id={"w8Av4"}
                              container={true}
                              direction={"row"}
                              justifyContent={"flex-start"}
                              alignItems={"center"}
                              lg={"5"}
                              xl={"5"}
                              md={"5"}
                              sm={"5"}
                              xs={"5"}
                            >
                              <Typography
                                key={"0"}
                                id={"GFYVy"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={"Strength Volume"}
                                style={qdmstyles.TIjFl}
                              ></Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"4eEz8"}
                            container={true}
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            lg={"12"}
                            md={"12"}
                            sm={"12"}
                            xl={"12"}
                            xs={"12"}
                            item={true}
                            style={qdmstyles.qvoK}
                          >
                            <Grid
                              key={"0"}
                              id={"0yFDe"}
                              container={""}
                              direction={"row"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              item={true}
                              lg={"5"}
                              xl={"5"}
                              md={"5"}
                              sm={"5"}
                              xs={"5"}
                            >
                              <ALL.Availabletabcomp />
                            </Grid>
                            <Grid
                              key={"1"}
                              id={"XLXZi"}
                              container={""}
                              direction={"row"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              lg={"2"}
                              item={true}
                              md={"2"}
                              sm={"2"}
                              xl={"2"}
                              xs={"2"}
                              style={qdmstyles.ZeueI}
                            >
                              <Typography
                                key={"0"}
                                id={"JMvWO"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={" /"}
                                style={qdmstyles.PZDnf}
                              ></Typography>
                            </Grid>
                            <Grid
                              key={"2"}
                              id={"xTaHq"}
                              container={""}
                              direction={"row"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              lg={"5"}
                              item={true}
                              md={"5"}
                              sm={"5"}
                              xl={"5"}
                              xs={"5"}
                            >
                              <ALL.Availabletabcomp />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        key={"3"}
                        id={"luzoZ"}
                        container={true}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        style={qdmstyles.luzoZ}
                      >
                        <Grid
                          key={"0"}
                          id={"tYC2u"}
                          container={true}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          style={{ margin: "8px 24px" }}
                        >
                          <Grid
                            key={"0"}
                            id={"0QRuq"}
                            container={true}
                            direction={"row"}
                            justifyContent={"flex-start"}
                            alignItems={"center"}
                            lg={"6"}
                            md="6"
                            sm="6"
                            xs="6"
                            xl="6"
                          >
                            <Typography
                              key={"0"}
                              id={"KzFlK"}
                              align={"inherit"}
                              color={"initial"}
                              display={"initial"}
                              variant={"body1"}
                              children={"Allowed For Order"}
                              style={qdmstyles.KzFlK}
                            ></Typography>
                          </Grid>
                          <Grid
                            key={"1"}
                            id={"InxOQ"}
                            container={true}
                            direction={"row"}
                            justifyContent={"flex-end"}
                            alignItems={"center"}
                            lg={"6"}
                            md="6"
                            sm="6"
                            xs="6"
                            xl="6"
                          >
                            <Button
                              key={"0"}
                              id={"CJQXn"}
                              variant={"text"}
                              color={"primary"}
                              children={"+ Add New"}
                              style={qdmstyles.CJQXn}
                            ></Button>
                          </Grid>
                        </Grid>
                        <Grid
                          key={"1"}
                          id={"PLePk"}
                          container={""}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          lg={"12"}
                          item={true}
                          md={"12"}
                          sm={"12"}
                          xl={"12"}
                          xs={"12"}
                          style={qdmstyles.BaD}
                        >
                          <Divider
                            key={"0"}
                            id={"u6B8U"}
                            variant={"fullWidth"}
                            flexItem={""}
                          ></Divider>
                        </Grid>
                        <Grid
                          key={"2"}
                          id={"T7xTu"}
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
                          style={qdmstyles.TMwJV}
                        >
                          <Grid
                            key={"0"}
                            id={"oEUGh"}
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
                          >
                            <Grid
                              key={"0"}
                              id={"pYP7X"}
                              container={true}
                              direction={"row"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              lg={"12"}
                              item={true}
                              style={{ margin: "8px 24px" }}
                            >
                              <Grid
                                key={"0"}
                                id={"S5mqN"}
                                container={true}
                                direction={"row"}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                lg={"5"}
                                md={"5"}
                                sm={"5"}
                                xl={"5"}
                                xs={"5"}
                              >
                                <Typography
                                  key={"0"}
                                  id={"U5nAb"}
                                  align={"inherit"}
                                  color={"initial"}
                                  display={"initial"}
                                  variant={"body1"}
                                  children={"Allowed Value"}
                                  style={qdmstyles.xgTso}
                                ></Typography>
                              </Grid>
                              <Grid
                                key={"1"}
                                id={"w8Av4"}
                                container={true}
                                direction={"row"}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                lg={"5"}
                                xl={"5"}
                                md={"5"}
                                sm={"5"}
                                xs={"5"}
                              >
                                <Typography
                                  key={"0"}
                                  id={"GFYVy"}
                                  align={"inherit"}
                                  color={"initial"}
                                  display={"initial"}
                                  variant={"body1"}
                                  children={"Allowed Volume"}
                                  style={qdmstyles.cruD}
                                ></Typography>
                              </Grid>
                            </Grid>
                            <Grid
                              key={"1"}
                              id={"4eEz8"}
                              container={true}
                              direction={"row"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              lg={"12"}
                              md={"12"}
                              sm={"12"}
                              xl={"12"}
                              xs={"12"}
                              item={true}
                              style={qdmstyles.WjqH}
                            >
                              <Grid
                                key={"0"}
                                id={"0yFDe"}
                                container={""}
                                direction={"row"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                item={true}
                                lg={"5"}
                                xl={"5"}
                                md={"5"}
                                sm={"5"}
                                xs={"5"}
                              >
                                <ALL.Availabletabcomp />
                              </Grid>
                              <Grid
                                key={"1"}
                                id={"XLXZi"}
                                container={""}
                                direction={"row"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                lg={"2"}
                                item={true}
                                md={"2"}
                                sm={"2"}
                                xl={"2"}
                                xs={"2"}
                                style={qdmstyles.GXq}
                              >
                                <Typography
                                  key={"0"}
                                  id={"JMvWO"}
                                  align={"inherit"}
                                  color={"initial"}
                                  display={"initial"}
                                  variant={"body1"}
                                  children={" /"}
                                  style={qdmstyles.JMvWO}
                                ></Typography>
                              </Grid>
                              <Grid
                                key={"2"}
                                id={"xTaHq"}
                                container={""}
                                direction={"row"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                lg={"5"}
                                item={true}
                                md={"5"}
                                sm={"5"}
                                xl={"5"}
                                xs={"5"}
                              >
                                <ALL.Availabletabcomp />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          key={"3"}
                          id={"Y3yHa"}
                          container={true}
                          direction={"row"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          lg={"12"}
                          md={"12"}
                          sm={"12"}
                          xl={"12"}
                          xs={"12"}
                        >
                          <Grid
                            key={"0"}
                            id={"muwbQ"}
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
                            style={qdmstyles.muwbQ}
                          >
                            <Button
                              key={"0"}
                              id={"P1hme"}
                              variant={"text"}
                              color={"primary"}
                              children={"Save & Add another"}
                              style={qdmstyles.Phme}
                              size="small"
                            ></Button>
                            <Button
                              key={"1"}
                              id={"CP7Ps"}
                              variant={"contained"}
                              color={"primary"}
                              children={"Add"}
                              style={qdmstyles.CPPs}
                              size="small"
                            ></Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Modal>
          </>
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Availablestrengthtabcomp));
