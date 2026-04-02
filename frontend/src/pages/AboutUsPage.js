import React from "react";
import { Heart, Leaf, Clock, Shield, Users, ThumbsUp } from "lucide-react";

const values = [
  { icon: Heart, title: "Family-run", desc: "Locally owned and operated with a genuine personal touch." },
  { icon: Shield, title: "Reliable", desc: "Dependable service you can count on, 7 days a week." },
  { icon: ThumbsUp, title: "Honest", desc: "Fair pricing, honest advice, and no hidden costs." },
  { icon: Leaf, title: "Eco-friendly", desc: "Committed to responsible, sustainable waste disposal." },
  { icon: Clock, title: "Flexible", desc: "5-day hire with extensions available when you need them." },
  { icon: Users, title: "Community-focused", desc: "Proudly serving Port Augusta and the Upper North." },
];

export default function AboutUsPage() {
  return (
    <div data-testid="about-page" className="pt-20">
      {/* Header */}
      <section className="bg-black text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#ff1420] text-sm font-semibold uppercase tracking-wider">About us</span>
          <h1
            data-testid="about-title"
            className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'Outfit' }}
          >
            Who we are
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed text-base lg:text-lg" data-testid="about-story">
              Shano's Skips is a locally owned and operated skip bin business, proudly serving the community with reliable, down-to-earth service you can count on. As a trusted family-run company, we believe in doing things the right way - offering honest advice, fair pricing, and a helping hand when you need it.
            </p>
            <p className="text-gray-600 leading-relaxed text-base lg:text-lg mt-6">
              Whether you're tackling a home clean-up, renovation, or clearing a deceased estate, we make the process simple and stress-free. Our skip bins come in a range of sizes and feature easy-access walk-in doors for added convenience. We also take a responsible approach to waste disposal, with a strong focus on sustainability and environmentally friendly practices.
            </p>
            <p className="text-gray-600 leading-relaxed text-base lg:text-lg mt-6">
              We offer flexible 5-day skip hire with extensions available if needed, along with affordable pricing and no hidden costs - so you always know exactly what you're getting. We're committed to responsible, eco-friendly waste disposal and are open 7 days a week, providing dependable service with a genuine local touch.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#bf0403] text-sm font-semibold uppercase tracking-wider">Our values</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Outfit' }}>
              What we stand for
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="values-grid">
            {values.map((val) => (
              <div
                key={val.title}
                data-testid={`value-card-${val.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:border-[#bf0403] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#FEE2E2' }}>
                  <val.icon size={22} className="text-[#bf0403]" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Outfit' }}>{val.title}</h3>
                <p className="text-gray-500 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
