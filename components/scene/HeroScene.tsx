/** The unfinished property behind the homepage hero. */
export function HeroScene() {
  return (
    <svg
      className="h-full w-full object-cover motion-safe:animate-drift"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16233F"/><stop offset="1" stopColor="#0A1428"/>
        </linearGradient>
        <linearGradient id="hFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#101B33"/><stop offset="1" stopColor="#050B1A"/>
        </linearGradient>
        <linearGradient id="hLight" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#9FC0EA" stopOpacity=".5"/>
          <stop offset="1" stopColor="#9FC0EA" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="hGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B9D2F2"/><stop offset="1" stopColor="#6C8DBE"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="#070E20"/>
      {/* ceiling */}
      <polygon points="0,0 1600,0 1330,196 268,196" fill="#0C1730"/>
      {/* side walls */}
      <polygon points="0,0 268,196 268,672 0,900" fill="#0E1A34"/>
      <polygon points="1600,0 1330,196 1330,672 1600,900" fill="#0B1526"/>
      {/* back wall */}
      <rect x="268" y="196" width="1062" height="476" fill="url(#hWall)"/>
      {/* floor */}
      <polygon points="0,900 1600,900 1330,672 268,672" fill="url(#hFloor)"/>
      {/* subfloor seams */}
      <g stroke="#1B2942" strokeWidth="2" opacity=".85">
        <path d="M268 736 L1330 736"/><path d="M180 812 L1420 812"/>
        <path d="M560 672 L470 900"/><path d="M1040 672 L1130 900"/>
      </g>
      {/* exposed studs, left of window */}
      <g opacity=".9">
        <rect x="300" y="196" width="252" height="476" fill="#0A1327"/>
        <g fill="#23324F">
          <rect x="308" y="196" width="15" height="476"/><rect x="378" y="196" width="15" height="476"/>
          <rect x="448" y="196" width="15" height="476"/><rect x="518" y="196" width="15" height="476"/>
          <rect x="300" y="424" width="252" height="13"/>
        </g>
      </g>
      {/* window with cold daylight */}
      <rect x="920" y="252" width="330" height="290" fill="url(#hGlass)" opacity=".82"/>
      <g stroke="#0A1428" strokeWidth="9" fill="none">
        <rect x="920" y="252" width="330" height="290"/>
        <path d="M1085 252 L1085 542 M920 397 L1250 397"/>
      </g>
      <polygon points="920,252 1250,252 1470,900 640,900" fill="url(#hLight)"/>
      {/* plastic sheeting tacked over part of window */}
      <polygon points="920,252 1250,252 1258,560 912,548" fill="#C9DDF5" opacity=".14"/>
      {/* hanging wire, no fixture */}
      <path d="M760 196 C 762 250 748 286 756 330" stroke="#3A4763" strokeWidth="4" fill="none"/>
      <circle cx="756" cy="336" r="7" fill="#4C5A78"/>
      {/* ladder */}
      <g stroke="#2A3A5C" strokeWidth="9" fill="none" opacity=".95">
        <path d="M430 300 L392 742"/><path d="M520 300 L560 742"/>
        <path d="M437 380 L513 380"/><path d="M427 470 L523 470"/>
        <path d="M416 560 L534 560"/><path d="M406 650 L545 650"/>
      </g>
      {/* drywall sheets leaning */}
      <g opacity=".92">
        <polygon points="1268,300 1372,318 1360,690 1256,700" fill="#1A2740"/>
        <polygon points="1300,312 1404,330 1392,700 1288,710" fill="#213052"/>
      </g>
      {/* bucket + debris */}
      <path d="M660 700 L716 700 L706 762 L670 762 Z" fill="#22314E"/>
      <path d="M658 700 Q688 682 718 700" stroke="#2E3F60" strokeWidth="5" fill="none"/>
      <ellipse cx="880" cy="784" rx="120" ry="17" fill="#0E1A31"/>
      <path d="M812 784 L860 752 L906 784 Z" fill="#17233C"/>
      {/* pipe stub */}
      <rect x="614" y="596" width="12" height="66" fill="#2B3A57"/>
      <rect x="602" y="586" width="36" height="14" fill="#33445F"/>
    </svg>
  );
}
