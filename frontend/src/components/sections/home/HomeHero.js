import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle2, DoorOpen, Leaf } from "lucide-react";

const trustPills = ["Open 7 days", "No hidden costs", "Walk-in door bins"];

export const HomeHero = () => (
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
            Shano's Skips —
            <span style={{ color: '#bf0403' }}> Reliable Skip Bin Hire</span>
          </h1>
          <p className="mt-6 text-base lg:text-lg text-gray-500 leading-relaxed max-w-lg">
            Family-owned waste management made simple. Fair pricing, honest service, and eco-friendly disposal.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link to="/contact" data-testid="hero-quote-btn">
              <Button
                size="lg"
                className="btn-red rounded-full text-base font-semibold px-8 py-6 flex items-center gap-2"
                style={{ backgroundColor: '#bf0403' }}
              >
                Get a Quote
                <ArrowRight size={18} />
              </Button>
            </Link>
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
            {trustPills.map((t) => (
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
);
