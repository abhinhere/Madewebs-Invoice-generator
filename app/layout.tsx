import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: 'MadeWebs Generators',
  description: 'Generate invoices, quotations, and receipts effortlessly',
  generator: 'Abhin.c',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'MadeWebs Generators',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen pb-safe">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
