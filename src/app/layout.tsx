import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import '@/assets/styles/globals.scss'
import { NavigationMenu } from '@/components/NavigationMenu'
import { TopMenu } from '@/components/TopMenu'
import BootstrapClient from '@/components/BootstrapClient'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Order track',
  description: 'This app is a test job for a frontend developer position'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TopMenu />
        <div className='d-flex'>
          <div className='col-2'>
            <NavigationMenu />
          </div>
          <div className='col-auto p-5'>{children}</div>
        </div>
        <BootstrapClient />
      </body>
    </html>
  )
}
