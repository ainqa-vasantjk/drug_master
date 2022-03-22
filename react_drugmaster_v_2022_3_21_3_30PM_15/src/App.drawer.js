/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc Providing the DrawerContext from /src/context which is used in /src/App.js
 */

import React from "react";
import { DrawerContext } from "./contexts";
import { Drawer, withStyles, Avatar } from "@material-ui/core";
import { drawerProps } from "./utils";

const styles = (theme) => ({
  root: {
    maxWidth: 400,
    minWidth: 400,
    background: "#fff",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 300,
      minWidth: 300,
    },
    overflowX: "hidden",
  },
  large: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    position: "fixed",
    right: "410px",
    cursor: "pointer",
    top: 10,
    "& img": {
      objectFit: "scale-down",
      backgroundColor: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      right: "313px",
    },
  },
  root_extra_large: {
    maxWidth: 1000,
    minWidth: 1000,
    background: "#fff",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 300,
      minWidth: 300,
    },
    overflowX: "hidden",
  },
  large_extra_large: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    position: "fixed",
    right: "1010px",
    cursor: "pointer",
    top: 10,
    "& img": {
      objectFit: "scale-down",
      backgroundColor: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      right: "313px",
    },
  },
});

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      direction: drawerProps.direction.right,
      variant: drawerProps.variant.temporary,
      isLarge: null,
      component: <>Hai</>,
    };
  }

  close = () => {
    this.setState({
      ...this.state,
      open: false,
      isLarge: null,
      component: <></>,
    });
    this.props.onClose_ && this.props.onClose_();
  };

  set = (props) => {
    this.setState({ ...props });
  };

  render() {
    const { classes } = this.props;
    const { direction, variant, open, component, isLarge } = this.state;

    return (
      <DrawerContext.Provider
        value={{
          ...this.state,
          setDrawer: this.set,
          onClose: this.close,
        }}
      >
        {this.props.children}
        <Drawer
          anchor={direction}
          variant={variant}
          open={open}
          onClose={() => this.close()}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Avatar
            src="/images/close.svg"
            className={`${classes.large} ${
              isLarge ? classes.large_extra_large : ""
            }`}
            onClick={() => this.close()}
          />
          <div
            className={`${classes.root} ${
              isLarge ? classes.root_extra_large : ""
            }`}
          >
            {component}
          </div>
        </Drawer>
      </DrawerContext.Provider>
    );
  }
}

export default withStyles(styles)(AppDrawer);
