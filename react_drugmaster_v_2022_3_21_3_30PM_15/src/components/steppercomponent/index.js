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
import { Grid, Paper, Avatar, Typography, Button } from "@material-ui/core";
import { MuiStepper } from "custom-material-ui-component";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

function Steppercomponent(props) {
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
                style={{display:"flex"}}
              >
                <Paper
                  key={"0"}
                  id={"D84US"}
                  elevation={"{3}"}
                  style={qdmstyles.fDGwz}
                >
                  <Avatar
                    key={"0"}
                    id={"RT95t"}
                    alt={"Avatar"}
                    variant={"rounded"}
                    src={
                      "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/325384497"
                    }
                    style={qdmstyles.HkVSt}
                  ></Avatar>
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
              
             
                <MuiStepper
                  key={"0"}
                  id={"ifdFf"}
                  style={qdmstyles.stppr}
                  value={""}
                  stepsHeader={[
                    {
                      header: "Drug master setup",
                      fullWidth: true,
                      body: {
                        component: true,
                        componentName: "drugintscreencomp",
                        componentId: "DKnmA",
                      },
                    },
                    {
                      header: "Alerts and Restrictions",
                      fullWidth: true,
                      body: {
                        component: true,
                        componentName: "alertscreencomp",
                        componentId: "93i7O",
                      },
                    },
                  ]}
                  stepperActiveTextColor={"green"}
                  nextLabel={"save"}
                  nextButtonBackground={"black"}
                  previousButtonBackground={"daddad"}
                  previousButtonTextColor={"cancel"}
                  nextButtonTextColor={"blue"}
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
                ></Button>
                <Button
                  key={"1"}
                  onClick={() => {
                    props.history.push("/alertrestriction");
                  }}
                  id={"add_new_drug_catalog_save_and_process_button"}
                  variant={"contained"}
                  color={"primary"}
                  children={"Save and Proceed"}
                  size={"small"}
                  aliasName={"addnewdrugcatalogsaveandprocessbutton"}
                  style={qdmstyles.fBNLn}
                ></Button>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Steppercomponent));
