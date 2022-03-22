/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc Collection of all the Context used in the application
 */

import React from "react";
import { Themes, AlertProps, DrawerProps } from "../utils";

/**
 * ThemeContext store the current theme of the app,which is provided
 * at the /src/App.js using the /src/App.theme.js.
 */
export let ThemeContext = React.createContext({
  name: Themes.default,
  setTheme: () => null,
});

/**
 * AuthContext store some basic detail of the user when the user logged
 * into the application, which is provided at the /src/App.js using
 * the /src/App.auth.js.
 */
export let AuthContext = React.createContext({
  user: {},
  setAuth: () => null,
});

/**
 * AlertContext store the props which are neccessary to show the Alert component,
 * which is provided at the /src/App.js using the /src/App.alert.js.
 */
export let AlertContext = React.createContext({
  open: false,
  severity: AlertProps.severity.success,
  msg: "",
  vertical: AlertProps.vertical.top,
  horizontal: AlertProps.horizontal.center,
  onclose: () => null,
  setSnack: () => null,
});

/**
 * DialogContext store the props of a Dialog, which is provided at the /src/App.js using
 * the /src/App.dialog.js
 */
export let DialogContext = React.createContext({
  open: true,
  title: "",
  body: "",
  positiveBtn: "Ok",
  negativeBtn: "Cancel",
  onOk: () => null,
  setDialog: () => null,
});

/**
 * BackdropContext store the props of the Backdrop Component, which is provided at the /src/App.js using
 * the /src/App.backdrop.js
 */
export let BackdropContext = React.createContext({
  open: true,
  message: "",
  setBackDrop: () => null,
});

/**
 * DrawerContext store the props of the Drawer component, which is provided at the /src/App.js using
 * the /src/App.drawer.js
 */
export const DrawerContext = React.createContext({
  open: true,
  direction: DrawerProps.direction.right,
  variant: DrawerProps.variant.temporary,
  onClose: () => null,
  setDrawer: () => null,
});

export const LoggerContext = React.createContext({
  getData: () => null,
  data: {},
  setLogData: () => null,
});
