import BigNumber from 'bignumber.js'

export function truncateDecimal(
  num: string | number,
  decimalPlaces: number
): string {
  const bigNum = new BigNumber(num)
  const fixedNum = bigNum.toFixed(decimalPlaces, BigNumber.ROUND_DOWN)
  return fixedNum.toString()
}

console.log(truncateDecimal(123.456789, 2)) // output: '123.45'
console.log(truncateDecimal('123.456789', 2)) // output: '123.45'
console.log(truncateDecimal('123.456789', 4)) // output: '123.4567'
console.log(truncateDecimal('123.456789', 6)) // output: '123.456789'
