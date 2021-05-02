import { PUSH_TOKEN, CLEAR_TOKEN } from './actionTypes';

export default {
  [PUSH_TOKEN](state, payload) {
    state.cancelTokenArr.push(payload.cancelToken);
  },
  [CLEAR_TOKEN](state) {
    state.cancelTokenArr.forEach(item => item('路由跳转取消请求'));
    state.cancelTokenArr = [];
  }
};
