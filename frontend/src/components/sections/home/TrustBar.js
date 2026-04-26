import React from "react";
import { CheckCircle2 } from "lucide-react";

const trustPoints = [
  "Locally owned & operated",
  "Open 7 days a week",
  "Flexible 5-day hire",
  "No hidden costs",
  "Eco-friendly disposal",
  "Walk-in door bins",
];

export const TrustBar = () => (
  <section className="bg-[#bf0403] py-8 lg:py-10 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-wrap justify-center gap-x-16 gap-y-6">
        {trustPoints.map((point) => (
          <div
            key={point}
            className="flex items-center gap-3 text-white text-base lg:text-lg font-semibold group cursor-default transition-transform hover:scale-105"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <CheckCircle2 size={18} className="shrink-0" />
            </div>
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
