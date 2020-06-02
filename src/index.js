import request from "./request";
import { getCookie } from "./util";

class Report {
  constructor(data, options) {
    this.data = Object.assign({}, data);
    this.opts = Object.assign({}, options);
  }

  send(data, options) {
    const opts = Object.assign({}, this.opts, options);
    const reportData = Object.assign({}, this.data, data);

    if (!opts.url) {
      console && console.warn && console.warn('检测到没有url配置，故无法上报，请先配置url选项')
      return;
    }
    request(opts.url, reportData); // 发请求，上报数据
  }

  static getCookie(name) {
    return getCookie(name);
  }
}

export default Report;
