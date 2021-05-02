/**
 * 判断元素的数据类型，弥补系统内置的typeof的不足
 * @param {All} val 被判断的元素
 * @return {String} 返回元素的数据类型
 */
const typeOf = val => {
  const res = {
    '[object Array]': 'Array',
    '[object Object]': 'Object',
    '[object Number]': 'object Number',
    '[object String]': 'object String',
    '[object Boolean]': 'object Boolean',
    '[object Date]': 'object Boolean',
    '[object RegExp]': 'object Boolean'
  };
  if (val === undefined) {
    return '请传参数';
  }
  var type = typeof val;
  var toStr = Object.prototype.toString;
  if (val === null) {
    return 'null';
  } else if (type === 'object') {
    var ret = toStr.call(val);
    return res[ret];
  } else {
    return type;
  }
};

/**
 * 获取url的参数
 * @param {String}} key 参数名
 * @return {String} 参数值
 */
const getUrlKey = key => {
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
  const r = window.location.search.substr(1).match(reg);
  if (r !== null) return unescape(r[2]);
  return null;
};

/**
 * 防抖函数
 * @params {Function} fn 要执行的函数
 * @params {Number} delayTime 延迟执行的时间
 * @return {Function}
 */
export const debounce = (fn, delayTime = 300) => {
  let timer = null;
  return function (...args) {
    const _this = this;

    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, delayTime);
  };
};

/**
 * 节流函数
 * @params {Function} fn 要执行的函数
 * @params {Number} waitTime 间隔执行的时间
 * @return {Function}
 */
export const throttle = (fn, waitTime) => {
  let preTime = 0;
  return function (...args) {
    const nowTime = new Date().getTime();

    if (nowTime - preTime >= waitTime) {
      fn.apply(this, args);
      preTime = nowTime;
    }
  };
};

export { typeOf, getUrlKey, debounce, throttle };
