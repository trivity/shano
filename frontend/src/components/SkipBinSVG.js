import React from "react";

const binProfiles = {
  "2": { width: 140, height: 90, label: "2m\u00b3" },
  "3": { width: 155, height: 105, label: "3m\u00b3" },
  "4": { width: 170, height: 120, label: "4m\u00b3" },
  "6": { width: 190, height: 145, label: "6m\u00b3" },
};

export default function SkipBinSVG({ size = "4", className = "" }) {
  const profile = binProfiles[size] || binProfiles["4"];
  const { width, height, label } = profile;

  // SVG dimensions
  const svgW = 260;
  const svgH = 200;
  const baseY = svgH - 20;

  // Trapezoid points (Marrel skip bin shape)
  const leftBottomX = (svgW - width) / 2;
  const rightBottomX = leftBottomX + width;
  const topInset = 15;
  const leftTopX = leftBottomX - topInset;
  const rightTopX = rightBottomX + topInset;
  const topY = baseY - height;

  // Walk-in door on the left side
  const doorWidth = 25;
  const doorHeight = height * 0.6;
  const doorBottomY = baseY;
  const doorTopY = doorBottomY - doorHeight;

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${label} Marrel Skip Bin`}
    >
      {/* Shadow */}
      <ellipse cx={svgW / 2} cy={baseY + 5} rx={width / 2 + 20} ry={8} fill="rgba(0,0,0,0.08)" />

      {/* Main bin body */}
      <polygon
        points={`${leftBottomX},${baseY} ${rightBottomX},${baseY} ${rightTopX},${topY} ${leftTopX},${topY}`}
        fill="#bf0403"
        stroke="#8B0000"
        strokeWidth="1.5"
      />

      {/* Horizontal reinforcement bars */}
      {[0.3, 0.6].map((ratio, i) => {
        const barY = topY + height * ratio;
        const barLeftX = leftBottomX + (leftTopX - leftBottomX) * (1 - ratio);
        const barRightX = rightBottomX + (rightTopX - rightBottomX) * (1 - ratio);
        return (
          <line
            key={i}
            x1={barLeftX}
            y1={barY}
            x2={barRightX}
            y2={barY}
            stroke="#8B0000"
            strokeWidth="2"
            opacity="0.5"
          />
        );
      })}

      {/* Walk-in door (left side) */}
      <rect
        x={leftBottomX + 5}
        y={doorTopY}
        width={doorWidth}
        height={doorHeight}
        rx="2"
        fill="#D4302F"
        stroke="#8B0000"
        strokeWidth="1"
      />
      {/* Door handle */}
      <circle cx={leftBottomX + 5 + doorWidth - 6} cy={doorTopY + doorHeight / 2} r="2.5" fill="#8B0000" />

      {/* Top rim highlight */}
      <line
        x1={leftTopX}
        y1={topY}
        x2={rightTopX}
        y2={topY}
        stroke="#ff1420"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Brand label */}
      <text
        x={svgW / 2}
        y={topY + height * 0.45}
        textAnchor="middle"
        fill="white"
        fontFamily="Outfit, sans-serif"
        fontWeight="700"
        fontSize="14"
        opacity="0.9"
      >
        SHANO'S
      </text>
      <text
        x={svgW / 2}
        y={topY + height * 0.45 + 16}
        textAnchor="middle"
        fill="white"
        fontFamily="Outfit, sans-serif"
        fontWeight="700"
        fontSize="12"
        opacity="0.9"
      >
        SKIPS
      </text>

      {/* Size label */}
      <text
        x={svgW / 2}
        y={baseY + 16}
        textAnchor="middle"
        fill="#4B5563"
        fontFamily="Outfit, sans-serif"
        fontWeight="600"
        fontSize="13"
      >
        {label}
      </text>
    </svg>
  );
}
