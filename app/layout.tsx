import type { Metadata, Viewport } from 'next';

// Fonts are real files inside node_modules, bundled into your build and served
// from your own domain. Nothing is fetched from Google — not at build time and
// not by your visitors' browsers. That means the site builds with no network,
// loads one fewer third party, and sends no visitor data to another server.
//
// Archivo carries the headlines, Manrope the body, and Montserrat is used only
// for the ALL TIME SOLUTIONS wordmark, to match the business card.
import '@fontsource-variable/archivo';
import '@fontsource-variable/manrope';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { localBusinessSchema } from '@/lib/seo';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`,
  },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#01143C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          // Structured data for Google. Static, generated at build time.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </body>
    </html>
  );
}
