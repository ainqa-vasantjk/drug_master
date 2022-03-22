/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc All access related function for different roles.
 */

import { Routes } from "./routes";
import { UserRoles } from "../utils";

/**
 * The below function define redirection for a particular route based on the role
 */
export const Redirections = (userRole) => {
  switch (userRole) {
    default:
      return "";
  }
};

/**
 * The below function define redirection to a particular route based on the role
 */
export const LoginSuccess = (userRole) => {
  switch (userRole) {
    default:
      return "";
  }
};

/**
 * The below function define number of routes that can accessible by the
 * different role.
 */
export const Access = (userRole, path) => {
  switch (userRole) {
    case UserRoles.role:
      return [...Object.values(Routes)].indexOf(path);
    default:
      return false;
  }
};
