import dayjs from 'dayjs';

/**
 * 格式化时间
 * @param {string | number | object} date
 * @param {string} type 默认为：年-月-日
 * @return {string} 返回时间字符串
 */
export const formatTime = (date, type = 'YYYY-MM-DD') => {
  if (!date) return '';
  return dayjs(date).format(type);
};
