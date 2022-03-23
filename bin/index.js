export function isMobileOrPc() {
    return /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent);
}
export function isIE() {
    return navigator.appVersion.toLowerCase().indexOf('msie') != -1;
}
export function getBytes(str) {
    var bytes = str.length;
    for (var i = bytes; i--;) {
        if (str.charCodeAt(i) > 255) {
            bytes++;
        }
    }
    return bytes;
}
export function types(key) {
    return Object.prototype.toString.call(key).slice(8, -1);
}
