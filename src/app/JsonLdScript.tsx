"use client";

import Script from 'next/script';

export const LocalBusinessJsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Cafetaria Hollands Spoor",
    "image": "https://ext.same-assets.com/3309180746/90017981.jpeg",
    "@id": "https://www.cafetariahs.nl",
    "url": "https://www.cafetariahs.nl",
    "telephone": "+31707504113",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Stationsplein 3C",
      "addressLocality": "Den Haag",
      "postalCode": "2515 BT",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.0704,
      "longitude": 4.3233
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "16:00",
        "closes": "01:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "16:00",
        "closes": "00:00"
      }
    ],
    "servesCuisine": "Fast Food",
    "priceRange": "€",
    "paymentAccepted": "Cash, Credit Card, iDEAL",
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.cafetariahs.nl/menu",
        "inLanguage": "nl",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "deliveryMethod": [
        "http://purl.org/goodrelations/v1#DeliveryModePickUp",
        "http://purl.org/goodrelations/v1#DeliveryModeFreight"
      ]
    }
  };

  return (
    <Script
      id="local-business-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export const MenuJsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Cafetaria Hollands Spoor Menu",
    "mainEntityOfPage": "https://www.cafetariahs.nl/menu",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Burgers",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Cheeseburger",
            "description": "Inclusief speciaal saus",
            "offers": {
              "@type": "Offer",
              "price": 5.5,
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "MenuItem",
            "name": "HS Burger",
            "description": "Inclusief speciaal saus, kaas en gebakken ei",
            "offers": {
              "@type": "Offer",
              "price": 8.5,
              "priceCurrency": "EUR"
            }
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "Kapsalon",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Kapsalon Groot",
            "offers": {
              "@type": "Offer",
              "price": 8.0,
              "priceCurrency": "EUR"
            }
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="menu-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
