'use client'

import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }
  return date.toLocaleString('en-US', options)
}

export const DateTime = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null)

  useEffect(() => {
    setCurrentTime(new Date())
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000 * 60) // 60 sec

    return () => clearInterval(intervalId)
  }, [])

  return (
    <p className={styles.topMenu__time}>
      {currentTime ? formatDate(currentTime) : '00/00/0000, 00:00 PM'}
    </p>
  )
}
