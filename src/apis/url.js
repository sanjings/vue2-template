/**
 * @overview 接口统一管理
 * */

const BASE_API_URL = process.env.VUE_APP_BASE_API_URL;

/* 公共接口 */
export const GET_PROVINCE_CITY = BASE_API_URL + '/province/v2/queryProvinceCity', // 查询省份及城市

/* 阿里云相关 */
export const GET_OSS_IMG_UPLOAD_SIGN = BASE_API_URL + '/tool/v1/get/oss/upload/sign', // 获取阿里云图片上传sign
