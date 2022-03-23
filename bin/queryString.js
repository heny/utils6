import _ from 'lodash';
var encode = encodeURIComponent;
export function stringify(params) {
    var parts = [];
    _.forEach(params, function (val, key) {
        if (val === null || typeof val === 'undefined' || val === '') {
            return;
        }
        if (!_.isArray(val)) {
            val = [val];
        }
        _.forEach(val, function (v) {
            if (_.isDate(v)) {
                v = v.toISOString();
            }
            else if (_.isObject(v)) {
                v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
        });
    });
    return parts.join('&');
}
export function parse(queryStr) {
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
