import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Over Ons</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#403a34]">Cafetaria Hollands Spoor</h2>
            <p className="text-gray-700 mb-4">
              Welkom bij Cafetaria Hollands Spoor, dé plek voor heerlijke snacks en maaltijden in Den Haag. Onze cafetaria is gevestigd aan het stationsplein 3C, direct bij station Hollands Spoor.
            </p>
            <p className="text-gray-700 mb-4">
              Bij ons kunt u terecht voor de lekkerste traditionele Nederlandse snacks, zoals friet, kroketten en frikandellen, maar ook voor internationale gerechten zoals döner, kapsalon en verschillende burgers.
            </p>
            <p className="text-gray-700">
              We zijn trots op onze kwaliteit, service en de verse producten die we dagelijks bereiden. U kunt bij ons terecht voor zowel afhalen als bezorging, zodat u altijd en overal kunt genieten van onze heerlijke gerechten.
            </p>
          </div>
          <div>
            <Image
              src="https://ext.same-assets.com/3309180746/90017981.jpeg"
              alt="Cafetaria Hollands Spoor"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#403a34]">Onze Specialiteiten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://ext.same-assets.com/2868292482/3268540329.png"
                  alt="Kapsalon"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">Kapsalon</h3>
                <p className="text-gray-600">
                  Een van onze populairste gerechten. Heerlijke friet met döner of shoarma, gesmolten kaas, verse salade en saus naar keuze.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://ext.same-assets.com/2748561565/2879049261.png"
                  alt="Burgers"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">Burgers</h3>
                <p className="text-gray-600">
                  Onze sappige burgers worden vers bereid en kunnen naar wens worden aangepast met diverse toppings en sauzen.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://ext.same-assets.com/358449976/3874740806.png"
                  alt="Snacks"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">Nederlandse Snacks</h3>
                <p className="text-gray-600">
                  Traditionele Nederlandse snacks zoals kroketten, frikandellen en kaassoufflés, gemaakt van kwaliteitsingrediënten.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#403a34]">Bezoek Ons</h2>
          <p className="text-center text-gray-700 mb-4">
            We zijn dagelijks geopend van 16:00 tot 01:00 uur (zondag tot 00:00).<br />
            U vindt ons op stationsplein 3C, 2515 BT Den Haag.
          </p>
          <p className="text-center text-gray-700">
            Telefoonnummer: 0707504113
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
