import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900']
})

export const metadata: Metadata = {
  title: 'Podiotech',
  description: 'Sua plataforma completa para gestão de lojas de veículos'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Toaster
          toastOptions={{
            duration: 3000,
            closeButton: true
          }}
        />
      </body>
    </html>
  )
}
