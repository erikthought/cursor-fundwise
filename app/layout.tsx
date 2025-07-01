import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fundwise - AI Financial Advisor',
  description: 'Smart AI-powered financial planning and investment advice tailored for your goals.',
  openGraph: {
    title: 'Fundwise - AI Financial Advisor',
    description: 'Smart AI-powered financial planning and investment advice tailored for your goals.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 