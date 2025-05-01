'use client'

import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { formatDateTime } from '@/helpers/date'

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
      {currentTime ? formatDateTime(currentTime) : '00/00/0000, 00:00 PM'}
    </p>
  )
}
