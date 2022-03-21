/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc The private route check wheather the user is logged in or not and also check
 * wheather the request route from the user is accessible to them or not using the Access(role,path)
 * function then allow to the particular route or else it will redirect to login page.
 */

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Routes } from "./routes";
import { useDispatch } from "react-redux";

const PrivateRoute = (routeprops) => {
  const dispatch = useDispatch();

  let { component: Component, path, isIdmEnabled, ...rest } = routeprops;

  const checkAccess = () => {
    try {
      if (isIdmEnabled) {
        let data = sessionStorage.getItem("role_data");
        const accessObj =
          JSON.parse(atob(data))?.[sessionStorage.getItem("role_name")]
            ?.access || [];
        if (accessObj?.length === 0) {
          throw new Error("Invalid Permissions");
        }
        return (
          sessionStorage.getItem("role_name") &&
          accessObj.indexOf(path) > -1 &&
          sessionStorage.email
        );
      } else {
        return sessionStorage.authToken;
      }
    } catch (err) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("role_name");
      sessionStorage.removeItem("role_data");
      sessionStorage.removeItem("remove_item");
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        checkAccess() ? <Component {...props} /> : <Redirect to={"/"} />
      }
    />
    // <Route
    //   {...rest} render={(props) =>  (
    //     <Component {...props} />
    //   )
    //   }
    // />
  );
};

export default PrivateRoute;
