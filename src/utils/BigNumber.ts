import BigNumber from 'bignumber.js'

/**
 * BigNum 是一个静态方法类，封装了 BigNumber 库的方法，用于处理大数计算。
 */
export default class BigNum {
  /**
   * 将 num1 和 num2 相加并返回结果。
   * @param num1 加数 1。
   * @param num2 加数 2。
   * @returns num1 和 num2 相加的结果。
   */
  static add(
    num1: string | number | BigNumber,
    num2: string | number | BigNumber
  ): string {
    return new BigNumber(num1).plus(num2).toString()
  }

  /**
   * 将 num1 减去 num2 并返回结果。
   * @param num1 被减数。
   * @param num2 减数。
   * @returns num1 减去 num2 的结果。
   */
  static subtract(
    num1: string | number | BigNumber,
    num2: string | number | BigNumber
  ): string {
    return new BigNumber(num1).minus(num2).toString()
  }

  /**
   * 将 num1 和 num2 相乘并返回结果。
   * @param num1 因数 1。
   * @param num2 因数 2。
   * @returns num1 和 num2 相乘的结果。
   */
  static multiply(
    num1: string | number | BigNumber,
    num2: string | number | BigNumber
  ): string {
    return new BigNumber(num1).times(num2).toString()
  }

  /**
   * 将 num1 除以 num2 并返回结果。
   * @param num1 被除数。
   * @param num2 除数。
   * @returns num1 除以 num2 的结果。
   */
  static divide(
    num1: string | number | BigNumber,
    num2: string | number | BigNumber
  ): string {
    return new BigNumber(num1).dividedBy(num2).toString()
  }

  /**
   * 将 num1 的 num2 次方并返回结果。
   * @param num1 底数。
   * @param num2 指数。
   * @returns num1 的 num2 次方的结果。
   */
  static power(num1: string | number | BigNumber, num2: number): string {
    return new BigNumber(num1).pow(num2).toString()
  }

  /**
   * 返回 num 的平方根。
   * @param num 要求平方根的数。
   * @returns num 的平方根。
   */
  static sqrt(num: string | number | BigNumber): string {
    return new BigNumber(num).sqrt().toString()
  }

  /**
   * 比较 num1 是否大于 num2。
   * @param num1 要比较的第一个数。
   * @param num2 要比较的第二个数。
   * @returns 如果 num1 大于 num2，则返回 true；否则返回 false。
   */
  static gte(
    num1: string | number | BigNumber,
    num2: string | number | BigNumber
  ): boolean {
    return new BigNumber(num1).gte(num2)
  }
  /**
    
    比较 num1 是否小于 num2。
    @param num1 要比较的第一个数。
    @param num2 要比较的第二个数。
    @returns 如果 num1 小于 num2，则返回 true；否则返回 false。
    */
  static lt(
    num1: string | number | BigNumber,
    num2: string | number | BigNumber
  ): boolean {
    return new BigNumber(num1).lt(num2)
  }
  /**
    
    比较 num1 是否小于或等于 num2。
    @param num1 要比较的第一个数。
    @param num2 要比较的第二个数。
    @returns 如果 num1 小于或等于 num2，则返回 true；否则返回 false。
    */
  static lte(
    num1: string | number | BigNumber,
    num2: string | number | BigNumber
  ): boolean {
    return new BigNumber(num1).lte(num2)
  }
  /**
    
    比较 num1 是否等于 num2。
    @param num1 要比较的第一个数。
    @param num2 要比较的第二个数。
    @returns 如果 num1 等于 num2，则返回 true；否则返回 false。
    */
  static isEqual(
    num1: string | number | BigNumber,
    num2: string | number | BigNumber
  ): boolean {
    return new BigNumber(num1).isEqualTo(num2)
  }
  /**
    
    判断 num 是否为负数。
    @param num 要判断的数。
    @returns 如果 num 是负数，则返回 true；否则返回 false。
    */
  static isNegative(num: string | number | BigNumber): boolean {
    return new BigNumber(num).isNegative()
  }
  /**
    
    判断 num 是否为零。
    @param num 要判断的数。
    @returns 如果 num 是零，则返回 true；否则返回 false。
    */
  static isZero(num: string | number | BigNumber): boolean {
    return new BigNumber(num).isZero()
  }
}

// 调用例
// import BigNum from 'path/to/BigNum';

// const num1 = '12345678901234567890';
// const num2 = '98765432109876543210';
// const sum = BigNum.add(num1, num2);
// console.log(sum); // 输出 "111111111111111111100"
