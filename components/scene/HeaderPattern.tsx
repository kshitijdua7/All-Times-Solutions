/**
 * Default backdrop for inner-page headers: a faint site-plan grid with the
 * roofline from the All Time Solutions mark drawn over it in hairlines.
 * Quiet enough to sit behind a headline, specific enough not to read as a
 * generic gradient.
 */
export function HeaderPattern() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 1600 620"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <pattern id="hpGrid" width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M64 0H0v64" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
        </pattern>
        <radialGradient id="hpGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#D6960E" stopOpacity=".18" />
          <stop offset="1" stopColor="#D6960E" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1600" height="620" fill="#01143C" />
      <rect width="1600" height="620" fill="url(#hpGrid)" />
      <ellipse cx="1210" cy="300" rx="430" ry="330" fill="url(#hpGlow)" />

      <g fill="none" stroke="rgba(214,150,14,.22)" strokeWidth="2">
        <circle cx="1210" cy="300" r="252" />
        <circle cx="1210" cy="300" r="176" />
      </g>

      {/* the roofline from the mark, drawn as a hairline */}
      <g fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="3" strokeLinejoin="round">
        <path d="M1010 320 L1210 148 L1410 320" />
        <path d="M1058 300 v190 h304 v-190" />
        <path d="M1158 490 v-96 h104 v96" />
        <path d="M1330 208 v-52 h44 v90" />
      </g>
      <g fill="none" stroke="rgba(214,150,14,.34)" strokeWidth="3">
        <rect x="1092" y="330" width="70" height="62" />
        <path d="M1127 330 v62 M1092 361 h70" />
      </g>

      {/* dimension marks, the way a site plan would carry them */}
      <g stroke="rgba(255,255,255,.12)" strokeWidth="2">
        <path d="M1010 542 h400" />
        <path d="M1010 530 v24 M1410 530 v24" />
      </g>
    </svg>
  );
}
