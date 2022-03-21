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
import { ComponentRender } from "custom-material-ui-component";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  Switch,
  Divider,
  Modal,
} from "@material-ui/core";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
  },
  grid: {
    outline: 0,
  },
}));
function Drugmastertablevalue(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const contextType = React.useContext(LoggerContext);
  const [state, setState] = React.useState({
    permissionData: null,
  });
  const [showModal, setshowModal] = React.useState(false);
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
  const handleCloseModal = () => {
    setshowModal(false);
  };
  React.useEffect(() => {}, [state]);

  const { data, index } = props;
  console.log(showModal);
  return (
    <NamespacesConsumer>
      {(t, { i18n }) => (
        <React.Fragment>
          <Grid
            key={"0"}
            id={"I06HM"}
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
              id={"xHezf"}
              container={""}
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
              <Paper
                key={"0"}
                id={"gbfHy"}
                elevation={"{3}"}
                style={qdmstyles.DBqDA}
              >
                <Grid
                  key={"0"}
                  id={"qAc9p"}
                  container={true}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                >
                  <Grid
                    key={"0"}
                    id={"HKmhv"}
                    container={true}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    lg={"9"}
                    md={"9"}
                    sm={"9"}
                    xl={"9"}
                    xs={"9"}
                    spacing={1}
                    style={qdmstyles.MzG}
                  >
                    <Grid
                      key={"0"}
                      id={"LHGC4"}
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
                      style={qdmstyles.VAOQU}
                    >
                      <Typography
                        key={"0"}
                        id={"code_and_description_value"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"ROUTGEN-001 & AAMOXl"}
                        aliasName={"codeanddescriptionvalue"}
                        noWrap={true}
                        style={qdmstyles.bzWxP}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"MA8np"}
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
                      wrap={"wrap"}
                      style={qdmstyles.Wfj}
                    >
                      <Typography
                        key={"0"}
                        id={"class_value"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Cardiovascular"}
                        aliasName={"classvalue"}
                        noWrap={true}
                        style={qdmstyles.cHPhn}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"2"}
                      id={"jhYjV"}
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
                    >
                      <Typography
                        key={"0"}
                        id={"category_value"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Regular"}
                        aliasName={"categoryvalue"}
                        noWrap={true}
                        style={qdmstyles.cMNw}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"3"}
                      id={"Tz6TR"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"2"}
                      item={true}
                      sm={"2"}
                      xl={"2"}
                      xs={"2"}
                      md={"2"}
                    >
                      <Typography
                        key={"0"}
                        id={"type_value"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Medicine"}
                        aliasName={"typevalue"}
                        noWrap={true}
                        style={qdmstyles.GBTG}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"4"}
                      id={"fW36i"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={1}
                      item={true}
                      md={1}
                      sm={1}
                      xl={1}
                      xs={1}
                    >
                      <Typography
                        key={"0"}
                        id={"form_value"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Tablet"}
                        aliasName={"formvalue"}
                        noWrap={true}
                        style={qdmstyles.MSx}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"5"}
                      id={"ecYCH"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={1}
                      item={true}
                      md={1}
                      sm={1}
                      xl={1}
                      xs={1}
                    >
                      <Typography
                        key={"0"}
                        id={"route_value"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"Oral"}
                        aliasName={"routevalue"}
                        noWrap={true}
                        style={qdmstyles.rDsyW}
                      ></Typography>
                    </Grid>
                    <Grid
                      key={"6"}
                      id={"ev6i9"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={1}
                      item={true}
                      md={1}
                      sm={1}
                      xl={1}
                      xs={1}
                      style={qdmstyles.HLu}
                    >
                      <Avatar
                        key={"0"}
                        onClick={() => setshowModal(true)}
                        id={"strength_value_icon"}
                        alt={"Avatar"}
                        variant={"rounded"}
                        aliasName={"strengthvalueicon"}
                        src={
                          "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/323303442"
                        }
                        style={qdmstyles.PnsL}
                      ></Avatar>
                    </Grid>
                  </Grid>
                  <Grid
                    key={"1"}
                    id={"hUUJ7"}
                    container={true}
                    direction={"row"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    lg={"2"}
                    md={"2"}
                    sm={"2"}
                    xl={"2"}
                    xs={"2"}
                    spacing={1}
                    style={qdmstyles.pvGla}
                  >
                    <Grid
                      key={"0"}
                      id={"BYd0H"}
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
                      style={qdmstyles.fWwA}
                    >
                      <Switch
                        key={"0"}
                        id={"status_value"}
                        checked={true}
                        color={"primary"}
                        name={"switch"}
                        aliasName={"statusvalue"}
                      ></Switch>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"YZbST"}
                      container={""}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      lg={"6"}
                      item={true}
                      xl={"6"}
                      xs={"6"}
                      sm={"6"}
                      md={"6"}
                      style={qdmstyles.qkKXh}
                    >
                      <Avatar
                        key={"0"}
                        id={"action_value_icon"}
                        alt={"Avatar"}
                        variant={"rounded"}
                        aliasName={"actionvalueicon"}
                        src={
                          "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/323299686"
                        }
                        style={qdmstyles.zrlt}
                      ></Avatar>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider key={"1"} id={"jL9Jj"} variant={"fullWidth"}></Divider>
              </Paper>
            </Grid>
          </Grid>
          {showModal && (
            <Modal
              open={showModal}
              onClose={handleCloseModal}
              className={classes.modal}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
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
                md={"4"}
                sm={"4"}
                xl={"4"}
                xs={"4"}
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
                    style={qdmstyles.pCtsN}
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
                        style={qdmstyles.YMRQ}
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
                            style={qdmstyles.qnl}
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
                          style={qdmstyles.WDf}
                        >
                          <Paper
                            style={{
                              width: "26px",
                              height: "26px",
                              borderRadius: "50%",
                              backgroundColor: "#E5E8EE",
                              display: "grid",
                              cursor: "pointer",
                            }}
                            elevation={false}
                            onClick={handleCloseModal}
                          >
                            <CloseRoundedIcon
                              fontSize="small"
                              style={{ placeSelf: "center" }}
                            />
                          </Paper>
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
                        style={qdmstyles.PLePk}
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
                        style={qdmstyles.TxTu}
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
                            style={{ margin: "0 16px" }}
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
                                style={qdmstyles.UnAb}
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
                                style={qdmstyles.GFYVy}
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
                            style={qdmstyles.eEz}
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
                              <ALL.Capsule />
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
                              style={qdmstyles.YKtx}
                            >
                              <Typography
                                key={"0"}
                                id={"JMvWO"}
                                align={"inherit"}
                                color={"initial"}
                                display={"initial"}
                                variant={"body1"}
                                children={" /"}
                                style={qdmstyles.YBla}
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
                              <ALL.Capsule />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Modal>
          )}
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Drugmastertablevalue));
