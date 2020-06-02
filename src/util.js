export function params (data) {
  return Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&');
}

// 空函数
export function noop () {
}

export function getCookie (name) {
  let value = '; ' + window.document.cookie;
  let parts = value.split('; ' + name + '=');
  if (parts.length == 2) return parts.pop().split(';').shift();

  return ''
}
