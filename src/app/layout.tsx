import { Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tasks - Next.js + Prisma + TypeScript',
  description: 'SPA with Next.js and Prisma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
