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

  const ox = 155 - 148 * scale;
  const oy = 248 - 215 * scale;

  return (
    <svg
      viewBox="0 0 320 270"
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
        <ellipse cx="175" cy="232" rx="128" ry="12" fill="rgba(0,0,0,0.06)" />

        {/* ====== FRONT FACE (long side, nearly straight-on) ====== */}
        {/* Trapezoid: narrower at bottom, wider at top (skip bin shape) */}
        <polygon
          points="88,228 278,228 295,82 68,82"
          fill={`url(#gf-${size})`}
        />

        {/* ====== LEFT END FACE (short side, subtle angle) ====== */}
        <polygon
          points="88,228 68,82 42,78 58,222"
          fill={`url(#ge-${size})`}
        />

        {/* Vertical reinforcement channel on end face */}
        <line x1="63" y1="222" x2="48" y2="80" stroke={DARKER} strokeWidth="3" opacity="0.4" />
        <line x1="76" y1="226" x2="58" y2="81" stroke={DARKER} strokeWidth="3" opacity="0.3" />

        {/* ====== TOP RIM (thick raised lip) ====== */}

        {/* Front rim outer face */}
        <polygon
          points="68,82 295,82 298,72 65,72"
          fill={LIGHT}
        />

        {/* Left end rim outer face */}
        <polygon
          points="68,82 42,78 39,69 65,72"
          fill={MID}
        />

        {/* Rim top surface */}
        <polygon
          points="65,72 298,72 268,62 39,69"
          fill={MAIN}
        />

        {/* ====== INTERIOR visible from top ====== */}
        <polygon
          points="72,82 290,82 268,62 46,69"
          fill={INSIDE}
        />

        {/* ====== RIVETS on front face below rim (4 bolts) ====== */}
        {[115, 160, 205, 250].map((cx, i) => (
          <g key={`r-${i}`}>
            <circle cx={cx} cy="83" r="6" fill={LIGHT} />
            <circle cx={cx} cy="83" r="4.5" fill={MAIN} />
            <circle cx={cx - 1} cy={81.5} r="1.5" fill="rgba(255,255,255,0.35)" />
          </g>
        ))}

        {/* ====== DOOR on LEFT END ====== */}
        {/* The door is on the end face, hinged at mid-height, swung down to lay flat on ground */}

        {/* Door opening (dark hole in end face) */}
        <polygon
          points="88,228 58,222 54,148 84,150"
          fill={DARKER}
          opacity="0.75"
        />
        {/* Door opening top frame line */}
        <line x1="54" y1="148" x2="84" y2="150" stroke={INSIDE} strokeWidth="2" />

        {/* Door panel - laying nearly flat on ground like a ramp */}
        {/* Hinged at the opening top, rests on ground extending outward */}
        <polygon
          points="54,148 84,150 55,232 22,228"
          fill={MID}
          stroke={DARK}
          strokeWidth="1"
        />

        {/* Door panel top surface (thickness visible since it's nearly flat) */}
        <polygon
          points="22,228 55,232 55,226 22,222"
          fill={MAIN}
        />
        {/* Door front edge (thickness) */}
        <polygon
          points="22,222 22,228 55,232 55,226"
          fill={DARK}
        />

        {/* Door highlight */}
        <polygon
          points="54,148 84,150 55,226 22,222"
          fill="rgba(255,255,255,0.05)"
        />

        {/* ====== BRANDING on front face ====== */}
        <text
          x="183"
          y="155"
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
          x="183"
          y="178"
          textAnchor="middle"
          fill="white"
          fontFamily="Outfit, sans-serif"
          fontWeight="800"
          fontSize="17"
          opacity="0.95"
        >
          Skips
        </text>

        {/* ====== EDGE LINES ====== */}
        <line x1="88" y1="228" x2="278" y2="228" stroke={DARK} strokeWidth="1.5" />
        <line x1="58" y1="222" x2="88" y2="228" stroke={DARKER} strokeWidth="1.5" />
        <line x1="88" y1="228" x2="68" y2="82" stroke={DARK} strokeWidth="1" opacity="0.35" />
      </g>

      {/* No size label on SVG */}
    </svg>
  );
}
