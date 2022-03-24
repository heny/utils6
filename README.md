## formatNumber
- `toFixed`  解决Number.toFixed四舍五入的问题
- `toMoney`  转化为金额格式，带有千位分隔符
- `toLocal`  转化为本地格式，带有单位

## queryString
- `parse`  解析url参数
- `stringify`  将对象转化为url参数

## storage
- `ls` localStorage的封装
- `ss` sessionStorage的封装
- `localStore` localStorage带encode的封装
- `sessionStore` sessionStorage带encode的封装
- `getStorage` 获取默认的storage
- `setStorage` 设置默认的storage
- `removeStorage` 清空默认的storage

## templateUrl
```js
var obj = { id: '1', type: 'edit', age: 123 };
template`/home/${'id'}/detail/${'type'}`.toStringURL(obj); // ==> /home/1/detail/edit
template`/home/${'id'}/detail/${'type'}`.getKeys(); // ==> ['id', 'type']
template`/home/${'id'}/detail/${'type'}`.getRaw(); // ==> '/home/{id}/detail/{type}'
template`/home/${'id'}/detail/${'type'}`.getOtherData(obj); // ==> { age: 123 }
```

## index
- `isMobileOrPc` 判断是否是移动端
- `isIE` 是否在ie浏览器
- `getBytes` 返回字节
- `types` 判断类型
- `prefix`  react写class前缀的封装