import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, DoorOpen, ArrowRight } from "lucide-react";
import SkipBinSVG from "@/components/SkipBinSVG";
import SEO from "@/components/SEO";

const bins = [
  {
    size: "2",
    label: "2m\u00b3",
    subtitle: "Small Skip",
    desc: "Perfect for small household clean-ups, garden tidy-ups, or a single room renovation. Compact enough to fit in tight spaces.",
    ideal: ["Small garden clean-ups", "Single room declutter", "Minor bathroom reno"],
  },
  {
    size: "3",
    label: "3m\u00b3",
    subtitle: "Medium Skip",
    desc: "Great for kitchen or bathroom renovations, garage clean-outs, or medium-sized projects. A popular choice for homeowners.",
    ideal: ["Kitchen/bathroom reno", "Garage clean-out", "Moving house waste"],
  },
  {
    size: "4",
    label: "4m\u00b3",
    subtitle: "Large Skip",
    desc: "Ideal for larger home renovations, multiple room clean-outs, or commercial fit-outs. Handles heavier loads with ease.",
    ideal: ["Large home renovation", "Office fit-out", "Multiple room clear-out"],
  },
  {
    size: "6",
    label: "6m\u00b3",
    subtitle: "Extra Large Skip",
    desc: "Best for major renovations, construction projects, deceased estate clean-outs, or large commercial jobs.",
    ideal: ["Major renovation", "Construction site", "Deceased estate clean-out"],
  },
];

export default function SkipBinSizesPage() {
  return (
    <div data-testid="skip-bin-sizes-page" className="pt-20">
      <SEO
        title="Skip Bin Sizes"
        description="Choose from 2m³, 3m³, 4m³, and 6m³ skip bins with walk-in doors. Perfect for home clean-ups, renovations, and commercial jobs in Port Augusta."
        path="/skip-bin-sizes"
      />
      {/* Header */}
      <section className="relative bg-black text-white py-16 lg:py-24 overflow-hidden">
        <img src="/images/truck-bins-stacked.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-[#ff1420] text-sm font-semibold uppercase tracking-wider">Our products</span>
          <h1
            data-testid="skip-sizes-title"
            className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'Outfit' }}
          >
            Skip bin sizes
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl text-base lg:text-lg">
            We offer a range of skip bin sizes to suit your needs. All of our skip bins are fitted with walk-in doors, making it easy to load your waste.
          </p>
        </div>
      </section>

      {/* Bin Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bins.map((bin) => (
              <Card
                key={bin.size}
                data-testid={`skip-bin-card-${bin.size}`}
                className="skip-card overflow-hidden border border-gray-100"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    {/* SVG Side */}
                    <div className="sm:w-2/5 bg-gray-50 flex items-center justify-center p-8">
                      <SkipBinSVG size={bin.size} className="w-full max-w-[220px]" />
                    </div>
                    {/* Info Side */}
                    <div className="sm:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold" style={{ fontFamily: 'Outfit' }}>{bin.label}</h3>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-50 text-[#bf0403]">
                            {bin.subtitle}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{bin.desc}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                          <DoorOpen size={16} className="text-[#bf0403]" />
                          <span>Easy-access walk-in door included</span>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Ideal for</p>
                          <ul className="space-y-1">
                            {bin.ideal.map((item) => (
                              <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                                <ArrowRight size={12} className="text-[#bf0403]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <a href="tel:0497068349" data-testid={`bin-cta-${bin.size}`}>
                          <Button
                            className="btn-red rounded-full font-semibold w-full sm:w-auto flex items-center justify-center gap-2"
                            style={{ backgroundColor: '#bf0403' }}
                          >
                            <Phone size={15} />
                            Contact us for pricing
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Outfit' }}>Flexible hire terms</h3>
          <p className="text-gray-500">
            We offer flexible 5-day skip hire with extensions available if needed. No hidden costs - you always know exactly what you're getting.
          </p>
          <div className="mt-6">
            <Link to="/contact" data-testid="sizes-contact-link">
              <Button
                variant="outline"
                className="rounded-full font-semibold px-6 border-[#bf0403] text-[#bf0403] hover:bg-[#bf0403] hover:text-white"
              >
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
