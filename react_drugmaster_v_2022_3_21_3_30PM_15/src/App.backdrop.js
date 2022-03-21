/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc Providing the BackdropContext from /src/context which is used in /src/App.js
 */

import React from "react";
import { BackdropContext } from "./contexts";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { withStyles, Grid } from "@material-ui/core";

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

class AppBackDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: "",
      setBackDrop: () => null,
    };
  }

  close = () => {
    this.setState({
      open: false,
      message: "",
    });
  };

  set = (props) => {
    this.setState({ ...props });
  };

  render() {
    const { classes } = this.props;

    const { open, message } = this.state;

    return (
      <BackdropContext.Provider
        value={{
          ...this.state,
          setBackDrop: this.set,
        }}
      >
        {this.props.children}
        <Backdrop className={classes.backdrop} open={open} onClick={this.close}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <CircularProgress color="inherit" />
            </Grid>
            <Grid item>
              <Typography variant="h6" color="inherit">
                {message}
              </Typography>
            </Grid>
          </Grid>
        </Backdrop>
      </BackdropContext.Provider>
    );
  }
}

export default withStyles(styles)(AppBackDrop);
