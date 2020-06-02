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
  // const body = window.document.body;

  // 不可见
  // img.style.display = 'none';
  img.src = `${url}?${params(data)}`

  // body.appendChild(img);

  // window.setTimeout(function () {
  //   body.removeChild(img)
  // }, 50)
}
