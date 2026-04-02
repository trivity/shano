import React from "react";
import { Helmet } from "react-helmet-async";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shano's Skips",
  "description": "Locally owned and operated skip bin hire business serving Port Augusta and surrounding areas in South Australia.",
  "url": "https://shanosskips.com.au",
  "telephone": "+61497068349",
  "email": "shanosskips@outlook.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3 Osborne St",
    "addressLocality": "Port Augusta",
    "addressRegion": "SA",
    "postalCode": "5700",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -32.49,
    "longitude": 137.78
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "07:00",
    "closes": "17:00"
  },
  "areaServed": [
    { "@type": "City", "name": "Port Augusta" },
    { "@type": "Place", "name": "Blanche Harbor" },
    { "@type": "Place", "name": "Miranda" },
    { "@type": "Place", "name": "Quorn" },
    { "@type": "Place", "name": "Wilmington" },
    { "@type": "Place", "name": "Booleroo" },
    { "@type": "Place", "name": "Iron Knob" },
    { "@type": "Place", "name": "Pimba" },
    { "@type": "Place", "name": "Woomera" },
    { "@type": "Place", "name": "Hawker" }
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61581009062954"
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Eftpos, Afterpay",
  "serviceType": [
    "Skip Bin Hire",
    "White Goods Collection",
    "Furniture Removal",
    "Battery Disposal",
    "Mattress Removal",
    "Tyre Disposal",
    "E-Waste Recycling",
    "Deceased Estate Clean-outs"
  ]
};

export default function StructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusiness)}
      </script>
    </Helmet>
  );
}
