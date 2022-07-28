import { signFigures } from '.';

function getDecimalMax(num, splitNumber = 5) {
  if (!num) return num;
  if (num > 10) return num;

  splitNumber = splitNumber / (num < 1 ? 100 : 10);
  const remainder = num % splitNumber;
  num = num - remainder + splitNumber;

  return signFigures(num);
}

/**
 * echarts 获取y轴最大值
 * @returns
 */
export default function yAxisMax(maxValue, splitNumber = 5) {
  if (Number.isNaN(maxValue / 1) || maxValue / 1 < 10) {
    return getDecimalMax(maxValue);
  }
  const max = Math.ceil(maxValue);
  const itemValue = `${Math.ceil(max / splitNumber)}`;
  const mins = Math.ceil(+itemValue / 10 ** (itemValue.length - 1));
  const item = mins * 10 ** (itemValue.length - 1);
  // item 需要是5的整数倍
  const res = Math.ceil(item / splitNumber) * splitNumber * splitNumber;
  return res;
}
