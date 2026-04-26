import React from "react";

export const PhotoStrip = () => (
  <section className="py-4 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <img src="/images/bin-at-site.jpg" alt="Skip bin delivery" className="w-full h-40 md:h-48 object-cover rounded-lg" />
        <img src="/images/truck-lifting-bin.jpg" alt="Truck lifting skip bin" className="w-full h-40 md:h-48 object-cover rounded-lg" />
        <img src="/images/bin-near-shed.jpg" alt="Skip bin at residential site" className="w-full h-40 md:h-48 object-cover rounded-lg hidden md:block" />
        <img src="/images/bin-container-area.jpg" alt="Skip bins at depot" className="w-full h-40 md:h-48 object-cover rounded-lg hidden md:block" />
      </div>
    </div>
  </section>
);
