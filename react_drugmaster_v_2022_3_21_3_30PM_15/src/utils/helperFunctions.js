/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc Collection of all helper functions.
 */

/**
 * Object with role as key and value, which is used for
 * comparison of role in different place.
 */
export const UserRoles = {
  role: "role",
};

/**
 * Object which has the proper name of all the role
 * used in the application.
 */
export let UserRolesName = {
  role: "Role",
};

/**
 * Object which has the different themes used in
 * the application.
 */
export let Themes = {
  default: "default",
  dark: "dark",
};

/**
 * Object which has the different props for the Alert Component (/src/component/alert)
 * which is used via AlertContext (/src/contexts) and provided at /src/App.alert.js.
 */
export let AlertProps = {
  vertical: {
    top: "top",
    bottom: "bottom",
  },
  horizontal: {
    left: "left",
    right: "right",
    center: "center",
  },
  severity: {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info",
  },
};

/**
 * Object which has the different props for the Drawer Component (/src/App.drawer.js)
 * which is used via DrawerContext (/src/contexts) and provided at /src/App.drawer.js.
 */
export const DrawerProps = {
  direction: {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
  },
  variant: {
    permanent: "permanent",
    persistent: "persistent",
    temporary: "temporary",
  },
};

/**
 * Object has the key and value pair of all the keys which
 * are used to store some values in the local storage.
 */
export let LocalStorageKeys = {
  authToken: "auth_token",
};

/**
 * Object has the key and value pair of all the HTTP method
 * used for an network call.
 */
export let NetWorkCallMethods = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
  update: "UPDATE",
};

/**
 * The below function convert the normal array of object to
 * {label: "",value:1} pair which is suitable for React Select
 * component.
 */
export let ConvertToReactSelect = (data, valueKey, labelKey) => {
  if (!data || !data?.length) {
    return [];
  }

  return data.map((val) => {
    return {
      ...val,
      value: val[valueKey],
      label: val[labelKey],
    };
  });
};

/**
 * The below function convert the uploaded file to base64 file.
 */
export let ToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

/**
 * The below function capitalize the given string.
 */
export let CapitalizeString = (string) => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * The below function convert the HEX code to RGBA
 */
export let ConvertHexToRGBA = (hex, opacity) => {
  if (hex) {
    let tempHex = hex.replace("#", "");
    let r = parseInt(tempHex.substring(0, 2), 16);
    let g = parseInt(tempHex.substring(2, 4), 16);
    let b = parseInt(tempHex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
  }
  return null;
};

/**
 * The below function will open an document node in a full screen.
 */
export let OpenFullScreen = (id) => {
  let elem = document.getElementById(id);
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
};

/**
 * The below function will close the full screen of an document
 * node.
 */
export let CloseFullScreen = (id) => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

/**
 * The below function will scroll the page to the Top.
 */
export let ScrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
