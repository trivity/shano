import React from "react";

/**
 * SkipBinSVG
 * Renders the skip bin PNG with a transparent overlay so users cannot
 * right-click → "Open image in new tab" / "Save image as".
 *
 * The overlay sits on top with the same dimensions and blocks pointer events
 * from reaching the underlying <img>. Drag-and-save is also disabled.
 */
export default function SkipBinSVG({ size = "4", className = "" }) {
  const blockMenu = (e) => e.preventDefault();
  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={`/skip-bin-${size}m.png`}
        alt={`${size}m\u00b3 Marrel Skip Bin`}
        className="w-full h-auto select-none pointer-events-none"
        style={{ objectFit: 'contain', WebkitUserDrag: 'none' }}
        draggable={false}
        onContextMenu={blockMenu}
      />
      {/* Transparent overlay — intercepts right-click & drag on the image */}
      <span
        aria-hidden="true"
        onContextMenu={blockMenu}
        onDragStart={blockMenu}
        className="absolute inset-0 z-10"
        style={{ backgroundColor: 'transparent', cursor: 'default' }}
      />
    </div>
  );
}
