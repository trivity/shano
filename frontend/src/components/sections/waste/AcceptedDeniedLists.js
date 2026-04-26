import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, AlertTriangle, Phone } from "lucide-react";

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

export const AcceptedDeniedLists = () => (
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
);
