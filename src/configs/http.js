import { msgTip } from '@/utils/message';

export const TIME_OUT = 30;

/**
 * http请求错误后的统一处理
 * @param error
 */
export const errorHttpHandle = error => {
  if (!error) return;
  if (typeof error === 'string') {
    msgTip('网络请求失败, 请刷新重试');
  } else {
    // HTTP状态码判断
    if (error > 500) {
      msgTip('系统开小差了, 请联系技术管理员或稍后重试');
    } else {
      msgTip('网络请求失败, 请刷新重试');
    }
  }
};
