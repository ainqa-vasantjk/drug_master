/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc It will generate a meta.json file in the /public folder
 * with the current version of the app from /package.json.
 */

const fs = require("fs");
const packageJson = require("./package.json");

const appVersion = packageJson.version;

const jsonData = {
  version: appVersion,
};

var jsonContent = JSON.stringify(jsonData);

fs.writeFile("./public/meta.json", jsonContent, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to meta.json");
    return console.log(err);
  }

  console.log("meta.json file has been saved with latest version number");
});
