import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SkipBinSVG from "@/components/SkipBinSVG";

const skipSizes = [
  { size: "2", label: "2m\u00b3", desc: "Perfect for small clean-ups" },
  { size: "3", label: "3m\u00b3", desc: "Great for bathroom or kitchen renos" },
  { size: "4", label: "4m\u00b3", desc: "Ideal for medium home projects" },
  { size: "6", label: "6m\u00b3", desc: "Best for large renovations" },
];

export const SkipSizesTeaser = () => (
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
);
