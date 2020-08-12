/**
 * @overview 阿里云相关请求集合
 * */

import { axiosGet } from "@/service"
import { GET_OSS_IMG_UPLOAD_SIGN } from "./url"

export default {
   /**
    * 获取阿里云图片上传sign
    */
   getOssImgUploadSign() {
      return axiosGet(GET_OSS_IMG_UPLOAD_SIGN)
   }
}