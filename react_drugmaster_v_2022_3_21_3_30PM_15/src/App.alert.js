/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc Providing the AlertContext from (/src/context/) which is used by /src/App.js.
 */

import React from "react";
import { Alerts as Alert } from "./components";
import { AlertProps } from "./utils";
import { AlertContext } from "./contexts";

class AppAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      severity: AlertProps.severity.success,
      msg: "",
      vertical: AlertProps.vertical.top,
      horizontal: AlertProps.horizontal.center,
    };
  }

  close = () => {
    this.setState({
      open: false,
      severity: AlertProps.severity.success,
      msg: "",
      vertical: AlertProps.vertical.top,
      horizontal: AlertProps.horizontal.center,
    });
  };

  set = (props) => {
    this.setState({ ...props });
  };

  render() {
    return (
      <AlertContext.Provider
        value={{
          ...this.state,
          onclose: this.close,
          setSnack: this.set,
        }}
      >
        {this.state.open ? <Alert {...this.state} onclose={this.close} /> : ""}
        {this.props.children}
      </AlertContext.Provider>
    );
  }
}

export default AppAlert;
