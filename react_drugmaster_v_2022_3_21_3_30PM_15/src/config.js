/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc All the environment variables are taken from process.env and exported
 * via Config variable.
 */

import dotenv, { config } from "dotenv";
dotenv.config();

let Config = {};

Config.api_url = process.env.REACT_APP_API_ENDPOINT;
Config.graphql = process.env.REACT_APP_GQL_ENDPOINT;
Config.socket = process.env.REACT_APP_SOCKET;
Config.metaDataId = process.env.REACT_APP_METADATAID;
Config.projecName = process.env.REACT_APP_APP_NAME;
Config.dbname = process.env.REACT_APP_QDM_DATABASENAME;

export default Config;
