"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [postcode, setPostcode] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/menu');
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://ext.same-assets.com/3309180746/90017981.jpeg")',
          backgroundPosition: 'center 40%'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="container mx-auto px-4">
          <div className="max-w-xl p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-[#403a34] mb-2">
              Welkom bij Cafetaria Hollands spoor
            </h1>
            <p className="text-lg font-medium mb-6">
              Bestel gemakkelijk en snel online!
            </p>

            {/* Order Form */}
            <div className="mb-4">
              <div className="flex space-x-2 mb-4">
                <button
                  className={`py-2 px-4 rounded-md font-medium text-center flex-1 ${
                    orderType === 'delivery'
                      ? 'bg-[#995a3b] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setOrderType('delivery')}
                >
                  Bezorgen
                </button>
                <button
                  className={`py-2 px-4 rounded-md font-medium text-center flex-1 ${
                    orderType === 'pickup'
                      ? 'bg-[#995a3b] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setOrderType('pickup')}
                >
                  Afhalen
                </button>
              </div>

              {orderType === 'delivery' ? (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                  <label className="text-sm text-gray-600">Vul je postcode in:</label>
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Postcode"
                      className="flex-1"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                    />
                    <Button
                      type="submit"
                      className="bg-black text-white hover:bg-gray-800"
                    >
                      BESTEL ONLINE
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="my-4">
                  <p className="mb-2">
                    Je vindt ons aan het stationsplein 3C<br />
                    in Den haag
                  </p>
                  <Button
                    className="bg-black text-white hover:bg-gray-800 w-full mt-2"
                    onClick={() => router.push('/menu')}
                  >
                    BESTEL ONLINE
                  </Button>
                </div>
              )}

              <div className="mt-4 text-center">
                <span className="text-sm text-gray-600">Of direct de </span>
                <Link href="/menu" className="text-sm text-[#995a3b] hover:underline">
                  menukaart bekijken
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
