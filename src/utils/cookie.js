/**
 * cookie增删改查方法
 * @description cookie.set('name', 'jordon', {hours: 1, domain: '.taobao.com', path: '/page'})
 **/

export default {
  set(name, value, options = {}) {
    const hours = options.hours || 24;
    const domain = options.domain;
    const path = options.path || '/';

    const date = new Date();
    date.setTime(date.getTime() + 60 * 60 * 1000 * hours);

    window.document.cookie =
      name + '=' + encodeURIComponent(value) + `${domain ? ';domain=' + domain : ''};path=${path};expires=` + date.toUTCString();
  },
  get(name) {
    let v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? decodeURIComponent(v[2]) : null;
  },
  delete(name, options = {}) {
    options.hours = -1;
    this.set(name, '', options);
  }
};
