"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.getBytes = exports.isIE = exports.isMobileOrPc = exports.prefix = exports.storage = exports.queryString = exports.formatNumber = void 0;
exports.formatNumber = __importStar(require("./formatNumber"));
exports.queryString = __importStar(require("./queryString"));
exports.storage = __importStar(require("./storage"));
var prefix_1 = require("./prefix");
Object.defineProperty(exports, "prefix", { enumerable: true, get: function () { return __importDefault(prefix_1).default; } });
function isMobileOrPc() {
    return /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent);
}
exports.isMobileOrPc = isMobileOrPc;
function isIE() {
    return navigator.appVersion.toLowerCase().indexOf('msie') != -1;
}
exports.isIE = isIE;
function getBytes(str) {
    var bytes = str.length;
    for (var i = bytes; i--;) {
        if (str.charCodeAt(i) > 255) {
            bytes++;
        }
    }
    return bytes;
}
exports.getBytes = getBytes;
function types(key) {
    return Object.prototype.toString.call(key).slice(8, -1);
}
exports.types = types;
