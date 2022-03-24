interface BaseObject<T = any> {
  [key: string]: T
}

interface TemplateStringsArray extends ReadonlyArray<string> {
  readonly raw: readonly string[]
}

interface APIDictObject {
  toStringURL: (dict: BaseObject) => string
  getKeys: () => string[]
  strings: TemplateStringsArray
  getRaw: () => string
  getOtherData: (dict: BaseObject) => BaseObject
}

type Url = string | APIDictObject

type Types =
  | 'Object'
  | 'Array'
  | 'String'
  | 'Number'
  | 'Boolean'
  | 'Function'
  | 'RegExp'
  | 'Date'
  | 'Error'
  | 'Symbol'
  | 'Null'
  | 'Undefined'
