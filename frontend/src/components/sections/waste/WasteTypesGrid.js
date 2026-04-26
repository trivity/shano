import React from "react";
import { Trash2, Leaf, Recycle, Refrigerator, Monitor } from "lucide-react";

const wasteTypes = [
  {
    icon: Trash2,
    title: "General Waste",
    desc: "Best for household clean-ups, furniture, toys, clothing, cardboard and general rubbish. Do not overfill above the rim.",
    color: "#FEE2E2",
    iconColor: "text-[#bf0403]",
  },
  {
    icon: Leaf,
    title: "Green Waste",
    desc: "For branches, shrubs, leaves, palm fronds and grass clippings. No general waste in green waste bins. Bricks, Concrete & Soil Suitable for heavy waste like bricks, concrete, tiles and soil. Heavy loads may attract additional charges depending on weight.",
    color: "#DCFCE7",
    iconColor: "text-green-600",
  },
  {
    icon: Recycle,
    title: "Scrap Metal",
    desc: "Scrap metal can be placed on top of the load for sorting. Dedicated scrap metal bins may also be available.",
    color: "#DBEAFE",
    iconColor: "text-blue-600",
  },
  {
    icon: Refrigerator,
    title: "White Goods & Extra Fee Items",
    desc: "Items like fridges, freezers, tyres, mattresses, batteries and air conditioners may have extra recycling or disposal charges. Contact us first.",
    color: "#FEF3C7",
    iconColor: "text-amber-600",
  },
  {
    icon: Monitor,
    title: "E-Waste",
    desc: "Computers, TVs, printers and other electronic waste should be kept separate. Contact us for the best disposal option.",
    color: "#F3E8FF",
    iconColor: "text-purple-600",
  },
];

export const WasteTypesGrid = () => (
  <section className="py-16 lg:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <span className="text-[#bf0403] text-sm font-semibold uppercase tracking-wider">Waste types</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Outfit' }}>
          What we accept
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wasteTypes.map((wt) => (
          <div
            key={wt.title}
            data-testid={`waste-card-${wt.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-white rounded-xl border border-gray-100 p-8 hover:border-[#bf0403] transition-colors"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: wt.color }}>
              <wt.icon size={22} className={wt.iconColor} />
            </div>
            <h3 className="font-bold text-base mb-3" style={{ fontFamily: 'Outfit' }}>{wt.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{wt.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
