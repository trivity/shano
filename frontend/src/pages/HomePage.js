import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Trash2, Truck, Sofa, Battery, BedDouble, CircleDot,
  Monitor, Home, Phone, ArrowRight, MapPin, CheckCircle2, Building2, DoorOpen, Leaf
} from "lucide-react";
import SkipBinSVG from "@/components/SkipBinSVG";
import SEO from "@/components/SEO";

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
      <SEO
        description="Shano's Skips - Locally owned skip bin hire in Port Augusta, SA. 2m³ to 6m³ bins with walk-in doors. Reliable, affordable, eco-friendly waste management. Open 7 days."
        path="/"
      />
      {/* Hero Section - Split Layout */}
      <section
        data-testid="hero-section"
        className="relative pt-20 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[85vh] py-16 lg:py-0">
            {/* Left - Text */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-8">
                <MapPin size={14} className="text-[#bf0403]" />
                <span className="text-[#bf0403] text-sm font-medium">Serving Port Augusta & surrounds</span>
              </div>
              <h1
                data-testid="hero-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight"
                style={{ fontFamily: 'Outfit' }}
              >
                Reliable skip bin hire you can
                <span style={{ color: '#bf0403' }}> count on</span>
              </h1>
              <p className="mt-6 text-base lg:text-lg text-gray-500 leading-relaxed max-w-lg">
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
                    className="rounded-full text-base font-semibold px-8 py-6 border-gray-300 text-black hover:bg-gray-50 flex items-center gap-2"
                  >
                    View Bin Sizes
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
              {/* Quick trust points */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10">
                {["Open 7 days", "No hidden costs", "Walk-in door bins"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle2 size={14} className="text-[#bf0403]" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Skip Bin Visual */}
            <div className="order-1 lg:order-2 flex items-center justify-center relative">
              {/* Background pattern */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[420px] h-[420px] lg:w-[500px] lg:h-[500px] rounded-full" style={{
                  background: 'radial-gradient(circle, rgba(191,4,3,0.06) 0%, rgba(191,4,3,0.02) 50%, transparent 70%)',
                }} />
              </div>
              {/* Decorative dots */}
              <div className="absolute top-12 right-8 hidden lg:grid grid-cols-5 gap-2 opacity-20">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#bf0403]" />
                ))}
              </div>
              {/* Main hero image */}
              <div className="relative z-10 w-full max-w-lg">
                <img
                  src="/hero-bin.png"
                  alt="Shano's Skips - Skip Bin"
                  className="w-full h-auto drop-shadow-xl rounded-lg"
                  data-testid="hero-image"
                />
                {/* Size badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg" style={{ fontFamily: 'Outfit' }}>
                  <span>2m&#179; &ndash; 6m&#179; available</span>
                </div>
              </div>
              {/* Floating feature badges */}
              <div className="absolute top-1/4 -left-2 lg:left-0 bg-white shadow-lg border border-gray-100 rounded-xl px-4 py-3 flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FEE2E2' }}>
                  <DoorOpen size={18} className="text-[#bf0403]" />
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ fontFamily: 'Outfit' }}>Walk-in doors</p>
                  <p className="text-[11px] text-gray-400">Easy loading access</p>
                </div>
              </div>
              <div className="absolute bottom-1/4 -right-2 lg:right-0 bg-white shadow-lg border border-gray-100 rounded-xl px-4 py-3 flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
                  <Leaf size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ fontFamily: 'Outfit' }}>Eco-friendly</p>
                  <p className="text-[11px] text-gray-400">Responsible disposal</p>
                </div>
              </div>
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
