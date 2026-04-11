import React from "react";

const binProfiles = {
  "2": { scale: 0.72, label: "2m\u00b3" },
  "3": { scale: 0.82, label: "3m\u00b3" },
  "4": { scale: 0.91, label: "4m\u00b3" },
  "6": { scale: 1.0, label: "6m\u00b3" },
};

// Colors
const MAIN = "#bf0403";
const LIGHT = "#d42020";
const MID = "#a00303";
const DARK = "#7a0202";
const DARKER = "#550101";
const INSIDE = "#3d0101";

export default function SkipBinSVG({ size = "4", className = "" }) {
  const profile = binProfiles[size] || binProfiles["4"];
  const { scale, label } = profile;

  const ox = 160 - 145 * scale;
  const oy = 255 - 210 * scale;

  return (
    <svg
      viewBox="0 0 320 280"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${label} Marrel Skip Bin`}
    >
      <defs>
        {/* Subtle gradient for the front face */}
        <linearGradient id={`front-${size}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={LIGHT} />
          <stop offset="100%" stopColor={MAIN} />
        </linearGradient>
        <linearGradient id={`right-${size}`} x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor={MID} />
          <stop offset="100%" stopColor={DARK} />
        </linearGradient>
      </defs>

      <g transform={`translate(${ox}, ${oy}) scale(${scale})`}>
        {/* Shadow on ground */}
        <ellipse cx="165" cy="237" rx="125" ry="14" fill="rgba(0,0,0,0.07)" />

        {/* ======= BIN BODY ======= */}

        {/* Front face - trapezoid (wider at top) */}
        <polygon
          points="55,225 230,225 248,92 38,92"
          fill={`url(#front-${size})`}
        />

        {/* Right side face - perspective */}
        <polygon
          points="230,225 293,200 306,78 248,92"
          fill={`url(#right-${size})`}
        />

        {/* ======= TOP RIM (thick raised edge) ======= */}

        {/* Front rim - outer face */}
        <polygon
          points="38,92 248,92 250,82 35,82"
          fill={LIGHT}
        />

        {/* Right rim - outer face */}
        <polygon
          points="248,92 306,78 308,68 250,82"
          fill={MID}
        />

        {/* Front rim - top surface */}
        <polygon
          points="35,82 250,82 308,68 95,66"
          fill={MAIN}
        />

        {/* ======= INTERIOR (visible from top) ======= */}

        {/* Inside back wall */}
        <polygon
          points="48,92 95,66 308,68 255,92"
          fill={INSIDE}
        />

        {/* Inside bottom (darker) */}
        <polygon
          points="48,92 255,92 293,80 95,78"
          fill={DARKER}
          opacity="0.7"
        />

        {/* Inner rim edge - front */}
        <line x1="48" y1="92" x2="255" y2="92" stroke={DARKER} strokeWidth="1" />

        {/* ======= RIVETS (4 bolts on front face below rim) ======= */}
        {[88, 128, 168, 208].map((cx, i) => (
          <g key={`rivet-${i}`}>
            <circle cx={cx} cy="92" r="6" fill={LIGHT} />
            <circle cx={cx} cy="92" r="4.5" fill={MAIN} />
            <circle cx={cx - 1} cy={91} r="2" fill={LIGHT} opacity="0.5" />
          </g>
        ))}

        {/* ======= WALK-IN DOOR (left side, swung open outward) ======= */}

        {/* Door opening/cutout on front face */}
        <polygon
          points="55,225 95,225 90,160 50,162"
          fill={DARK}
          opacity="0.7"
        />

        {/* Door frame edge */}
        <line x1="90" y1="160" x2="95" y2="225" stroke={DARKER} strokeWidth="1.5" />
        <line x1="50" y1="162" x2="90" y2="160" stroke={DARKER} strokeWidth="1" />

        {/* Door panel (swung open outward-left, hinged at top) */}
        <polygon
          points="50,162 90,160 48,185 10,188"
          fill={MAIN}
          stroke={DARK}
          strokeWidth="1"
        />
        {/* Door panel highlight */}
        <polygon
          points="50,162 90,160 48,185 10,188"
          fill="rgba(255,255,255,0.08)"
        />

        {/* Door panel thickness (bottom edge visible) */}
        <polygon
          points="10,188 48,185 48,190 10,193"
          fill={DARK}
        />

        {/* ======= BRANDING ======= */}
        <text
          x="155"
          y="160"
          textAnchor="middle"
          fill="white"
          fontFamily="Outfit, sans-serif"
          fontWeight="800"
          fontSize="20"
          opacity="0.95"
        >
          Shano's
        </text>
        <text
          x="155"
          y="183"
          textAnchor="middle"
          fill="white"
          fontFamily="Outfit, sans-serif"
          fontWeight="800"
          fontSize="17"
          opacity="0.95"
        >
          Skips
        </text>

        {/* ======= SUBTLE DETAILS ======= */}

        {/* Front bottom edge line */}
        <line x1="55" y1="225" x2="230" y2="225" stroke={DARK} strokeWidth="1.5" />

        {/* Right bottom edge line */}
        <line x1="230" y1="225" x2="293" y2="200" stroke={DARKER} strokeWidth="1.5" />

        {/* Front-right corner edge */}
        <line x1="230" y1="225" x2="248" y2="92" stroke={DARK} strokeWidth="1" opacity="0.5" />
      </g>

      {/* Size label */}
      <text
        x="160"
        y="272"
        textAnchor="middle"
        fill="#4B5563"
        fontFamily="Outfit, sans-serif"
        fontWeight="600"
        fontSize="14"
      >
        {label}
      </text>
    </svg>
  );
}
