/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date 2020-12-01
 * @modify date
 * @desc Material UI MuIAlert and Snackbar is used to show the temporary message Component
 */
import React from "react";
import { Alert } from "qdm-component-library";

export const Alerts = (props) => {
  const [open, setOpen] = React.useState(props.open);

  const handleClose = (event) => {
    props.onclose();
    setOpen(false);
  };

  return (
    <Alert
      id="main_alert"
      name="main_alert"
      onClose={handleClose}
      variant="filled"
      {...props}
    >
      {props.msg}
    </Alert>
  );
};
