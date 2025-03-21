import { Metadata } from 'next';
import { MenuJsonLd } from '../JsonLdScript';

export const metadata: Metadata = {
  title: 'Menu | Bestel Online',
  description: 'Bekijk ons volledige menu en bestel direct online. Heerlijke snacks, friet, burgers, kapsalon en meer bij Cafetaria Hollands Spoor in Den Haag.',
  openGraph: {
    title: 'Menu | Cafetaria Hollands Spoor Den Haag',
    description: 'Bekijk ons volledige menu en bestel direct online. Heerlijke snacks, friet, burgers, kapsalon en meer bij Cafetaria Hollands Spoor in Den Haag.',
    images: [
      {
        url: 'https://ext.same-assets.com/3309180746/90017981.jpeg',
        width: 1200,
        height: 630,
        alt: 'Menu van Cafetaria Hollands Spoor - Den Haag',
      },
    ],
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MenuJsonLd />
      {children}
    </>
  );
}
