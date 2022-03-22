/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc Providing the AuthContext from /src/context which is used in the /src/App.js.
 */

import React from "react";
import { getmetadata, log } from "qdm-audit-logger";
import { LoggerContext } from "./contexts";
import { getDate } from "date-fns";

class AppLogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    let metadata = await getmetadata();
    this.setState({
      data: { ...metadata },
    });
  };

  setLog = async (logType, message) => {
    await log(logType, message, this.state.data);
  };

  render() {
    return (
      <LoggerContext.Provider
        value={{
          ...this.state,
          getData: this.getData,
          setLogData: this.setLog,
        }}
      >
        {this.props.children}
      </LoggerContext.Provider>
    );
  }
}

export default AppLogger;
