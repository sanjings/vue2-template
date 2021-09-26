import { PUSH_AJAXING, CLEAR_AJAXING, EXIT_LOGIN } from './actionTypes';

export default {
  [PUSH_AJAXING](state, payload) {
    state.ajaxingArr.push(payload.cancelToken);
  },
  [CLEAR_AJAXING](state) {
    state.ajaxingArr.forEach(item => item('路由跳转取消请求'));
    state.ajaxingArr = [];
  },
  [EXIT_LOGIN](state) {
    state.userInfo = {};
  }
};
