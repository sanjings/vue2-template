/**
 * @overview 阿里云相关请求集合
 * */

import { ajaxGet } from '@/utils/http';

/**
 * 获取阿里云图片上传sign
 */
export const httpGetOssImgUploadSign = () => {
  return ajaxGet('/get/oss/upload/sign');
};
