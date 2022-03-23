"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLocal = exports.toMoney = exports.toFixed = void 0;
var assign_1 = __importDefault(require("lodash/assign"));
function toFixed(value, precision) {
    if (typeof value === 'undefined')
        return '';
    return new Intl.NumberFormat(undefined, {
        useGrouping: false,
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
    }).format(value);
}
exports.toFixed = toFixed;
function toMoney(value, precision, currency) {
    if (precision === void 0) { precision = 2; }
    if (typeof value === 'undefined')
        return '';
    var lang = currency ? currency[0] : undefined;
    var options = {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
    };
    if (currency) {
        (0, assign_1.default)(options, { style: 'currency', currency: currency[1] });
    }
    return new Intl.NumberFormat(lang, options).format(value);
}
exports.toMoney = toMoney;
function toLocal(value, language) {
    if (typeof value === 'undefined')
        return '';
    return new Intl.NumberFormat(language, { notation: 'compact' }).format(value);
}
exports.toLocal = toLocal;
