const errorInterceptor = {
  fulfilled: (response) => {
    return response;
  },
  rejected: (error) => {
    if (error.message.includes("timeout of")) {
      error.message = "请求超时,请重试尝试!";
    }
    if (!error.response) return Promise.reject(error);
    switch (error.response.status) {
      case 400:
        error.message = "请求错误";
        break;
      case 401:
        error.message = "未授权，请重新登录";
        break;
      case 403:
        error.message = "拒绝访问";
        break;
      case 404:
        error.message = "请求出错";
        break;
      case 408:
        error.message = "请求超时";
        break;
      case 500:
        error.message = "服务器错误";
        break;
      case 501:
        error.message = "服务未实现";
        break;
      case 502:
        error.message = "网络错误";
        break;
      case 503:
        error.message = "服务不可用";
        break;
      case 504:
        error.message = "网络超时,请重试尝试";
        break;
      case 505:
        error.message = "HTTP版本不受支持";
        break;
      default:
        error.message = `连接出错(${error.response.status})!`;
    }
    return Promise.reject(error);
  },
};
export default errorInterceptor;
