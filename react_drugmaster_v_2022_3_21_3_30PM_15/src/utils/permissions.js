import { NetworkCall } from "../networkcall";
import Config from "../config";

const casbinjs = require("casbin.js");

const Permissions = {
  casbinList: {},
  get_user_permission_data: async () => {
    sessionStorage.setItem("entity_metadata_id", Config.metaDataId);
    sessionStorage.setItem("dbname", Config.dbname);
    let project_level_permissions = await NetworkCall(
      "https://arangodbservice.dev.ainqaplatform.in/api/read_documents",
      "POST",
      JSON.stringify({
        db_name: Config.dbname,
        entity: "IDM_Person",
        filter: `IDM_Person.email=='${sessionStorage.email}'`,
        return_fields: "IDM_Person",
      }),
      {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    );
    return project_level_permissions?.data?.result?.[0] ?? false;
  },
  get_user_role_permision: async () => {
    let screen_level_permissions = await NetworkCall(
      "https://arangodbservice.dev.ainqaplatform.in/api/read_documents",
      "POST",
      JSON.stringify({
        db_name: Config.dbname,
        entity: "IDM_PermissionRoleMapping",
        filter: `IDM_PermissionRoleMapping.role_id=='${sessionStorage.role_id}'`,
        return_fields: "IDM_PermissionRoleMapping",
      }),
      {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    );
    return screen_level_permissions?.data?.result?.[0] ?? [];
  },
  get_all_child_list: async (data, keyName) => {
    data.map((item) => {
      if (item?.key) {
        Permissions.casbinList[keyName].read.push(item.key);
        Permissions.casbinList[keyName].write.push(item.key);
      }
      if (item?.children && item?.children?.length) {
        Permissions.get_all_child_list(item.children, keyName);
      }
    });
  },
  get_repository_details: async () => {
    let screen_level_permissions = await NetworkCall(
      "https://arangodbservice.dev.ainqaplatform.in/api/read_documents",
      "POST",
      JSON.stringify({
        db_name: Config.dbname,
        entity: "IDM_Repository",
        return_fields: "IDM_Repository",
      }),
      {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    );
    let res = await screen_level_permissions?.data?.result?.[0];
    Array.isArray(res?.project_component) &&
      res.project_component.map((item) => {
        Permissions.casbinList[item?.key] = {
          read: [],
          write: [],
        };
        Permissions.get_all_child_list(item.children, item?.key);
      });
    debugger;
    sessionStorage.setItem(
      "casbinList",
      btoa(JSON.stringify(Permissions.casbinList))
    );
  },
  casbianRouteImplementation: async (allPermissionList) => {
    let pageJson = allPermissionList?.repo_mapping ?? {};
    await Permissions.get_repository_details();
    sessionStorage.setItem("permissionData", btoa(JSON.stringify(pageJson)));
    let Arr = [];
    let Pages = Object.keys(pageJson)?.filter(
      (v) =>
        v && (pageJson[v]?.permission.read || pageJson[v]?.permission.write)
    );
    let data = Pages?.filter((v) => {
      Arr.push(pageJson[v]?.routes ?? "");
    });
    const permission = {
      admin: {
        access: Arr,
      },
    };
    sessionStorage.setItem("role_name", "admin");
    sessionStorage.setItem("role_data", btoa(JSON.stringify(permission)));
  },
  checkWithCasbin: async (funName = []) => {
    try {
      let permission = Permissions.permissionJson(funName);
      if (permission) {
        const authorizer = new casbinjs.Authorizer("manual", permission);
        authorizer.setPermission(permission);
        let data = await Promise.all(
          funName.map(async (sname) => {
            return await new Promise(async (resolve, reject) => {
              let casbinList = JSON.parse(atob(sessionStorage.casbinList));
              let list = casbinList[sname];
              let readList = await Promise.all(
                list.read.map(async (val) => {
                  return await new Promise(async (resolve, reject) => {
                    let isread = await authorizer.can("read", val);
                    resolve({ [val]: isread });
                  });
                })
              );
              let readData = [];
              readList.map((val) => {
                let key = Object.keys(val)[0];
                if (val[key]) {
                  readData.push(key);
                }
              });

              let writeList = await Promise.all(
                list.write.map(async (val) => {
                  return await new Promise(async (resolve, reject) => {
                    let isread = await authorizer.can("write", val);
                    resolve({ [val]: isread });
                  });
                })
              );
              let writeData = [];
              writeList.map((val) => {
                let key = Object.keys(val)[0];
                if (val[key]) {
                  writeData.push(key);
                }
              });
              resolve({
                read: readData,
                write: writeData,
              });
            });
          })
        );
        let read = [],
          write = [];
        data.map((val) => {
          read = [...read, ...val.read];
          write = [...write, ...val.write];
        });
        return {
          read: read,
          write: write,
        };
      } else {
        return {
          read: [],
          write: [],
        };
      }
    } catch (e) {
      return {
        read: [],
        write: [],
      };
    }
  },
  permissionJson: (funName = []) => {
    // localStorage.setItem("permissionData", btoa(JSON.stringify(json)));
    try {
      let pj = sessionStorage.getItem("permissionData");
      pj = JSON.parse(atob(pj));
      if (!pj?.[funName[0]]?.component) return false;
      let returnJson = {
        read: [],
        write: [],
      };
      funName.map((sname) => {
        let data = pj[sname];
        if (!data) {
          return false;
        }
        Object.keys(data?.component).map((val) => {
          if (data?.component[val].permission.read) {
            returnJson.read.push(val);
          }
          if (
            data?.component[val].permission.write ||
            data.component[val].permission.update ||
            data.component[val].permission.delete
          ) {
            returnJson.write.push(val);
          }
          let compt = data.component[val].component;
          let json = Permissions.getAllComponentData(compt);
          returnJson = {
            read: [...returnJson.read, ...json.read],
            write: [...returnJson.write, ...json.write],
          };
        });
      });

      return returnJson;
    } catch (e) {
      return {
        read: [],
        write: [],
      };
    }
  },
  getAllComponentData: (compt) => {
    let returnJson = {
      read: [],
      write: [],
    };
    if (compt) {
      Object.keys(compt).map((val) => {
        if (compt[val].permission.read) {
          returnJson.read.push(val);
        }
        if (
          compt[val].permission.write ||
          compt[val].permission.update ||
          compt[val].permission.delete
        ) {
          returnJson.write.push(val);
        }
        let compt1 = compt[val].component;
        if (compt1) {
          let json = this.getAllComponentData(compt1);
          returnJson = {
            read: [...returnJson.read, ...json.read],
            write: [...returnJson.write, ...json.write],
          };
        }
      });
    }

    return returnJson;
  },
};

export default Permissions;
