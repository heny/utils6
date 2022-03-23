import assign from 'lodash/assign';
export function toFixed(value, precision) {
    if (typeof value === 'undefined')
        return '';
    return new Intl.NumberFormat(undefined, {
        useGrouping: false,
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
    }).format(value);
}
export function toMoney(value, precision, currency) {
    if (precision === void 0) { precision = 2; }
    if (typeof value === 'undefined')
        return '';
    var lang = currency ? currency[0] : undefined;
    var options = {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
    };
    if (currency) {
        assign(options, { style: 'currency', currency: currency[1] });
    }
    return new Intl.NumberFormat(lang, options).format(value);
}
export function toLocal(value, language) {
    if (typeof value === 'undefined')
        return '';
    return new Intl.NumberFormat(language, { notation: 'compact' }).format(value);
}
