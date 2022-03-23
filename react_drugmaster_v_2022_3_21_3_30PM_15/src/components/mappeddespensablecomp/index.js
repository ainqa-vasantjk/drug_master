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
import { Grid, Typography, Button, TextField, Avatar } from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";
import qdmstyles from "./styles.json";
import "./index.css";
var aes256 = require("aes256");

function Mappeddespensablecomp(props) {
  const dispatch = useDispatch();

  const contextType = React.useContext(LoggerContext);
  const [state, setState] = React.useState({
    permissionData: null,
  });
  const [addMappeddispensable, setAddMappeddispensable] = React.useState([""]);
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
  const handleMappedDispensable = (key) => {
    console.log("key value :", key);
    var deletedaddmapped = [...addMappeddispensable];
    deletedaddmapped.splice(key, 1);
    console.log(deletedaddmapped);
    setAddMappeddispensable(deletedaddmapped);
  };
  React.useEffect(() => {}, [state]);

  const { data, index } = props;

  return (
    <NamespacesConsumer>
      {(t, { i18n }) => (
        <React.Fragment>
          <Grid
            key={"0"}
            id={"hDIJk"}
            container={true}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid
              key={"0"}
              id={"TgstR"}
              container={true}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              lg={"auto"}
              style={qdmstyles.rTexp}
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
                  id={"mapped_dispensable_header"}
                  align={"left"}
                  color={"initial"}
                  display={"initial"}
                  variant={"body1"}
                  children={"MAPPED DISPENSABLES"}
                  aliasName={"mappeddispensableheader"}
                  style={qdmstyles.NAXiU}
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
                  id={"mapped_dispensable_add_new_button"}
                  variant={"text"}
                  color={"primary"}
                  children={"+ Add New"}
                  aliasName={"mappeddispensableaddnewbutton"}
                  style={qdmstyles.NBvD}
                  onClick={() =>
                    setAddMappeddispensable([...addMappeddispensable, ""])
                  }
                ></Button>
              </Grid>
            </Grid>
            {addMappeddispensable.map((e, addMappeddispensableindex) => {
              return (
                <>
                  <Grid
                    key={addMappeddispensableindex}
                    id={"OeOjQ"}
                    container={true}
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    lg={"12"}
                    md={"12"}
                    sm={"12"}
                    xl={"12"}
                    xs={"12"}
                  >
                    <Grid
                      key={"0"}
                      id={"aq1c2"}
                      container={""}
                      direction={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      item={true}
                      spacing={""}
                      lg={"4"}
                      alignContent={"center"}
                      md={"4"}
                      sm={"4"}
                      xl={"4"}
                      xs={"4"}
                      style={qdmstyles.apKu}
                    >
                      <Grid
                        key={"0"}
                        id={"dIQ02"}
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
                        style={qdmstyles.NTuH}
                      >
                        <Typography
                          key={"0"}
                          id={"item_code_description_header"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"Item Code & Description"}
                          aliasName={"itemcodedescriptionheader"}
                          style={qdmstyles.fWx}
                        ></Typography>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"dIQ02"}
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
                          id={"8VQ95"}
                          style={qdmstyles?.VQ}
                          value={state?.mappeddespensablecomp_8vq95 ?? null}
                          onLoad={() =>
                            setState({
                              mappeddespensablecomp_8vq95:
                                state?.mappeddespensablecomp_8vq95 ?? null,
                            })
                          }
                          getOptionLabel={(option) => option?.["label"]}
                          options={[] ?? []}
                          size={"small"}
                          renderInput={(params) => (
                            <ALLMCORE.TextField
                              {...params}
                              placeholder=""
                              variant="outlined"
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      key={"1"}
                      id={"vVPnE"}
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
                        id={"5zR5Z"}
                        container={""}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        lg={"12"}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                        style={qdmstyles.fToh}
                      >
                        <Typography
                          key={"0"}
                          id={"preferred_sequence_header"}
                          align={"inherit"}
                          color={"initial"}
                          display={"initial"}
                          variant={"body1"}
                          children={"Preferred Sequence"}
                          aliasName={"preferredsequenceheader"}
                          style={qdmstyles.HRAX}
                        ></Typography>
                      </Grid>
                      <Grid
                        key={"1"}
                        id={"aq1c2"}
                        container={true}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        item={true}
                        spacing={""}
                        lg={"12"}
                        alignContent={"center"}
                        md={"12"}
                        sm={"12"}
                        xl={"12"}
                        xs={"12"}
                        style={qdmstyles.sCN}
                      >
                        <Grid
                          key={"0"}
                          id={"dIQ02"}
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
                          <TextField
                            key={"0"}
                            id={"preferred_sequence_value"}
                            label={""}
                            placeholder={""}
                            type={"text"}
                            select={""}
                            size={"small"}
                            fullWidth={true}
                            variant={"outlined"}
                            margin={"none"}
                            aliasName={"preferredsequencevalue"}
                            style={qdmstyles.tEKqK}
                          ></TextField>
                        </Grid>
                        <Grid
                          key={"1"}
                          id={"aq1c2"}
                          container={""}
                          direction={"column"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          item={true}
                          spacing={""}
                          lg={"2"}
                          alignContent={"center"}
                          md={"2"}
                          sm={"2"}
                          xl={"2"}
                          xs={"2"}
                          style={qdmstyles.mwr}
                        >
                          <Avatar
                            key={"0"}
                            id={"preferred_sequence_delete_icon"}
                            alt={"Avatar"}
                            variant={"rounded"}
                            src={
                              "https://fileupload.dev.ainqaplatform.in/ATP_Platform_DEV/317182133"
                            }
                            aliasName={"preferredsequencedeleteicon"}
                            style={qdmstyles.oNN}
                            onClick={() =>
                              handleMappedDispensable(addMappeddispensableindex)
                            }
                          ></Avatar>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </React.Fragment>
      )}
    </NamespacesConsumer>
  );
}

export default withRouter(translate()(Mappeddespensablecomp));
