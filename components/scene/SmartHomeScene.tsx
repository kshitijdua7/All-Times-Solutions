/** The lit house behind the Home Automation page header. */
export function SmartHomeScene() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 1600 760"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#04102A"/><stop offset="1" stopColor="#0B2145"/></linearGradient>
        <radialGradient id="aHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#D6960E" stopOpacity=".26"/>
          <stop offset="1" stopColor="#D6960E" stopOpacity="0"/></radialGradient>
      </defs>
      <rect width="1600" height="760" fill="url(#aSky)"/>
      <ellipse cx="1250" cy="400" rx="470" ry="330" fill="url(#aHalo)"/>
      <g stroke="rgba(214,150,14,.18)" fill="none">
        <circle cx="1250" cy="400" r="280"/><circle cx="1250" cy="400" r="196"/>
      </g>
      <g transform="translate(430,96) scale(0.82)">
      <polygon points="1080,120 1360,300 800,300" fill="#15305F"/>
      <rect x="856" y="300" width="448" height="300" fill="#0E2450"/>
      <rect x="856" y="596" width="448" height="12" fill="#0A1E44"/>
      <g id="smartWin" fill="#FFD79A" className="[&>rect]:opacity-100 motion-safe:[&>rect]:animate-winOn">
        <rect x="896" y="340" width="96" height="86" style={{ animationDelay: '0s' }}/>
        <rect x="1032" y="340" width="96" height="86" style={{ animationDelay: '-1.4s' }}/>
        <rect x="1168" y="340" width="96" height="86" style={{ animationDelay: '-2.8s' }}/>
        <rect x="896" y="466" width="96" height="86" style={{ animationDelay: '-4.2s' }}/>
        <rect x="1168" y="466" width="96" height="86" style={{ animationDelay: '-5.6s' }}/>
      </g>
      <rect x="1032" y="466" width="96" height="134" fill="#D6960E" opacity=".75"/>
      <circle cx="1046" cy="536" r="6" fill="#0A1E44"/>
      </g>
      <g fill="none" stroke="#D6960E" strokeWidth="4" strokeLinecap="round" opacity=".55">
        <path d="M1140 176 a86 86 0 0 1 124 0" opacity=".4"/>
        <path d="M1166 208 a50 50 0 0 1 72 0" opacity=".7"/>
        <circle cx="1202" cy="244" r="8" fill="#D6960E" stroke="none"/>
      </g>
    </svg>
  );
}
