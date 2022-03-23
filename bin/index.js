"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.getBytes = exports.isIE = exports.isMobileOrPc = void 0;
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
