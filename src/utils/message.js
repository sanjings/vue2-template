import { MessageBox } from 'element-ui';

/**
 * 错误信息弹框
 * @param {String} msg 错误信息
 */
export const msgTip = msg => {
  if (typeof msg === 'string' && msg) {
    MessageBox({
      title: msg,
      customClass: 'message-tip',
      showCancelButton: false,
      showConfirmButton: false,
      center: true,
      showClose: true
    });
  }
};
