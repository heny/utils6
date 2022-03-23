"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ss = exports.ls = exports.sessionStore = exports.localStore = exports.removeStorage = exports.setStorage = exports.getStorage = exports.STORAGE_KEY = void 0;
var partialRight_1 = __importDefault(require("lodash/partialRight"));
var extend_1 = __importDefault(require("lodash/extend"));
exports.STORAGE_KEY = 'session';
function getStorage(key) {
    if (key === void 0) { key = exports.STORAGE_KEY; }
    var session = localStorage.getItem(key);
    var result = {};
    try {
        result = JSON.parse(decodeURIComponent(session));
    }
    catch (_a) {
        result = {};
    }
    return result;
}
exports.getStorage = getStorage;
function setStorage(data, key) {
    if (key === void 0) { key = exports.STORAGE_KEY; }
    var oldSession = getStorage();
    var newData = (0, extend_1.default)(oldSession, data);
    localStorage.setItem(key, encodeURIComponent(JSON.stringify(newData)));
}
exports.setStorage = setStorage;
var removeStorage = function () { return localStorage.removeItem(exports.STORAGE_KEY); };
exports.removeStorage = removeStorage;
var setStorageItem = function (key, val, storage) {
    storage.setItem(key, encodeURIComponent(JSON.stringify(val)));
};
var getStorageItem = function (key, storage) {
    var value = decodeURIComponent(storage.getItem(key));
    try {
        return JSON.parse(value);
    }
    catch (e) {
        return value;
    }
};
var removeStorageItem = function (key, storage) {
    storage.removeItem(key);
};
exports.localStore = {
    set: (0, partialRight_1.default)(setStorageItem, localStorage),
    get: (0, partialRight_1.default)(getStorageItem, localStorage),
    remove: (0, partialRight_1.default)(removeStorageItem, localStorage),
};
exports.sessionStore = {
    set: (0, partialRight_1.default)(setStorageItem, sessionStorage),
    get: (0, partialRight_1.default)(getStorageItem, sessionStorage),
    remove: (0, partialRight_1.default)(removeStorageItem, sessionStorage),
};
var storageMap = function (storage) { return ({
    get: function (key) {
        try {
            return JSON.parse(storage.getItem(key));
        }
        catch (err) {
            return storage.getItem(key);
        }
    },
    set: function (key, value) {
        storage.setItem(key, JSON.stringify(value));
    },
    remove: function (key) {
        storage.removeItem(key);
    },
    clear: function () {
        storage.clear();
    },
}); };
exports.ls = storageMap(localStorage);
exports.ss = storageMap(sessionStorage);
