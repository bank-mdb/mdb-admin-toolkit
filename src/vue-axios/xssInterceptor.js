import xss from "xss";
const isUploadFileType = (config) => {
  return config.headers["Content-Type"] === "multipart/form-data";
};

const hasIgnoreXss = (config) => {
  return config.headers["ignore-xss"];
};

const deepObj = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      deepObj(obj[key]);
    } else {
      obj[key] = xss(obj[key]);
    }
  }
};
const xssInterceptor = {
  fulfilled: (config) => {
    if (isUploadFileType(config) || hasIgnoreXss(config)) {
      deepObj(config.data);
    }
    return config;
  },
  rejected: (error) => {
    return Promise.reject(error);
  },
};

export default xssInterceptor;
