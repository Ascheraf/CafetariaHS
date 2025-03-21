"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Phone } from 'lucide-react';

const Footer = () => {
  const days = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <MapPin className="h-5 w-5" /> Locatie
            </h3>
            <div className="text-gray-700">
              <p className="font-bold">Cafetaria Hollands spoor</p>
              <p>stationsplein 3C</p>
              <p>2515 BT Den haag</p>
              <p className="mt-2">0707504113</p>
            </div>
            <div className="flex space-x-3 mt-4">
              <Link href="https://itunes.apple.com/nl/app/x/id1119155267" target="_blank">
                <Image
                  src="https://ext.same-assets.com/1681587368/2952354441.svg+xml"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-auto"
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=nl.foodticket.app.orderapp1928" target="_blank">
                <Image
                  src="https://ext.same-assets.com/297980834/862125122.svg+xml"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-auto"
                />
              </Link>
            </div>
          </div>

          {/* Delivery Times */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Clock className="h-5 w-5" /> Bezorgtijden
            </h3>
            <div className="grid grid-cols-[100px_1fr] gap-y-1 text-gray-700">
              {days.map((day) => (
                <React.Fragment key={`delivery-${day}`}>
                  <span>{day}:</span>
                  <span className="font-medium">
                    {day === 'zondag' ? '16:00-00:00' : '16:00-01:00'}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Pickup Times */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Clock className="h-5 w-5" /> Afhaaltijden
            </h3>
            <div className="grid grid-cols-[100px_1fr] gap-y-1 text-gray-700">
              {days.map((day) => (
                <React.Fragment key={`pickup-${day}`}>
                  <span>{day}:</span>
                  <span className="font-medium">
                    {day === 'zondag' ? '16:00-00:00' : '16:00-01:00'}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© Copyright {new Date().getFullYear()} - Cafetaria Hollands spoor - by <Link href="/" className="hover:text-[#995a3b]">Foodticket</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
