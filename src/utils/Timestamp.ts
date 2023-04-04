export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const padStart = (value: number) => String(value).padStart(2, '0')
  return `${year}/${padStart(month)}/${padStart(day)} ${padStart(
    hour
  )}:${padStart(minute)}:${padStart(second)}`
}

// 例子：使用
// console.log(formatTimestamp(1617548026)); // 输出：2021/04/04 09:07:06
// console.log(formatTimestamp(1617548026000)); // 输出：2021/04/04 09:07:06
