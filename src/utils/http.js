import axios from 'axios';
import store from '@/store/index';
import { TIME_OUT, errorHttpHandle } from '@/configs/http';
import { PUSH_AJAXING, CLEAR_AJAXING, EXIT_LOGIN } from '@/store/actionTypes';

/**
 * 创建axios实例
 */
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: TIME_OUT
});

/**
 * 请求拦截器
 */
axiosInstance.interceptors.request.use(
  config => {
    config.url += config.url?.includes('?') ? `&f=${new Date().getTime()}` : `?f=${new Date().getTime()}`;
    config.cancelToken = new axios.CancelToken(cancel => {
      store.commit(PUSH_AJAXING, cancel);
    });
    return config;
  },
  error => Promise.reject(error)
);

/**
 * 响应拦截处理
 */
axiosInstance.interceptors.response.use(
  res => {
    const retData = res.data;
    if (res.status === 200) {
      if (retData.code === 200) {
        return Promise.resolve(retData.data);
      } else if (retData.code === 301) {
        store.commit(EXIT_LOGIN);
        return Promise.reject('登录过期');
      }
    }
    return Promise.reject(retData.msg || '请求失败');
  },
  error => {
    if (error && error.response) {
      // 请求已发出，但是不在2xx的范围
      errorHttpHandle(error.response.status);
      return Promise.reject(error.response);
    }
    store.commit(CLEAR_AJAXING); // 清空请求
    errorHttpHandle('网络请求失败, 请刷新重试');
    return Promise.reject(error);
  }
);

const httpGet = (url, params) => axiosInstance.get(url, { params });
const httpPost = (url, params, config) => axiosInstance.post(url, params, config);

export { httpGet, httpPost };

export default axiosInstance;
