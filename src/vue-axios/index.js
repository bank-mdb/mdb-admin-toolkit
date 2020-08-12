/*
 * @Author: wulin
 */
import errorInterceptor from "./errorInterceptor.js";
import xssInterceptor from "./xssInterceptor.js";
import replaceQuotesInterceptor from "./replaceQuotesInterceptor.js";
const VueAxios = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, instance) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    if (!instance) {
      // eslint-disable-next-line no-console
      console.error("You have to install axios");
      return;
    }

    //request interceptors
    instance.interceptors.request.use(
      xssInterceptor.fulfilled,
      xssInterceptor.rejected
    );
    instance.interceptors.request.use(
      replaceQuotesInterceptor.fulfilled,
      replaceQuotesInterceptor.rejected
    );
    //response interceptors
    instance.interceptors.response.use(
      errorInterceptor.fulfilled,
      errorInterceptor.rejected
    );

    Vue.axios = instance;
    Vue.$http = instance;

    Object.defineProperties(Vue.prototype, {
      axios: {
        get: function get() {
          return instance;
        },
      },
      $http: {
        get: function get() {
          return instance;
        },
      },
    });
  },
};

export default VueAxios;
