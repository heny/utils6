import _ from 'lodash'
import classnames from 'classnames'

/**
 * const prefixClassName = prefix('className')
 * <div className={prefixClassName('header')}></div>
 */
export default _.curry(function prefix(pre: string, className: string | string[]) {
  if (!pre || !className) {
    return ''
  }

  if (_.isArray(className)) {
    return classnames(className.filter((name) => !!name).map((name) => `${pre}-${name}`))
  }

  return `${pre}-${className}`
})
