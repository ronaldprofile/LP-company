import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900']
})

export const metadata: Metadata = {
  title: 'Pódiotech',
  description: 'Sua plataforma completa para gestão de lojas de veículos'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  )
}
