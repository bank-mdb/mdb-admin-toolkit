/**
 *  双引好更改为单引号
 * @param {*} obj
 */
const replacePropertiesQuotation = (obj) => {
  let objType = Object.prototype.toString.call(obj);
  if (objType === "[object String]") {
    obj = obj.trim().replace(/"/g, "'");
  } else if (objType === "[object Object]" || objType === "[object Array]") {
    for (let key in obj) {
      let itemType = Object.prototype.toString.call(obj[key]);
      if (itemType === "[object String]") {
        obj[key] = obj[key].trim().replace(/"/g, "'");
      } else if (itemType === "[object Array]" && obj[key].length > 0) {
        obj[key].forEach((o) => replacePropertiesQuotation(o));
      } else if (itemType === "[object Object]") {
        replacePropertiesQuotation(obj[key]);
      }
    }
  }

  return obj;
};

const replaceQuotesInterceptor = {
  fulfilled: (config) => {
    if (config.data) {
      config.data = replacePropertiesQuotation(config.data);
    }
    return config;
  },
  rejected: (error) => {
    return Promise.reject(error);
  },
};

export default replaceQuotesInterceptor;
