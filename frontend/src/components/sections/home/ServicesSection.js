import React from "react";
import {
  Trash2, Truck, Sofa, Battery, BedDouble, CircleDot, Monitor, Home,
} from "lucide-react";

const services = [
  { icon: Trash2, title: "Skip Bin Hire", desc: "2m\u00b3 to 6m\u00b3 sizes with walk-in doors" },
  { icon: Truck, title: "White Goods Collection", desc: "Fridges, washers & more collected" },
  { icon: Sofa, title: "Furniture Removal", desc: "Old furniture taken care of" },
  { icon: Battery, title: "Battery Disposal", desc: "Car and truck batteries safely disposed" },
  { icon: BedDouble, title: "Mattress Removal", desc: "Responsible mattress recycling" },
  { icon: CircleDot, title: "Tyre Disposal", desc: "Safe and eco-friendly tyre disposal" },
  { icon: Monitor, title: "E-Waste Recycling", desc: "Computers, TVs and electronics" },
  { icon: Home, title: "Deceased Estate Clean-outs", desc: "Compassionate & thorough service" },
];

export const ServicesSection = () => (
  <section data-testid="services-section" className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-[#bf0403] text-sm font-semibold uppercase tracking-wider">What we offer</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Outfit' }}>
          Our services
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          From skip bins to full estate clean-outs, we handle waste the right way.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
        {services.map((svc) => (
          <div
            key={svc.title}
            data-testid={`service-card-${svc.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="service-card rounded-xl p-6 bg-white fade-in-up cursor-default"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#FEE2E2' }}>
              <svc.icon size={22} className="text-[#bf0403]" />
            </div>
            <h3 className="font-semibold text-base mb-2" style={{ fontFamily: 'Outfit' }}>{svc.title}</h3>
            <p className="text-gray-500 text-sm">{svc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
