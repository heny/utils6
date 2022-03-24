export * as formatNumber from './formatNumber'
export * as queryString from './queryString'
export * as storage from './storage'
export { default as prefix } from './prefix'
export { default as templateUrl } from './template'

/**
 * 判断是移动端还是pc端
 * true表示移动端
 * false表示pc端
 */
export function isMobileOrPc(): boolean {
  return /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)
}

/**
 * 判断是不是IE浏览器
 * IE返回true
 */
export function isIE(): boolean {
  return navigator.appVersion.toLowerCase().indexOf('msie') != -1
}

/**
 * 返回字节数
 * @returns number
 */
export function getBytes(str): number {
  var bytes = str.length
  for (var i = bytes; i--; ) {
    if (str.charCodeAt(i) > 255) {
      bytes++
    }
  }
  return bytes
}

export function types(key): Types {
  return Object.prototype.toString.call(key).slice(8, -1)
}
