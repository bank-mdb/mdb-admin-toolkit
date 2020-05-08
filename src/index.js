import VueAxios from "./vue-axios/index.js";
import VueBus from "./vue-bus/index.js";
import VueStorage from "./vue-storage/index.js";
let utils = { VueAxios, VueBus, VueStorage };

// const modules = require.context("./", true, /.js$/);
// console.log("", "modules.keys()", modules.keys());

// modules.keys().forEach((modulesKey) => {
//   let attr = modulesKey
//     .replace("./", "")
//     .replace(".js", "")
//     .replace("/index", "");
//   if (haveDefault.includes(attr)) {
//     utils[attr] = modules(modulesKey).default;
//   } else {
//     utils[attr] = modules(modulesKey);
//   }
// });
module.exports = utils;
