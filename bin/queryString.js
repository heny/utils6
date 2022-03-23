"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.stringify = void 0;
var lodash_1 = __importDefault(require("lodash"));
var encode = encodeURIComponent;
function stringify(params) {
    var parts = [];
    lodash_1.default.forEach(params, function (val, key) {
        if (val === null || typeof val === 'undefined' || val === '') {
            return;
        }
        if (!lodash_1.default.isArray(val)) {
            val = [val];
        }
        lodash_1.default.forEach(val, function (v) {
            if (lodash_1.default.isDate(v)) {
                v = v.toISOString();
            }
            else if (lodash_1.default.isObject(v)) {
                v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
        });
    });
    return parts.join('&');
}
exports.stringify = stringify;
function parse(queryStr) {
    if (!queryStr || !queryStr.length) {
        return {};
    }
    var queryObj = {};
    var items = queryStr.split('&');
    items.forEach(function (item) {
        var _a = item.split('='), key = _a[0], value = _a[1];
        if (value === 'true')
            value = true;
        if (value === 'false')
            value = false;
        if (queryObj[key]) {
            if (Array.isArray(queryObj[key])) {
                queryObj[key].push(value);
            }
            else {
                queryObj[key] = [queryObj[key], value];
            }
        }
        else {
            queryObj[key] = value;
        }
    });
    return queryObj;
}
exports.parse = parse;
