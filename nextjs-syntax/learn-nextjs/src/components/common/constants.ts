export function formatDate(date: Date) {
  // Get day, month, and year

  let day: number | string = date.getDate()
  let month: number | string = date.getMonth() + 1 // Months are zero-based
  let year = date.getFullYear()

  // Pad day and month with leading zeros if needed
  day = day < 10 ? '0' + day : day
  month = month < 10 ? '0' + month : month

  // Return the formatted date
  return `${day}/${month}/${year}`
}
