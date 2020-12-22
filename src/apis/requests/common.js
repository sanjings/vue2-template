/**
 * @overview 公共相关请求集合
 * */

import { ajaxGet } from '../ajax';
import { GET_PROVINCE_CITY } from '../url';

/**
 * 获取省份和城市
 * @param {Object} params
 */
const getProvinceCity = params => {
  return ajaxGet(GET_PROVINCE_CITY, params);
};

export { getProvinceCity };
