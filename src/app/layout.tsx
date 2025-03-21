import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LocalBusinessJsonLd } from './JsonLdScript';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: '🍟 Hollands Spoor Den Haag | Officiële Website ✅',
    template: '%s | Cafetaria Hollands Spoor Den Haag',
  },
  description: 'Onze Officiële Website ✅. Snacks in Den Haag bestellen doe je natuurlijk bij ons restaurant cafetaria Hollands Spoor. ➡ Betaal gemakkelijk online om uw snacks te bezorgen & afhalen.',
  keywords: [
    'cafetaria', 'snacks', 'bezorgen', 'afhalen', 'Den Haag', 'Hollands Spoor',
    'friet', 'burgers', 'kapsalon', 'online bestellen', 'eten bestellen'
  ],
  authors: [{ name: 'Cafetaria Hollands Spoor' }],
  creator: 'Cafetaria Hollands Spoor',
  publisher: 'Cafetaria Hollands Spoor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.cafetariahs.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cafetaria Hollands Spoor | Bestel gemakkelijk online',
    description: 'Bestel gemakkelijk en snel online bij Cafetaria Hollands Spoor. Lekkerste snacks, friet en burgers in Den Haag.',
    url: 'https://www.cafetariahs.nl',
    siteName: 'Cafetaria Hollands Spoor',
    images: [
      {
        url: 'https://ext.same-assets.com/3309180746/90017981.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cafetaria Hollands Spoor - Den Haag',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'google-site-verification=YOUR_CODE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
