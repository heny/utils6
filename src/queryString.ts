import _ from 'lodash'

/**
 * 从 {@link https://github.com/axios/axios/blob/master/lib/helpers/buildURL.js#L5}
 * axios 默认不转义“@ : $ , + [ ]”只能重写 paramsSerializer 进行修复
 * @type {(uriComponent: string) => string}
 */
const encode = encodeURIComponent

export function stringify(params: any) {
  let parts: any[] = []

  _.forEach(params, (val: any, key: string) => {
    if (val === null || typeof val === 'undefined' || val === '') {
      return
    }

    if (!_.isArray(val)) {
      val = [val]
    }

    _.forEach(val, (v: any) => {
      if (_.isDate(v)) {
        v = v.toISOString()
      } else if (_.isObject(v)) {
        v = JSON.stringify(v)
      }
      parts.push(`${encode(key)}=${encode(v)}`)
    })
  })
  return parts.join('&')
}

export function parse<T = BaseObject>(queryStr: string): T {
  if (!queryStr || !queryStr.length) {
    return {} as T
  }

  const queryObj = {}
  const items = queryStr.split('&')

  items.forEach((item) => {
    let [key, value] = item.split('=') as [string, any]
    if (value === 'true') value = true
    if (value === 'false') value = false

    if (queryObj[key]) {
      if (Array.isArray(queryObj[key])) {
        queryObj[key].push(value)
      } else {
        queryObj[key] = [queryObj[key], value]
      }
    } else {
      queryObj[key] = value
    }
  })
  return queryObj as T
}
