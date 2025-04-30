import { NextResponse } from 'next/server'
import Pusher from 'pusher'
import { v4 as uuidv4 } from 'uuid'

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true
})

export async function POST(request: Request) {
  try {
    const text = await request.text()

    const params = new URLSearchParams(text)
    const socket_id = params.get('socket_id')
    const channel_name = params.get('channel_name')

    if (!socket_id || !channel_name) {
      return NextResponse.json(
        { message: 'Missing required parameters' },
        { status: 400 }
      )
    }

    if (
      !process.env.PUSHER_APP_ID ||
      !process.env.PUSHER_KEY ||
      !process.env.PUSHER_SECRET ||
      !process.env.PUSHER_CLUSTER
    ) {
      return NextResponse.json(
        { message: 'Missing Pusher environment variables' },
        { status: 500 }
      )
    }

    const presenceData = {
      user_id: uuidv4(),
      user_info: { name: 'User' }
    }

    const auth = await pusher.authorizeChannel(
      socket_id,
      channel_name,
      presenceData
    )

    return NextResponse.json(auth)
  } catch (error) {
    console.error('Pusher auth error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
