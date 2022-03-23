import _ from 'lodash';
import classnames from 'classnames';
export default _.curry(function prefix(pre, className) {
    if (!pre || !className) {
        return '';
    }
    if (_.isArray(className)) {
        return classnames(className.filter(function (name) { return !!name; }).map(function (name) { return pre + "-" + name; }));
    }
    return pre + "-" + className;
});
