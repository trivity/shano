import React from "react";

const binProfiles = {
  "2": { scale: 0.7, label: "2m\u00b3" },
  "3": { scale: 0.8, label: "3m\u00b3" },
  "4": { scale: 0.9, label: "4m\u00b3" },
  "6": { scale: 1.0, label: "6m\u00b3" },
};

export default function SkipBinSVG({ size = "4", className = "" }) {
  const profile = binProfiles[size] || binProfiles["4"];
  const { scale, label } = profile;

  return (
    <svg
      viewBox="0 0 320 280"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${label} Marrel Skip Bin`}
    >
      <g transform={`translate(${160 - 150 * scale}, ${260 - 220 * scale}) scale(${scale})`}>
        {/* Shadow */}
        <ellipse cx="155" cy="235" rx="130" ry="18" fill="rgba(0,0,0,0.08)" />

        {/* === 3D ISOMETRIC SKIP BIN === */}

        {/* Right side face (darker) */}
        <polygon
          points="170,60 300,90 290,220 160,210"
          fill="#8B0000"
        />

        {/* Front face (main red) */}
        <polygon
          points="10,90 170,60 160,210 0,220"
          fill="#bf0403"
        />

        {/* Top opening (inside - dark) */}
        <polygon
          points="10,90 170,60 300,90 140,115"
          fill="#600"
        />

        {/* Top rim - front edge */}
        <polygon
          points="10,85 170,55 170,60 10,90"
          fill="#d40404"
        />

        {/* Top rim - right edge */}
        <polygon
          points="170,55 300,85 300,90 170,60"
          fill="#900"
        />

        {/* Top rim - inner front */}
        <polygon
          points="15,90 140,110 170,60 10,90"
          fill="#700"
        />

        {/* Top rim - inner right */}
        <polygon
          points="140,110 295,90 300,90 170,60"
          fill="#500"
        />

        {/* Rivets along front top rim */}
        {[35, 65, 95, 125, 150].map((x, i) => {
          const y = 90 - (x - 10) * (30 / 160);
          return (
            <circle key={`rf${i}`} cx={x} cy={y + 2} r="4" fill="#d40404" stroke="#900" strokeWidth="0.5" />
          );
        })}

        {/* Rivets along right top rim */}
        {[195, 220, 245, 270].map((x, i) => {
          const progress = (x - 170) / 130;
          const y = 60 + progress * 30;
          return (
            <circle key={`rr${i}`} cx={x} cy={y + 2} r="3.5" fill="#900" stroke="#700" strokeWidth="0.5" />
          );
        })}

        {/* Front reinforcement bar */}
        <line x1="6" y1="155" x2="165" y2="140" stroke="#8B0000" strokeWidth="2.5" opacity="0.5" />

        {/* Right side reinforcement bar */}
        <line x1="165" y1="140" x2="295" y2="160" stroke="#600" strokeWidth="2" opacity="0.5" />

        {/* Walk-in door (front-left, swung open outward) */}
        {/* Door opening/cutout on the bin */}
        <polygon
          points="10,160 55,155 50,210 0,215"
          fill="#900"
          opacity="0.6"
        />

        {/* Door panel (swung open, angled outward) */}
        <polygon
          points="10,160 -35,175 -30,230 0,215"
          fill="#bf0403"
          stroke="#8B0000"
          strokeWidth="1"
        />
        {/* Door panel inner shadow */}
        <polygon
          points="10,160 -35,175 -30,230 0,215"
          fill="rgba(0,0,0,0.15)"
        />
        {/* Door hinge dots */}
        <circle cx="8" cy="165" r="2" fill="#600" />
        <circle cx="3" cy="210" r="2" fill="#600" />

        {/* Brand text on front face */}
        <text
          x="90"
          y="145"
          textAnchor="middle"
          fill="white"
          fontFamily="Outfit, sans-serif"
          fontWeight="800"
          fontSize="18"
          opacity="0.9"
          transform="skewY(-2)"
        >
          SHANO'S
        </text>
        <text
          x="90"
          y="167"
          textAnchor="middle"
          fill="white"
          fontFamily="Outfit, sans-serif"
          fontWeight="800"
          fontSize="16"
          opacity="0.9"
          transform="skewY(-2)"
        >
          SKIPS
        </text>

        {/* Bottom edge - front */}
        <line x1="0" y1="220" x2="160" y2="210" stroke="#600" strokeWidth="1.5" />
        {/* Bottom edge - right */}
        <line x1="160" y1="210" x2="290" y2="220" stroke="#500" strokeWidth="1.5" />
      </g>

      {/* Size label */}
      <text
        x="160"
        y="270"
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
