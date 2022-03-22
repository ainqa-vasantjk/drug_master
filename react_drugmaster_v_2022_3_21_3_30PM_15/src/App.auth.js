/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc Providing the AuthContext from /src/context which is used in the /src/App.js.
 */

import React from "react";
import { BorderLinearProgress } from "qdm-component-library";
import { NetworkCall } from "./networkcall";

class AppAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    NetworkCall("meta.json", "GET", null, null, false, true)
      .then((_) => {
        localStorage.setItem("version", _.data.version);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }

  render() {
    let { loading } = this.props;

    return (
      <>
        {loading && <BorderLinearProgress />}
        {this.props.children}
      </>
    );
  }
}

export default AppAuth;
