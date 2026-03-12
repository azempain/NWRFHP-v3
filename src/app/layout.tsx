import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ScrollToTop } from '@/components/shared/scroll-to-top'
import './globals.css'
import { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'NWRFHP - Quality Healthcare for North West Region',
  description: 'Promoting sustainable access to essential medicines and quality health services across the North West Region of Cameroon.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ScrollToTop />
        <Header />
        <main className="min-h-screen pt-25">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
