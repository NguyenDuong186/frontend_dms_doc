export function formatDateTime(dateString?: any): string | null {
  if (!dateString) return null
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return day + '/' + month + '/' + year
}
