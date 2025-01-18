import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/lib/Providers'
import { GlobalStyles } from '@/styles/GlobalStyles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Autenticação - SaaS Hyper',
  description: 'Páginas de autenticação do template SaaS Hyper',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  )
}