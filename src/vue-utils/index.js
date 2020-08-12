const VueUtils = {
  install(Vue) {
    Object.defineProperty(Vue.prototype, "$utils", {
      get() {
        return this;
      },
    });
  },
};
export default VueUtils;
