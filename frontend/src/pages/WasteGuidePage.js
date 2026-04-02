import React from "react";
import { CheckCircle2, XCircle, AlertTriangle, Monitor, Trash2, Leaf } from "lucide-react";

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

export default function WasteGuidePage() {
  return (
    <div data-testid="waste-guide-page" className="pt-20">
      {/* Header */}
      <section className="bg-black text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#ff1420] text-sm font-semibold uppercase tracking-wider">Waste guide</span>
          <h1
            data-testid="waste-guide-title"
            className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'Outfit' }}
          >
            What can go in your skip bin
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl text-base lg:text-lg">
            To ensure safe and responsible waste disposal, please follow these guidelines.
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
            </div>
          </div>
        </div>
      </section>

      {/* E-Waste & General Waste */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* E-Waste */}
            <div data-testid="ewaste-section" className="bg-white rounded-xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FEE2E2' }}>
                  <Monitor size={20} className="text-[#bf0403]" />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Outfit' }}>E-Waste Disposal</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                E-waste is accepted by us, put your e-waste safe aside from the skip bin on pick-up. This includes computers, televisions, monitors, and other electronic devices.
              </p>
            </div>

            {/* General Waste */}
            <div data-testid="general-waste-section" className="bg-white rounded-xl border border-gray-100 p-8">
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

          {/* Green Waste Note */}
          <div className="mt-8 bg-white rounded-xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
                <Leaf size={20} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: 'Outfit' }}>Green Waste</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Green waste can be placed in a mixed household bin, but it should be placed on top of the load to allow it to be separated and recycled properly. 
              Mixed waste is not permitted in a green waste bin - these bins are designated for green waste only.
            </p>
          </div>
        </div>
      </section>

      {/* Heavy Bin Notice */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs text-gray-400">
            Heavy bins over 1 tonne may have additional charges.
          </p>
        </div>
      </section>
    </div>
  );
}
