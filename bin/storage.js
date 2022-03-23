import partialRight from 'lodash/partialRight';
import extend from 'lodash/extend';
export var STORAGE_KEY = 'session';
export function getStorage(key) {
    if (key === void 0) { key = STORAGE_KEY; }
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
export function setStorage(data, key) {
    if (key === void 0) { key = STORAGE_KEY; }
    var oldSession = getStorage();
    var newData = extend(oldSession, data);
    localStorage.setItem(key, encodeURIComponent(JSON.stringify(newData)));
}
export var removeStorage = function () { return localStorage.removeItem(STORAGE_KEY); };
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
export var localStore = {
    set: partialRight(setStorageItem, localStorage),
    get: partialRight(getStorageItem, localStorage),
    remove: partialRight(removeStorageItem, localStorage),
};
export var sessionStore = {
    set: partialRight(setStorageItem, sessionStorage),
    get: partialRight(getStorageItem, sessionStorage),
    remove: partialRight(removeStorageItem, sessionStorage),
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
export var ls = storageMap(localStorage);
export var ss = storageMap(sessionStorage);
