interface BaseObject<T = any> {
  [key: string]: T
}

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
