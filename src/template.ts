import _ from 'lodash'

/**
 * @name 转化url
 *
 * var obj = { id: '1', type: 'edit', age: 123 };
 * @toStringURL template`/home/${'id'}/detail/${'type'}`.toStringURL(obj); ==> /home/1/detail/edit
 * @getKeys template`/home/${'id'}/detail/${'type'}`.getKeys(); ==> ['id', 'type']
 * @getRaw template`/home/${'id'}/detail/${'type'}`.getRaw(); ==> '/home/{id}/detail/{type}'
 * @getOtherData template`/home/${'id'}/detail/${'type'}`.getOtherData(obj); ==> { age: 123 }
 */
export default function template(strings: TemplateStringsArray, ...keys: Url[]): APIDictObject {
  return {
    toStringURL: (dict: BaseObject<any>): string => {
      let result = [strings[0]]
      keys.forEach((key, i): void => {
        let value: string
        if (typeof key === 'string') {
          value = _.get(dict, key, key)
        } else {
          value = key?.toStringURL(dict)
        }
        result.push(value, strings[i + 1])
      })
      return `${result.join('')}`
    },
    getKeys: (): string[] =>
      _.flatMap(keys, (key) => (typeof key === 'string' ? key : key?.getKeys())),
    strings,
    getRaw: (): string => {
      let result = [strings[0]]
      keys.forEach((key, i) => {
        // eslint-disable-next-line no-useless-escape
        result.push(`$\{${key}\}`, strings[i + 1])
      })
      return result.join('')
    },
    getOtherData: (dict?: BaseObject): BaseObject => {
      return _.omit(dict, keys as any)
    },
  }
}
