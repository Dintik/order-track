import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
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
        <NavigationMenu />
        <TopMenu />
        {children}
        <BootstrapClient />
      </body>
    </html>
  )
}
