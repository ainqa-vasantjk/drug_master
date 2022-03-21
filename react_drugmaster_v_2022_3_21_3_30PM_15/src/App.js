/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc The first component of the application, all the required context and routes are used here
 * to setup the application.
 */

import React from "react";

import AppAuth from "./App.auth";
// import AppTheme from "./App.theme";
import AppAlert from "./App.alert";
import AppErrorBoundary from "./App.errorBoundry";
import RouterApp from "./router";
import AppLogger from "./App.logger";
import { store as ReduxStore } from "./redux";
import { Provider } from "react-redux";

// import { CssBaseline } from "@material-ui/core";
// import AppDialog from "./App.dialog";
// import AppBackdrop from "./App.backdrop";

function App() {
  return (
    <Provider store={ReduxStore}>
      <AppAuth>
        <AppErrorBoundary>
          {/* <AppTheme> */}
          {/* <CssBaseline /> */}
          <AppAlert>
            {/* <AppDialog> */}
            {/* <AppBackdrop> */}
            <AppLogger>
              <RouterApp />
            </AppLogger>
            {/* </AppBackdrop> */}
            {/* </AppDialog> */}
          </AppAlert>
          {/* </AppTheme> */}
        </AppErrorBoundary>
      </AppAuth>
    </Provider>
  );
}

export default App;
