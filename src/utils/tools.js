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
  var type = typeof (val);
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
  return decodeURIComponent((new RegExp('[?|&]'+ key + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [,""])[1].replace(/\+/g, '%20')) || null;
};

/**
 * 防抖函数
 * @params {Function} 要执行的函数
 * @params {Number} 延迟执行毫秒数
 * @params {Boolean} 是否立即执行
 * @return {Function}
 */
function debounce (fn, waitTime = 300, immediate) {
  let timer = null;
  return function () {
    var _this = this,
    args = arguments;
    timer && clearTimeout(timer)
    if (immediate) {
      var callNow = !timer;
      timer = setTimeout(function(){
        timer = null;
      }, waitTime)
    if (callNow) {
      fn.apply(_this, args);
    }
    } else {
      timer = setTimeout(function(){
        fn.apply(_this, args);
      }, waitTime)
    }  
  }
};

/**
 * 节流函数
 * @params {Function} fn 要执行的函数
 * @params {Number} waitTime 间隔执行的时间
 * @params {Boolean} delay 是否延迟执行
 * @return {Function}
 */
function throttle (fn, waitTime = 300, delay) {
  let timer = null, preTime = 0;
  return function() {
    let _self = this, args = arguments;
    if (delay) {
      if(!timer){
        timer = setTimeout(function() {
          timer = null;
          fn.apply(_self, args);
        }, waitTime)
      }
    } else {
      var nowTime = new Date().getTime();
      if (nowTime - preTime >= waitTime) {
        fn.apply(_self, args);
        preTime = nowTime;
      }
    }
  }
}

export {
  typeOf,
  getUrlKey,
  debounce,
  throttle
}