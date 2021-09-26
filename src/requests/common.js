/**
 * @overview 公共相关请求集合
 * */

import { ajaxGet } from '@/utils/http';

/**
 * 获取省份和城市
 * @param {Object} params
 */
export const httpGetAreas = () => {
  return ajaxGet('/province');
};
