import {params} from './util'

export default function request (url, data) {
  if (window === undefined || window.document === undefined) {
    console && console.warn && console.warn('非浏览器环境，数据上报功能无法使用！')
    return;
  }

  if (data === undefined) {
    console && console.warn && console.warn('无数据需要上报！')
    return;
  }

  const img = window.document.createElement('img');
  img.src = `${url}?${params(data)}`
}
