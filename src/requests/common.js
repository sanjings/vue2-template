/**
 * @overview 公共相关请求集合
 * */

import { ajaxGet } from '@/utils/ajax';
import { GET_PROVINCE_CITY } from '@/config/api';

/**
 * 获取省份和城市
 * @param {Object} params
 */
export const httpGetProvinceCity = params => {
  return ajaxGet(GET_PROVINCE_CITY, params);
};
