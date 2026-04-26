import React from "react";
import { Trash2, AlertTriangle } from "lucide-react";

export const GeneralWasteNote = () => (
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
);
