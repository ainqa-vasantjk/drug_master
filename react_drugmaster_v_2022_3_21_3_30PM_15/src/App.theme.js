/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc Providing the ThemeContext from /src/context which is used in /src/App.js
 */

import React from "react";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";

import { ThemeContext } from "./contexts";
import { Themes } from "./utils";

const AppTheme = (props) => {
  let [theme, setTheme] = React.useState({
    name: Themes.default,
  });

  const giveMeTheme = () => {
    let currentThemeJson;

    //Geting the theme json for  the selected theme
    switch (theme.name) {
      case Themes.default:
        currentThemeJson = require("./themes/default.json");
        break;

      default:
        currentThemeJson = require("./themes/default.json");
        break;
    }

    //Creating a Theme with json
    let currentTheme = createMuiTheme(currentThemeJson);

    //Making theme work with responsive font size
    currentTheme = responsiveFontSizes(currentTheme);

    return currentTheme;
  };

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      <ThemeProvider theme={giveMeTheme()}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppTheme;
