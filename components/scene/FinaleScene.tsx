/** The finished interior behind the closing call to action. */
export function FinaleScene() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#12294F"/><stop offset="1" stopColor="#061633"/></linearGradient>
        <linearGradient id="fSun" x1="0" y1="0" x2=".4" y2="1">
          <stop offset="0" stopColor="#FFDCA6" stopOpacity=".55"/>
          <stop offset="1" stopColor="#FFDCA6" stopOpacity="0"/></linearGradient>
      </defs>
      <rect width="1600" height="700" fill="url(#fWall)"/>
      <polygon points="0,700 1600,700 1360,470 240,470" fill="#0A1B3A"/>
      <rect x="1000" y="120" width="330" height="300" fill="#8FB8E6" opacity=".55"/>
      <g stroke="#0A1B3A" strokeWidth="10" fill="none"><rect x="1000" y="120" width="330" height="300"/>
        <path d="M1165 120v300M1000 270h330"/></g>
      <polygon points="1000,120 1330,120 1600,700 700,700" fill="url(#fSun)"/>
      <path d="M300 300 h420 a24 24 0 0 1 24 24 v96 h-468 v-96 a24 24 0 0 1 24 -24z" fill="#1B3055"/>
      <rect x="284" y="400" width="468" height="82" rx="18" fill="#26406C"/>
      <g fill="#D6960E" opacity=".85"><rect x="350" y="330" width="70" height="58" rx="10"/>
        <rect x="620" y="330" width="70" height="58" rx="10"/></g>
      <ellipse cx="520" cy="546" rx="380" ry="58" fill="#0E2144"/>
      <g stroke="#3F6B4A" strokeWidth="9" fill="none" strokeLinecap="round" opacity=".8">
        <path d="M1440 470 C 1436 400 1404 384 1392 344"/><path d="M1440 470 C 1448 404 1478 388 1494 350"/></g>
      <path d="M1400 470 h84 l-12 92 h-60z" fill="#7C4B2E" opacity=".8"/>
    </svg>
  );
}
