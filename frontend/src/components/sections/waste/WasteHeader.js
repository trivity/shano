import React from "react";

export const WasteHeader = () => (
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
);
