import React from "react";

const binProfiles = {
  "2": { scale: 0.72, label: "2m\u00b3" },
  "3": { scale: 0.82, label: "3m\u00b3" },
  "4": { scale: 0.91, label: "4m\u00b3" },
  "6": { scale: 1.0, label: "6m\u00b3" },
};

const MAIN = "#bf0403";
const LIGHT = "#d42020";
const MID = "#a00303";
const DARK = "#7a0202";
const DARKER = "#550101";
const INSIDE = "#3d0101";

export default function SkipBinSVG({ size = "4", className = "" }) {
  const profile = binProfiles[size] || binProfiles["4"];
  const { scale, label } = profile;

  const ox = 160 - 150 * scale;
  const oy = 252 - 210 * scale;

  return (
    <svg
      viewBox="0 0 320 280"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${label} Marrel Skip Bin`}
    >
      <defs>
        <linearGradient id={`gf-${size}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={LIGHT} />
          <stop offset="100%" stopColor={MAIN} />
        </linearGradient>
        <linearGradient id={`ge-${size}`} x1="1" y1="0" x2="0" y2="0.3">
          <stop offset="0%" stopColor={MID} />
          <stop offset="100%" stopColor={DARK} />
        </linearGradient>
      </defs>

      <g transform={`translate(${ox}, ${oy}) scale(${scale})`}>
        {/* Ground shadow */}
        <ellipse cx="170" cy="237" rx="130" ry="14" fill="rgba(0,0,0,0.06)" />

        {/* ====== LEFT END FACE (short side, where door is) ====== */}
        <polygon
          points="75,225 55,88 10,75 25,205"
          fill={`url(#ge-${size})`}
        />

        {/* ====== FRONT FACE (long side) ====== */}
        <polygon
          points="75,225 270,225 285,88 55,88"
          fill={`url(#gf-${size})`}
        />

        {/* ====== TOP RIM ====== */}

        {/* Front rim - outer face */}
        <polygon
          points="55,88 285,88 288,78 52,78"
          fill={LIGHT}
        />

        {/* Left end rim - outer face */}
        <polygon
          points="55,88 10,75 7,66 52,78"
          fill={MID}
        />

        {/* Rim top surface */}
        <polygon
          points="52,78 288,78 250,66 7,66"
          fill={MAIN}
        />

        {/* ====== INTERIOR (visible from top) ====== */}
        <polygon
          points="60,88 280,88 250,66 15,66"
          fill={INSIDE}
        />
        <polygon
          points="60,88 280,88 260,78 20,75"
          fill={DARKER}
          opacity="0.6"
        />

        {/* ====== RIVETS on front face (4 round bolts below rim) ====== */}
        {[105, 145, 190, 235].map((cx, i) => (
          <g key={`r-${i}`}>
            <circle cx={cx} cy="89" r="6.5" fill={LIGHT} />
            <circle cx={cx} cy="89" r="5" fill={MAIN} />
            <circle cx={cx - 1.5} cy={87.5} r="2" fill="rgba(255,255,255,0.3)" />
          </g>
        ))}

        {/* ====== DOOR on LEFT END (swings outward from end face) ====== */}

        {/* Door opening / cutout on left end face */}
        <polygon
          points="75,225 25,205 22,145 68,155"
          fill={DARKER}
          opacity="0.7"
        />
        {/* Door frame top edge */}
        <line x1="22" y1="145" x2="68" y2="155" stroke={INSIDE} strokeWidth="1.5" />

        {/* Door panel (hinged at top, swung outward/downward ~45deg) */}
        <polygon
          points="22,145 68,155 30,190 -18,178"
          fill={MID}
          stroke={DARK}
          strokeWidth="1"
        />
        {/* Door panel bottom edge (thickness) */}
        <polygon
          points="-18,178 30,190 30,195 -18,183"
          fill={DARKER}
        />
        {/* Door panel subtle highlight */}
        <polygon
          points="22,145 68,155 30,190 -18,178"
          fill="rgba(255,255,255,0.06)"
        />

        {/* ====== BRANDING on front face ====== */}
        <text
          x="172"
          y="157"
          textAnchor="middle"
          fill="white"
          fontFamily="Outfit, sans-serif"
          fontWeight="800"
          fontSize="21"
          opacity="0.95"
        >
          Shano's
        </text>
        <text
          x="172"
          y="181"
          textAnchor="middle"
          fill="white"
          fontFamily="Outfit, sans-serif"
          fontWeight="800"
          fontSize="18"
          opacity="0.95"
        >
          Skips
        </text>

        {/* ====== EDGES ====== */}
        {/* Front bottom */}
        <line x1="75" y1="225" x2="270" y2="225" stroke={DARK} strokeWidth="1.5" />
        {/* Left bottom */}
        <line x1="25" y1="205" x2="75" y2="225" stroke={DARKER} strokeWidth="1.5" />
        {/* Front-left corner vertical */}
        <line x1="75" y1="225" x2="55" y2="88" stroke={DARK} strokeWidth="1" opacity="0.4" />
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
