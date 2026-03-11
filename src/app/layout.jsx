import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ContactModalProvider } from '@/components/ContactModal'
import PrototypeBanner from '@/components/PrototypeBanner'
import BackToTop from '@/components/BackToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'ConsultCo | Strategic Business Consulting',
    template: '%s | ConsultCo',
  },
  description:
    'ConsultCo partners with growing businesses to sharpen strategy, streamline operations, and unlock their next stage of growth.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://consultco.com',
    title: 'ConsultCo | Strategic Business Consulting',
    description:
      'ConsultCo partners with growing businesses to sharpen strategy, streamline operations, and unlock their next stage of growth.',
    images: [{ url: 'https://consultco.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ConsultCo | Strategic Business Consulting',
    description:
      'ConsultCo partners with growing businesses to sharpen strategy, streamline operations, and unlock their next stage of growth.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ConsultCo',
  url: 'https://consultco.com',
  description:
    'Strategic consulting services for growing businesses. Business strategy, operational efficiency, and growth advisory.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Street Address]',
    addressLocality: '[City]',
    addressRegion: '[State]',
    postalCode: '[ZIP]',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '[Phone Number]',
    contactType: 'customer service',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white antialiased" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 btn-primary"
        >
          Skip to main content
        </a>
        <ContactModalProvider>
          <PrototypeBanner />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
        </ContactModalProvider>
      </body>
    </html>
  )
}
