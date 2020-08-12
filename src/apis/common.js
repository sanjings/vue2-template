/**
 * @overview 公共相关请求集合
 * */

import { axiosGet } from "@/service"
import { GET_PROVINCE_CITY } from "./url"

export {
   /**
    * 获取省份和城市
    * @param {Object} params 
    */
   getProvinceCity(params) {
      return axiosGet(GET_PROVINCE_CITY, params)
   }
}