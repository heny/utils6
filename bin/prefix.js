"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var classnames_1 = __importDefault(require("classnames"));
exports.default = lodash_1.default.curry(function prefix(pre, className) {
    if (!pre || !className) {
        return '';
    }
    if (lodash_1.default.isArray(className)) {
        return (0, classnames_1.default)(className.filter(function (name) { return !!name; }).map(function (name) { return pre + "-" + name; }));
    }
    return pre + "-" + className;
});
