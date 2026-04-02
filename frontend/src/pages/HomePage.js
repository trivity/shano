import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Trash2, Truck, Sofa, Battery, BedDouble, CircleDot,
  Monitor, Home, Phone, ArrowRight, MapPin, CheckCircle2, Building2
} from "lucide-react";
import SkipBinSVG from "@/components/SkipBinSVG";

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

const skipSizes = [
  { size: "2", label: "2m\u00b3", desc: "Perfect for small clean-ups" },
  { size: "3", label: "3m\u00b3", desc: "Great for bathroom or kitchen renos" },
  { size: "4", label: "4m\u00b3", desc: "Ideal for medium home projects" },
  { size: "6", label: "6m\u00b3", desc: "Best for large renovations" },
];

const trustPoints = [
  "Locally owned & operated",
  "Open 7 days a week",
  "Flexible 5-day hire",
  "No hidden costs",
  "Eco-friendly disposal",
  "Walk-in door bins",
];

export default function HomePage() {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section
        data-testid="hero-section"
        className="relative min-h-[85vh] flex items-center"
        style={{
          background: `linear-gradient(135deg, #000000 0%, #1a0000 50%, #bf0403 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <MapPin size={14} className="text-[#ff1420]" />
              <span className="text-white/90 text-sm font-medium">Serving Port Augusta & surrounds</span>
            </div>
            <h1
              data-testid="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
              style={{ fontFamily: 'Outfit' }}
            >
              Reliable skip bin hire you can
              <span style={{ color: '#ff1420' }}> count on</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-lg">
              Family-owned waste management made simple. Fair pricing, honest service, and eco-friendly disposal.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="tel:0497068349" data-testid="hero-call-btn">
                <Button
                  size="lg"
                  className="btn-red rounded-full text-base font-semibold px-8 py-6 flex items-center gap-2"
                  style={{ backgroundColor: '#bf0403' }}
                >
                  <Phone size={18} />
                  Call Now
                </Button>
              </a>
              <Link to="/skip-bin-sizes" data-testid="hero-sizes-btn">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-base font-semibold px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:text-white flex items-center gap-2"
                >
                  View Bin Sizes
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points Bar */}
      <section className="bg-[#bf0403] py-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-white text-sm font-medium">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500">
              <Building2 size={16} />
              <span>We service both residential and commercial clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skip Bin Sizes Teaser */}
      <section data-testid="bins-teaser-section" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#bf0403] text-sm font-semibold uppercase tracking-wider">Our bins</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Outfit' }}>
              Choose your size
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              All bins feature easy-access walk-in doors for convenient loading.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {skipSizes.map((bin) => (
              <div
                key={bin.size}
                data-testid={`bin-teaser-${bin.size}`}
                className="skip-card bg-white rounded-xl p-6 text-center fade-in-up border border-gray-100"
              >
                <SkipBinSVG size={bin.size} className="w-full max-w-[200px] mx-auto mb-4" />
                <h3 className="text-lg font-bold" style={{ fontFamily: 'Outfit' }}>{bin.label}</h3>
                <p className="text-sm text-gray-500 mt-1">{bin.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/skip-bin-sizes" data-testid="view-all-sizes-btn">
              <Button
                size="lg"
                className="btn-red rounded-full font-semibold px-8 flex items-center gap-2 mx-auto"
                style={{ backgroundColor: '#bf0403' }}
              >
                View all sizes & details
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Outfit' }}>
            Ready to get started?
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Give us a call or visit our contact page. We're open 7 days a week and happy to help with any questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="tel:0497068349" data-testid="cta-call-btn">
              <Button
                size="lg"
                className="btn-red rounded-full text-base font-semibold px-8 py-6 flex items-center gap-2"
                style={{ backgroundColor: '#bf0403' }}
              >
                <Phone size={18} />
                0497 068 349
              </Button>
            </a>
            <Link to="/contact" data-testid="cta-contact-btn">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base font-semibold px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
