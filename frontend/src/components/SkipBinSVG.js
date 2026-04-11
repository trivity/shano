import React from "react";

const binProfiles = {
  "2": { scale: 0.72, label: "2m\u00b3" },
  "3": { scale: 0.82, label: "3m\u00b3" },
  "4": { scale: 0.91, label: "4m\u00b3" },
  "6": { scale: 1.0, label: "6m\u00b3" },
};

/* Colour palette — red version of the reference */
const C = {
  front: "#bf0403",      /* main front face */
  frontLt: "#cc1a1a",    /* front face lighter top gradient */
  end: "#9e0303",        /* left end face */
  endDk: "#7a0202",      /* end face darker shade */
  rim: "#d42020",        /* top rim outer */
  rimTop: "#bf0403",     /* rim top surface */
  inside: "#3a0101",     /* interior darkness */
  insideWall: "#4d0101", /* interior back wall hint */
  rivet: "#d42020",      /* rivet highlight */
  rivetBody: "#a80303",  /* rivet base */
  doorFace: "#9e0303",   /* door panel face */
  doorEdge: "#6b0101",   /* door edge/thickness */
  doorTop: "#b80303",    /* door top surface */
  edge: "#6b0101",       /* dark edge lines */
  shadow: "rgba(0,0,0,0.07)",
};

export default function SkipBinSVG({ size = "4", className = "" }) {
  const profile = binProfiles[size] || binProfiles["4"];
  const { scale } = profile;

  /* offset so smaller bins stay centred */
  const ox = 160 - 155 * scale;
  const oy = 245 - 215 * scale;

  return (
    <svg
      viewBox="0 0 340 270"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${binProfiles[size].label} Marrel Skip Bin`}
    >
      <defs>
        <linearGradient id={`fg-${size}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.frontLt} />
          <stop offset="100%" stopColor={C.front} />
        </linearGradient>
      </defs>

      <g transform={`translate(${ox},${oy}) scale(${scale})`}>

        {/* ── ground shadow ── */}
        <ellipse cx="185" cy="230" rx="130" ry="10" fill={C.shadow} />

        {/* ════════════════════════════════
            LEFT END FACE  (short side, door side)
            Viewed at a subtle angle — narrower than front
            Trapezoid: wider at top, narrower at bottom
        ════════════════════════════════ */}
        <polygon
          points="82,226  62,76  30,72  48,218"
          fill={C.end}
        />

        {/* Vertical structural ribs on end face */}
        <line x1="58" y1="220" x2="38" y2="73" stroke={C.endDk} strokeWidth="4" opacity="0.35" />
        <line x1="72" y1="224" x2="54" y2="75" stroke={C.endDk} strokeWidth="3" opacity="0.25" />

        {/* ════════════════════════════════
            FRONT FACE  (long side — main visible face)
            Trapezoid: wider at top, narrower at bottom
        ════════════════════════════════ */}
        <polygon
          points="82,226  290,226  310,76  62,76"
          fill={`url(#fg-${size})`}
        />

        {/* ════════════════════════════════
            TOP RIM  (thick raised lip around top edge)
        ════════════════════════════════ */}

        {/* Front rim — outer vertical strip */}
        <polygon
          points="62,76  310,76  312,66  59,66"
          fill={C.rim}
        />

        {/* Left end rim — outer vertical strip */}
        <polygon
          points="62,76  30,72  28,63  59,66"
          fill={C.end}
        />

        {/* Rim top surface (flat, recedes into depth) */}
        <polygon
          points="59,66  312,66  282,57  28,63"
          fill={C.rimTop}
        />

        {/* ════════════════════════════════
            INTERIOR  (visible through open top)
        ════════════════════════════════ */}
        <polygon
          points="66,76  305,76  282,57  34,63"
          fill={C.inside}
        />
        {/* hint of back-wall / floor */}
        <polygon
          points="66,76  305,76  290,67  42,68"
          fill={C.insideWall}
          opacity="0.5"
        />

        {/* ════════════════════════════════
            RIVETS  (4 round bolts on front face)
        ════════════════════════════════ */}
        {[120, 165, 215, 265].map((cx, i) => (
          <g key={i}>
            <circle cx={cx} cy="77" r="7" fill={C.rivet} />
            <circle cx={cx} cy="77" r="5.5" fill={C.rivetBody} />
            <circle cx={cx - 1.2} cy={75.5} r="2" fill="rgba(255,255,255,0.25)" />
          </g>
        ))}

        {/* ════════════════════════════════
            WALK-IN DOOR
            Small panel cut from bottom ~35% of end face.
            Hinged at top of opening, swung down to lay
            flat on the ground like a step / ramp.
        ════════════════════════════════ */}

        {/* Door OPENING (dark cutout in end face) */}
        <polygon
          points="82,226  48,218  46,162  79,166"
          fill={C.inside}
          opacity="0.8"
        />
        {/* Opening top-edge line (hinge line) */}
        <line x1="46" y1="162" x2="79" y2="166" stroke={C.edge} strokeWidth="1.5" />

        {/* Door PANEL — laying flat on the ground
            Top edge connects to hinge line at base of opening.
            Panel extends outward, its far edge sits on the ground. */}

        {/* Panel top face (the surface you'd step on) */}
        <polygon
          points="46,162  79,166  46,228  10,222"
          fill={C.doorFace}
        />

        {/* Panel front edge (thickness — ~5px tall) */}
        <polygon
          points="10,222  46,228  46,234  10,228"
          fill={C.doorEdge}
        />

        {/* Panel left edge (thickness) */}
        <polygon
          points="10,222  10,228  46,162  46,162"
          fill={C.doorTop}
          opacity="0.3"
        />

        {/* Subtle highlight on panel */}
        <polygon
          points="46,162  79,166  46,228  10,222"
          fill="rgba(255,255,255,0.04)"
        />

        {/* ════════════════════════════════
            BRANDING  (centred on front face)
        ════════════════════════════════ */}
        <text
          x="190" y="152"
          textAnchor="middle"
          fill="white" opacity="0.9"
          fontFamily="Outfit, sans-serif"
          fontWeight="800" fontSize="19"
        >
          Shano's
        </text>
        <text
          x="190" y="174"
          textAnchor="middle"
          fill="white" opacity="0.9"
          fontFamily="Outfit, sans-serif"
          fontWeight="800" fontSize="16"
        >
          Skips
        </text>

        {/* ── bottom edge lines ── */}
        <line x1="82"  y1="226" x2="290" y2="226" stroke={C.edge} strokeWidth="1.5" />
        <line x1="48"  y1="218" x2="82"  y2="226" stroke={C.edge} strokeWidth="1.5" />
        {/* front-left vertical corner */}
        <line x1="82" y1="226" x2="62" y2="76" stroke={C.edge} strokeWidth="1" opacity="0.3" />
      </g>
    </svg>
  );
}
