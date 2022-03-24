"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
function template(strings) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    return {
        toStringURL: function (dict) {
            var result = [strings[0]];
            keys.forEach(function (key, i) {
                var value;
                if (typeof key === 'string') {
                    value = lodash_1.default.get(dict, key, key);
                }
                else {
                    value = key === null || key === void 0 ? void 0 : key.toStringURL(dict);
                }
                result.push(value, strings[i + 1]);
            });
            return "" + result.join('');
        },
        getKeys: function () {
            return lodash_1.default.flatMap(keys, function (key) { return (typeof key === 'string' ? key : key === null || key === void 0 ? void 0 : key.getKeys()); });
        },
        strings: strings,
        getRaw: function () {
            var result = [strings[0]];
            keys.forEach(function (key, i) {
                result.push("${" + key + "}", strings[i + 1]);
            });
            return result.join('');
        },
        getOtherData: function (dict) {
            return lodash_1.default.omit(dict, keys);
        },
    };
}
exports.default = template;
