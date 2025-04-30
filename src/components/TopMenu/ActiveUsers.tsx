'use client'

import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import pusherClient from '@/lib/pusher'

interface PusherMembers {
  count: number
  members: Record<string, unknown>
}

export const ActiveUsers = () => {
  const [activeConnections, setActiveConnections] = useState(0)

  useEffect(() => {
    const channel = pusherClient.subscribe('presence-sessions')

    channel.bind('pusher:subscription_succeeded', (members: PusherMembers) => {
      setActiveConnections(members.count)
    })

    channel.bind('pusher:member_removed', () => {
      setActiveConnections((prev) => Math.max(0, prev - 1))
    })

    channel.bind('pusher:member_added', () => {
      setActiveConnections((prev) => prev + 1)
    })

    return () => {
      channel.unbind_all()
      pusherClient.unsubscribe('presence-sessions')
    }
  }, [])

  return (
    <p className={styles.topMenu__activeUsers}>
      Active sessions: {activeConnections ? activeConnections : '*'}
    </p>
  )
}
