import React from "react";

export default function SkipBinSVG({ size = "4", className = "" }) {
  return (
    <img
      src={`/skip-bin-${size}m.png`}
      alt={`${size}m\u00b3 Marrel Skip Bin`}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
