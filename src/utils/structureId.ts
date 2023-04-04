export function structureId(array: string, num: number): string {
  let str = ''
  let str1 = array.substring(0, num)
  let str2 = array.substring(array.length - 3, array.length)
  return (str = str1 + '...' + str2)
}
