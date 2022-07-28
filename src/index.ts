export * as formatNumber from './formatNumber'
export * as queryString from './queryString'
export * as storage from './storage'
import _ from 'lodash';
export { default as prefix } from './prefix'
export { default as templateUrl } from './template'
export { default as yAxisMax } from './yAxisMax'

/**
 * use toDefault(1, '{v}M')
 * use toDefault(1, (v) => `%sM`)
 * @name 转换默认值
 * @returns
 */
export function toDefault(val, callback, defaultVal = '--') {
  if (val && callback) {
    if (_.isFunction(callback)) return callback(val);
    if (_.isString(callback)) return callback.replace('%s', val);
  }
  return _.isNil(val) ? defaultVal : val;
}

/**
 * @name 处理数字精度
 * signFigures(0.1 + 0.2) // 0.3
 * signFigures(0.56 * 100) // 56
 * signFigures(0.57 * 100) // 57
 */
export function signFigures(num, rank = 6) {
  if (!num) return num;
  const sign = num / Math.abs(num);
  const number = num * sign;
  const temp = rank - 1 - Math.floor(Math.log10(number));

  let ans;
  if (temp > 0) {
    ans = parseFloat(number.toFixed(temp));
  } else if (temp < 0) {
    ans = Math.round(number / Math.pow(10, temp)) * temp;
  } else {
    ans = Math.round(number);
  }
  return ans * sign;
}

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
  for (var i = bytes; i--;) {
    if (str.charCodeAt(i) > 255) {
      bytes++
    }
  }
  return bytes
}

export function types(key): Types {
  return Object.prototype.toString.call(key).slice(8, -1)
}
