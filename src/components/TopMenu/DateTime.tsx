'use client'

import { useEffect, useState } from 'react'
import styles from './TopMenu.module.scss'

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

  if (!currentTime) return null

  return <div className={styles.topMenu__time}>{formatDate(currentTime)}</div>
}
