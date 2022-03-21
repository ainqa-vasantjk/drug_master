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
import { MuiStepper } from "custom-material-ui-component";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Box,
  Avatar,
  TextField,
} from "@material-ui/core";
import { CustRowTable } from "custom-material-ui-component";

import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

class Alertrestriction extends React.Component {
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
              >
                <Grid
                  key={"0"}
                  id={"mAG6q"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={1}
                  md={1}
                  sm={1}
                  xl={1}
                  xs={1}
                  item={true}
                >
                  <Paper
                    key={"0"}
                    id={"D84US"}
                    elevation={"{3}"}
                    style={qdmstyles.IPet}
                  >
                    <Avatar
                      key={"0"}
                      id={"RT95t"}
                      alt={"Avatar"}
                      variant={"rounded"}
                      src={
                        "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/325384497"
                      }
                      style={qdmstyles.FGQQ}
                    ></Avatar>
                  </Paper>
                </Grid>
                <Grid
                  key={"1"}
                  id={"add_new_drug_catalog_masterheader"}
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
                  aliasName={"addnewdrugcatalogmasterheader"}
                >
                  <Typography
                    key={"0"}
                    id={"yf8Th"}
                    align={"inherit"}
                    color={"initial"}
                    display={"initial"}
                    variant={"body1"}
                    children={"Add New Drug catalog master"}
                    style={qdmstyles.zRGE}
                  ></Typography>
                </Grid>
                <Grid
                  key={"2"}
                  id={"oFnT0"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={"5"}
                  md={"5"}
                  sm={"5"}
                  xl={"5"}
                  xs={"5"}
                  item={true}
                >
                  <MuiStepper
                    key={"0"}
                    id={"ifdFf"}
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
                  style={qdmstyles.SvRYO}
                >
                  <Button
                    key={"0"}
                    id={"add_new_drug_catalog_cancel_button"}
                    variant={"text"}
                    color={"primary"}
                    children={"cancel"}
                    aliasName={"addnewdrugcatalogcancelbutton"}
                    style={qdmstyles.pjkFB}
                  ></Button>
                  <Button
                    key={"1"}
                    id={"add_new_drug_catalog_save_and_process_button"}
                    variant={"contained"}
                    color={"primary"}
                    children={"Previous"}
                    aliasName={"addnewdrugcatalogsaveandprocessbutton"}
                    style={qdmstyles.gbXf}
                  ></Button>
                  <Button
                    key={"2"}
                    id={"uvM7p"}
                    variant={"contained"}
                    color={"primary"}
                    children={"Save"}
                    style={qdmstyles.uvMp}
                  ></Button>
                </Grid>
              </Grid>
            </Grid>
            <Paper
              key={"0"}
              id={"upUMw"}
              elevation={"{3}"}
              style={qdmstyles.OXtf}
            >
              <Grid
                key={"0"}
                id={"B6hKS"}
                container={true}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sm={"12"}
                md={"12"}
                lg={"12"}
                xl={"12"}
                xs={"12"}
                style={qdmstyles.kyoS}
              >
                <Grid
                  key={"0"}
                  id={"dUe70"}
                  container={""}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  lg={"12"}
                  md={"12"}
                  sm={"12"}
                  xl={"12"}
                  xs={"12"}
                  style={qdmstyles.Pzwho}
                >
                  <Paper
                    key={"0"}
                    id={"DKSx3"}
                    elevation={"{3}"}
                    style={qdmstyles.eiSt}
                  >
                    <Grid
                      key={"0"}
                      id={"9DIbe"}
                      container={true}
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Grid
                        key={"0"}
                        id={"uGGTi"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"4"}
                        item={true}
                        md={"4"}
                        sm={"6"}
                        xs={"6"}
                        xl={"4"}
                      >
                        <Typography
                          key={"0"}
                          id={"alerts_and_restrictions_header"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"ALERTS AND RESTRICTIONS"}
                          aliasName={"alertsandrestrictionsheader"}
                          style={qdmstyles.ZPPc}
                        ></Typography>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"N2DzJ"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"2"}
                        md={"2"}
                        sm={"4"}
                        xl={"4"}
                        xs={"4"}
                        item={true}
                        style={qdmstyles.sUgeZ}
                      >
                        <Button
                          key={"0"}
                          id={"alerts_and_restrictions_add_new_button"}
                          variant={"text"}
                          color={"primary"}
                          children={"+ Add New"}
                          size={"small"}
                          aliasName={"alertsandrestrictionsaddnewbutton"}
                          style={qdmstyles.irxhT}
                        ></Button>
                      </Grid>
                    </Grid>
                    <CustRowTable
                      key={"1"}
                      id={"kDOky"}
                      HeaderComp={
                        <ALL.Alerttablerow
                          propsState={this.state}
                          setFun={(value) => {
                            this.changeState("Alerttablerow", value);
                          }}
                          stateName={"Alerttablerow"}
                          statevalue={this.state?.Alerttablerow}
                        />
                      }
                      BodyComp={
                        <ALL.Alerttablevalue
                          propsState={this.state}
                          setFun={(value) => {
                            this.changeState("Alerttablevalue", value);
                          }}
                          stateName={"Alerttablevalue"}
                          statevalue={this.state?.Alerttablevalue}
                        />
                      }
                      style={qdmstyles.ACVqf}
                    ></CustRowTable>
                  </Paper>
                </Grid>
                <Grid
                  key={"1"}
                  id={"34pKH"}
                  container={true}
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  sm={"12"}
                  md={"12"}
                  lg={"12"}
                  style={qdmstyles.YN}
                >
                  <Typography
                    key={"0"}
                    id={"add_new_alerts_and_restriction_header"}
                    align={"inherit"}
                    color={"initial"}
                    display={"initial"}
                    variant={"body1"}
                    children={"ADD NEW ALERTS AND RESTRICTIONS"}
                    aliasName={"addnewalertsandrestrictionheader"}
                    style={qdmstyles.MlMJO}
                  ></Typography>
                </Grid>
                <Grid
                  key={"2"}
                  id={"dpeX9"}
                  container={true}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={qdmstyles.DRG}
                >
                  <Grid
                    key={"0"}
                    id={"qo7rp"}
                    container={true}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    lg={"12"}
                    md={"12"}
                    sm={"12"}
                    style={qdmstyles.vSyzJ}
                  >
                    <Grid
                      key={"0"}
                      id={"OKjtg"}
                      container={true}
                      direction={"column"}
                      justifyContent={"flex-start"}
                      alignItems={"flex-start"}
                      style={qdmstyles.hKrnI}
                    >
                      <Typography
                        key={"0"}
                        id={"order_criteria_header"}
                        align={"inherit"}
                        color={"initial"}
                        display={"initial"}
                        variant={"body1"}
                        children={"ORDER CRITERIA"}
                        aliasName={"ordercriteriaheader"}
                        style={qdmstyles.RhDpc}
                      ></Typography>
                      <Grid
                        key={"1"}
                        id={"xUF0v"}
                        container={true}
                        direction={"row"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                      >
                        <Box key={"0"} id={"ZFQt6"} m={1} component={"div"}>
                          <Typography
                            key={"0"}
                            id={"nnJMl"}
                            align={"inherit"}
                            color={"initial"}
                            display={"initial"}
                            variant={"body1"}
                            children={"code"}
                            style={qdmstyles.kyer}
                          ></Typography>
                          <Button
                            key={"1"}
                            id={"1fRw3"}
                            variant={"contained"}
                            color={"primary"}
                            children={"RANTD-01"}
                            disabled={true}
                            size={"small"}
                            style={qdmstyles.VHoa}
                          ></Button>
                        </Box>
                        <Box key={"1"} id={"ZFQt6"} m={1} component={"div"}>
                          <Typography
                            key={"0"}
                            id={"nnJMl"}
                            align={"inherit"}
                            color={"initial"}
                            display={"initial"}
                            variant={"body1"}
                            children={"Description"}
                            style={qdmstyles.QnycR}
                          ></Typography>
                          <Button
                            key={"1"}
                            id={"UlmHZ"}
                            variant={"contained"}
                            color={"primary"}
                            children={"Ranitidine Oral Tablet"}
                            disabled={true}
                            size={"small"}
                            style={qdmstyles.aj}
                          ></Button>
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"vRMNt"}
                      container={true}
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid
                        key={"0"}
                        id={"VSjRk"}
                        container={true}
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                        style={qdmstyles.DiHL}
                      >
                        <Typography
                          key={"0"}
                          id={"patient_criteria_header"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"PATIENT CRITERIA"}
                          aliasName={"patientcriteriaheader"}
                          style={qdmstyles.gIsZ}
                        ></Typography>
                        <Grid
                          key={"1"}
                          id={"tpZSa"}
                          container={true}
                          direction={"row"}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                        >
                          <Box
                            key={"0"}
                            id={"jUtwI"}
                            m={1}
                            component={"div"}
                            style={qdmstyles.lqU}
                          >
                            <Avatar
                              key={"0"}
                              id={"patient_criteria_add_new_rule_set_icon"}
                              alt={"Avatar"}
                              variant={"rounded"}
                              src={
                                "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/325667675"
                              }
                              aliasName={"patientcriteriaaddnewruleseticon"}
                              style={qdmstyles.BJdP}
                            ></Avatar>
                            <Button
                              key={"1"}
                              id={"patient_criteria_add_new_rule_set_button"}
                              variant={"text"}
                              color={"primary"}
                              children={"Add New Rule Set"}
                              aliasName={"patientcriteriaaddnewrulesetbutton"}
                              style={qdmstyles.Wfr}
                              size={"small"}
                            ></Button>
                          </Box>
                          <Typography
                            key={"1"}
                            id={"FzxSu"}
                            align={"inherit"}
                            color={"initial"}
                            display={"initial"}
                            variant={"body1"}
                            children={"(or)"}
                            style={qdmstyles.qWkT}
                          ></Typography>
                          <Box
                            key={"2"}
                            id={"jUtwI"}
                            m={1}
                            component={"div"}
                            style={qdmstyles.evHRC}
                          >
                            <Avatar
                              key={"0"}
                              id={"patient_criteria_add_existing_rule_set_icon"}
                              alt={"Avatar"}
                              variant={"rounded"}
                              src={
                                "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/325667675"
                              }
                              aliasName={
                                "patientcriteriaaddexistingruleseticon"
                              }
                              style={qdmstyles.HRISB}
                            ></Avatar>
                            <Button
                              key={"1"}
                              id={
                                "patient_criteria_add_existing_rule_set_button"
                              }
                              variant={"text"}
                              color={"primary"}
                              children={"Add Existing Rule Set"}
                              aliasName={
                                "patientcriteriaaddexistingrulesetbutton"
                              }
                              style={qdmstyles.Sp}
                              size={"small"}
                            ></Button>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"VSjRk"}
                        container={true}
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                        style={qdmstyles.CdhGU}
                      >
                        <Typography
                          key={"0"}
                          id={"practitioner_criteria_header"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"PRACTITIONER CRITERIA"}
                          aliasName={"practitionercriteriaheader"}
                          style={qdmstyles.Bxdt}
                        ></Typography>
                        <Grid
                          key={"1"}
                          id={"tpZSa"}
                          container={true}
                          direction={"row"}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                        >
                          <Box
                            key={"0"}
                            id={"jUtwI"}
                            m={1}
                            component={"div"}
                            style={qdmstyles.QMGQP}
                          >
                            <Avatar
                              key={"0"}
                              id={"practitioner_criteria_add_new_rule_set_icon"}
                              alt={"Avatar"}
                              variant={"rounded"}
                              src={
                                "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/325667675"
                              }
                              aliasName={
                                "practitionercriteriaaddnewruleseticon"
                              }
                              style={qdmstyles.vrnaN}
                            ></Avatar>
                            <Button
                              key={"1"}
                              id={
                                "practitioner_criteria_add_new_rule_set_button"
                              }
                              variant={"text"}
                              color={"primary"}
                              children={"Add New Rule Set"}
                              aliasName={
                                "practitionercriteriaaddnewrulesetbutton"
                              }
                              style={qdmstyles.tIdq}
                              size={"small"}
                            ></Button>
                          </Box>
                          <Typography
                            key={"1"}
                            id={"FzxSu"}
                            align={"inherit"}
                            color={"initial"}
                            display={"initial"}
                            variant={"body1"}
                            children={"(or)"}
                            style={qdmstyles.DDd}
                          ></Typography>
                          <Box
                            key={"2"}
                            id={"jUtwI"}
                            m={1}
                            component={"div"}
                            style={qdmstyles.coT}
                          >
                            <Avatar
                              key={"0"}
                              id={
                                "practitioner_criteria_add_existing_rule_set_icon"
                              }
                              alt={"Avatar"}
                              variant={"rounded"}
                              src={
                                "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/325667675"
                              }
                              aliasName={
                                "practitionercriteriaaddexistingruleseticon"
                              }
                              style={qdmstyles.pnvtr}
                            ></Avatar>
                            <Button
                              key={"1"}
                              id={
                                "practitioner_criteria_add_existing_rule_set_button"
                              }
                              variant={"text"}
                              color={"primary"}
                              children={"Add Existing Rule Set"}
                              aliasName={
                                "practitionercriteriaaddexistingrulesetbutton"
                              }
                              style={qdmstyles.eUuJA}
                              size={"small"}
                            ></Button>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid
                        key={"2"}
                        id={"eowNT"}
                        container={true}
                        direction={"row"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        style={qdmstyles.sL}
                      >
                        <Box key={"0"} id={"ZFQt6"} m={1} component={"div"}>
                          <Typography
                            key={"0"}
                            id={"rule_type_header"}
                            align={"inherit"}
                            color={"initial"}
                            display={"initial"}
                            variant={"body1"}
                            children={"Rule Type"}
                            aliasName={"ruletypeheader"}
                            style={qdmstyles.mhgSY}
                          ></Typography>
                          <Box
                            key={"1"}
                            id={"A6EcI"}
                            m={1}
                            component={"div"}
                            style={qdmstyles.aWjHF}
                          >
                            <Button
                              key={"0"}
                              id={"rSPzN"}
                              variant={"contained"}
                              color={"primary"}
                              children={"Restriction"}
                              disabled={true}
                              style={qdmstyles.nFTYT}
                              size={"small"}
                            ></Button>
                            <Button
                              key={"1"}
                              id={"rQOaK"}
                              variant={"contained"}
                              color={"primary"}
                              children={"Alert"}
                              style={qdmstyles.AGMM}
                              size={"small"}
                            ></Button>
                          </Box>
                        </Box>
                        <Box key={"1"} id={"ZFQt6"} m={1} component={"div"}>
                          <Typography
                            key={"0"}
                            id={"privilege_type_header"}
                            align={"inherit"}
                            color={"initial"}
                            display={"initial"}
                            variant={"body1"}
                            children={"Privilege Type"}
                            aliasName={"privilegetypeheader"}
                            style={qdmstyles.qPu}
                          ></Typography>
                          <Box
                            key={"1"}
                            id={"A6EcI"}
                            m={1}
                            component={"div"}
                            style={qdmstyles.SKvK}
                          >
                            <Button
                              key={"0"}
                              id={"yEyjM"}
                              variant={"contained"}
                              color={"primary"}
                              children={"Alert & Stop"}
                              style={qdmstyles.GBi}
                              size={"small"}
                            ></Button>
                            <Button
                              key={"1"}
                              id={"3OPFH"}
                              variant={"contained"}
                              color={"primary"}
                              children={"Continue with reason"}
                              disabled={true}
                              style={qdmstyles.vqTJG}
                              size={"small"}
                            ></Button>
                            <Button
                              key={"2"}
                              id={"JgKfM"}
                              variant={"contained"}
                              color={"primary"}
                              children={"Informative alert"}
                              disabled={true}
                              style={qdmstyles.yXNEq}
                              size={"small"}
                            ></Button>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid
                        key={"3"}
                        id={"0HojJ"}
                        container={true}
                        direction={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                        style={qdmstyles.tCZ}
                      >
                        <Typography
                          key={"0"}
                          id={"nnJMl"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"Alert Text Message"}
                          style={qdmstyles.TLURa}
                        ></Typography>
                        <TextField
                          key={"1"}
                          id={"7rYVT"}
                          label={""}
                          placeholder={"Type here"}
                          type={"text"}
                          multiline={true}
                          variant={"outlined"}
                          fullWidth={true}
                          maxRows={"4"}
                          size={"medium"}
                          minRows={"4"}
                          style={qdmstyles.UcwNt}
                        ></TextField>
                      </Grid>
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
)(withRouter(translate()(Alertrestriction)));
