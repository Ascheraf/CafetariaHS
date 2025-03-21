import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '🍟 Hollands Spoor Den Haag | Officiële Website ✅',
  description: 'Onze Officiële Website ✅. Snacks in Den Haag bestellen doe je natuurlijk bij ons restaurant cafetaria Hollands Spoor. ➡ Betaal gemakkelijk online om uw snacks te bezorgen & afhalen.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
