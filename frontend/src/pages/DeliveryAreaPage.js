import React from "react";
import { MapPin } from "lucide-react";
import SEO from "@/components/SEO";

const towns = [
  "Port Augusta",
  "Blanche Harbor",
  "Miranda",
  "Quorn",
  "Wilmington",
  "Booleroo",
  "Iron Knob",
  "Pimba",
  "Woomera",
  "Hawker",
];

export default function DeliveryAreaPage() {
  return (
    <div data-testid="delivery-area-page" className="pt-20">
      <SEO
        title="Delivery Area"
        description="Shano's Skips delivers to Port Augusta, Quorn, Wilmington, Booleroo, Iron Knob, Pimba, Woomera, Hawker and surrounding areas in South Australia."
        path="/delivery-area"
      />
      {/* Header */}
      <section className="bg-black text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#ff1420] text-sm font-semibold uppercase tracking-wider">Service area</span>
          <h1
            data-testid="delivery-area-title"
            className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'Outfit' }}
          >
            Delivery area
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl text-base lg:text-lg">
            We proudly service Port Augusta and surrounding areas in the Great Upper North South Australia.
          </p>
        </div>
      </section>

      {/* Map + Towns */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Map */}
            <div className="lg:col-span-2 map-container" data-testid="delivery-map">
              <iframe
                title="Shano's Skips Service Area"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104754.7!2d137.73!3d-32.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a83efb05e8c1c1d%3A0x503c94dd0de3520!2sPort%20Augusta%20SA%205700!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                width="100%"
                height="480"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Town List */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Outfit' }}>Areas we service</h2>
              <div className="flex flex-wrap gap-3" data-testid="town-list">
                {towns.map((town) => (
                  <span
                    key={town}
                    data-testid={`town-pill-${town.toLowerCase().replace(/\s+/g, '-')}`}
                    className="town-pill inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium cursor-default"
                  >
                    <MapPin size={14} />
                    {town}
                  </span>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Outfit' }}>Not sure if we service your area?</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Give us a call and we'll let you know if we can help.
                </p>
                <a
                  href="tel:0497068349"
                  data-testid="delivery-call-btn"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#bf0403] hover:text-[#ff1420] transition-colors"
                >
                  <span>0497 068 349</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
