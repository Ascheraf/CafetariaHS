import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const InfoSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Delivery Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-[#403a34] mb-4">Bezorgen</h2>
            <p className="text-gray-700 mb-6">
              Geen zin om de deur uit te gaan? Bestel snel en eenvoudig op onze eigen website en wij zorgen dat het eten wordt bezorgd op het door jou gekozen tijdstip. Wil je direct kunnen genieten van je maaltijd? Betaal direct online snel en veilig met iDEAL, zo hoef je aan de deur niets meer af te rekenen.
            </p>
            <Button
              variant="outline"
              className="rounded-full flex items-center bg-black text-white hover:bg-gray-800 border-0 px-5"
              asChild
            >
              <Link href="/menu">
                Bekijk menukaart <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://ext.same-assets.com/1576711764/3134144516.gif"
              alt="Delivery Animation"
              width={540}
              height={360}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>

        {/* Pickup Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://ext.same-assets.com/2112357271/2185180873.jpeg"
              alt="Takeaway Food"
              width={540}
              height={360}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#403a34] mb-4">Afhalen</h2>
            <p className="text-gray-700 mb-6">
              Uiteraard is het mogelijk om je bestelling bij ons af te halen. Wil je snel geholpen worden? Bestel eenvoudig en snel op onze eigen website en wij zorgen dat je eten klaar staat op het door jou gekozen tijdstip. Betaal direct online snel en veilig met iDEAL, zo hoef je in de winkel niets meer af te rekenen.
            </p>
            <Button
              variant="outline"
              className="rounded-full flex items-center bg-black text-white hover:bg-gray-800 border-0 px-5"
              asChild
            >
              <Link href="/menu">
                Bekijk menukaart <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
