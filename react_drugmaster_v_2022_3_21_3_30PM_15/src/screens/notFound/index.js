/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc When a route/path is not found, this page will be shown. i.e 404 - Page
 */

import React from "react";
import { H6 } from "qdm-component-library";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <H6>404 - Not Found</H6>
      </div>
    );
  }
}

export default NotFound;
