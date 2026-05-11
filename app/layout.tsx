import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/header'
import { SiteFooter } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moe Kyaw Aung | Senior Full Stack Engineer',
  description: 'Next.js 14 Supreme Portfolio with shadcn/ui, TypeScript, and modern design.',
  themeColor: '#0f172a',
  openGraph: {
    title: 'Moe Kyaw Aung | Senior Full Stack Engineer',
    description: 'Building scalable web applications with Next.js 14 and modern technologies.',
    images: '/og-image.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-purple-900">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
