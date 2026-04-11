import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, AlertTriangle, Monitor, Trash2, Leaf, Phone, Recycle, HardDrive, Refrigerator, Hammer } from "lucide-react";
import SEO from "@/components/SEO";

const allowed = [
  "General household waste",
  "Renovation & building rubble",
  "Timber & wood",
  "Metal & steel",
  "Green waste (on top of load)",
  "Furniture & mattresses (beside/on top)",
  "Cardboard & paper",
  "Soil & dirt",
  "Bricks & concrete",
  "White goods (collected separately)",
];

const notAllowed = [
  "Asbestos",
  "Overfilled waste above the rim",
  "Chemicals or liquid waste",
  "Food waste or biohazard materials",
  "Loose bean bag beans",
  "Paint tins (must be separated aside)",
];

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

export default function WasteGuidePage() {
  return (
    <div data-testid="waste-guide-page" className="pt-20">
      <SEO
        title="Waste Guide"
        description="What can and can't go in your skip bin. E-waste, green waste, and general waste guidelines from Shano's Skips in Port Augusta."
        path="/waste-guide"
      />
      {/* Header */}
      <section className="relative bg-black text-white py-16 lg:py-24 overflow-hidden">
        <img src="/images/bin-house-full.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-[#ff1420] text-sm font-semibold uppercase tracking-wider">Waste guide</span>
          <h1
            data-testid="waste-guide-title"
            className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'Outfit' }}
          >
            Not sure what can go in your skip?
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl text-base lg:text-lg">
            Use this simple guide before loading your bin
          </p>
        </div>
      </section>

      {/* Do's & Don'ts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Allowed */}
            <div data-testid="waste-allowed-list" className="rounded-xl border border-green-200 bg-green-50/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-green-800" style={{ fontFamily: 'Outfit' }}>Accepted items</h2>
              </div>
              <ul className="space-y-3">
                {allowed.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Allowed */}
            <div data-testid="waste-not-allowed-list" className="rounded-xl border border-red-200 bg-red-50/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <XCircle size={20} className="text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-red-800" style={{ fontFamily: 'Outfit' }}>Not allowed</h2>
              </div>
              <ul className="space-y-3">
                {notAllowed.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-600 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-800">
                  Heavy bins over 1 ton may have additional charges.
                </p>
              </div>
            </div>
          </div>

          {/* CTA below Accepted & Not Allowed */}
          <div className="mt-12 p-8 bg-gray-50 rounded-xl border border-gray-100 text-center">
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              Not sure what bin you need or whether an item is allowed? Call us before loading and we'll point you in the right direction.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a href="tel:0497068349" data-testid="waste-guide-call-btn">
                <Button
                  className="btn-red rounded-full font-semibold flex items-center gap-2"
                  style={{ backgroundColor: '#bf0403' }}
                >
                  <Phone size={15} />
                  0497 068 349
                </Button>
              </a>
              <Link to="/contact" data-testid="waste-guide-contact-btn">
                <Button
                  variant="outline"
                  className="rounded-full font-semibold border-[#bf0403] text-[#bf0403] hover:bg-[#bf0403] hover:text-white"
                >
                  Send an Enquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Type Cards */}
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

      {/* General Waste Note */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FEE2E2' }}>
                <Trash2 size={20} className="text-[#bf0403]" />
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: 'Outfit' }}>General Waste</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              General household waste can be placed in your skip bin. Please ensure waste is not overfilled above the rim.
            </p>
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
              <AlertTriangle size={16} className="text-amber-600 mt-0.5 shrink-0" />
              <p className="text-xs text-amber-800">
                Animal waste must be bagged, please, for our workers' health and safety reasons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
