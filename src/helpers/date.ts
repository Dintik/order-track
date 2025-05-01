export const formatDateTime = (date: Date | string) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }
  return dateObj.toLocaleString('en-US', options)
}

export const formatDateLong = (date: Date | string) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  const day = String(dateObj.getDate()).padStart(2, '0')
  const month = dateObj.toLocaleString('en-US', { month: 'long' })
  const year = dateObj.getFullYear()

  return `${day}/${month}/${year}`
}

export const formatDateShort = (date: Date | string) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  const options: Intl.DateTimeFormatOptions = {
    month: '2-digit',
    day: '2-digit'
  }
  return dateObj.toLocaleString('en-US', options)
}
