/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */

import axios from 'axios';
import qs from 'qs';
import { TIME_OUT, errorHandle } from './config';
import store from '@/store';
import { PUSH_TOKEN } from '@/store/actionTypes';

/* 请求超时时间 */
const TIME_OUT = 1000 * 20;

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 状态码
 */
const errorHandle = status => {
  // HTTP状态码判断
  if (status >= 500) {
    console.log('系统开小差了, 请联系技术管理员或稍后重试');
  } else {
    console.log('网络请求失败, 请刷新重试');
  }
};

export { TIME_OUT, errorHandle };

// 创建axios实例
const axiosInstance = axios.create({
  timeout: TIME_OUT,
  transformRequest: [
    function (data) {
      return qs.stringify(data);
    }
  ]
});

/**
 * 请求拦截器
 */
axiosInstance.interceptors.request.use(
  config => {
    config.cancelToken = new axios.CancelToken(cancel => {
      store.commit(PUSH_TOKEN, { cancelToken: cancel });
    });

    return config;
  },
  error => Promise.reject(error)
);

/**
 * 响应拦截器
 */
axiosInstance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      const statusCode = res.data.code;
      if (statusCode === 200) {
        return Promise.resolve(res.data.data);
      }
    }
    return Promise.reject(res.data.msg);
  },
  error => {
    if (error) {
      if (error.response) {
        // 请求已发出，但是不在2xx的范围
        errorHandle(error.response.status);
        return Promise.reject(error.response);
      } else if (error.message === '路由跳转取消请求') {
        return Promise.reject(error.message);
      }
    } else {
      console.log('网络请求失败, 请刷新重试');
      return Promise.reject(error);
    }
  }
);

const ajaxGet = (url, data, config) => axiosInstance.get(url, { params: data }, config);
const ajaxPost = (url, data, config) => axiosInstance.post(url, data, config);

export { ajaxGet, ajaxPost };

export default axiosInstance;
