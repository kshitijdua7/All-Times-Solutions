/**
 * The room that rebuilds itself.
 *
 * Entirely hand-drawn vector — no photography, no video, nothing to download
 * before it renders, and crisp on any screen. Every part that changes has an
 * id; the stage rules that drive them live in app/globals.css under
 * "The transforming room".
 *
 * Stage classes (on-1 … on-6) are applied cumulatively by RenovationJourney,
 * which is what lets the whole sequence run backwards when the visitor
 * scrolls back up.
 */
export function RoomScene({ stage }: { stage: number }) {
  const stages = Array.from({ length: 6 }, (_, i) => i + 1)
    .filter((n) => stage >= n)
    .map((n) => `on-${n}`)
    .join(' ');

  return (
    <svg
      className={`scene h-full w-full ${stages}`}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gFloorFin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9A6C43"/><stop offset="1" stopColor="#B78855"/>
        </linearGradient>
        <linearGradient id="gSheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".55"/>
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"/>
        </linearGradient>
        <radialGradient id="gLamp" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#FFD79A" stopOpacity=".95"/>
          <stop offset="1" stopColor="#FFD79A" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="gSun" x1="0" y1="0" x2=".3" y2="1">
          <stop offset="0" stopColor="#FFE3B0" stopOpacity=".85"/>
          <stop offset="1" stopColor="#FFE3B0" stopOpacity="0"/>
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill="#141C2C"/>
      <polygon id="ceil" points="0,0 1600,0 1330,196 268,196" fill="#C6C2BA"/>
      <polygon id="wallL" points="0,0 268,196 268,672 0,900" fill="#A19D95"/>
      <polygon id="wallR" points="1600,0 1330,196 1330,672 1600,900" fill="#ADA9A1"/>
      <rect id="wallB" x="268" y="196" width="1062" height="476" fill="#B7B3AB"/>

      {/* window opening */}
      <rect id="sky" x="936" y="266" width="316" height="282" fill="#8FA6C2"/>
      <g opacity=".5" fill="#7C93B0">
        <rect x="936" y="470" width="316" height="78"/>
        <circle cx="1200" cy="316" r="26" fill="#C9DCEF" opacity=".8"/>
      </g>
      <g fill="#6E6A62"><rect x="1088" y="266" width="12" height="282"/>
        <rect x="936" y="401" width="316" height="12"/></g>
      <polygon id="sheet" points="930,258 1258,258 1266,566 922,554" fill="#DCE9F7" opacity=".5"/>
      <g id="casing" fill="#FFFFFF">
        <rect x="920" y="250" width="348" height="18"/><rect x="920" y="546" width="348" height="22"/>
        <rect x="920" y="250" width="18" height="318"/><rect x="1250" y="250" width="18" height="318"/>
      </g>
      <g id="blinds">
        <rect x="940" y="262" width="308" height="16" fill="#F2F0EA"/>
        <g fill="#EAE7DF">
          <rect x="944" y="286" width="300" height="13"/><rect x="944" y="309" width="300" height="13"/>
          <rect x="944" y="332" width="300" height="13"/><rect x="944" y="355" width="300" height="13"/>
          <rect x="944" y="378" width="300" height="13"/><rect x="944" y="401" width="300" height="13"/>
          <rect x="944" y="424" width="300" height="13"/><rect x="944" y="447" width="300" height="13"/>
        </g>
        <g fill="#D6D2C8" opacity=".75">
          <rect x="944" y="299" width="300" height="3"/><rect x="944" y="322" width="300" height="3"/>
          <rect x="944" y="345" width="300" height="3"/><rect x="944" y="368" width="300" height="3"/>
          <rect x="944" y="391" width="300" height="3"/><rect x="944" y="414" width="300" height="3"/>
          <rect x="944" y="437" width="300" height="3"/>
        </g>
        <rect x="1236" y="262" width="4" height="212" fill="#C7C2B6"/>
      </g>

      {/* unfinished drywall: seams, patches, screws */}
      <g id="seams" stroke="#9E9A92" fill="none">
        <path d="M636 196 L636 672" strokeWidth="4"/>
        <path d="M268 430 L1330 430" strokeWidth="3" opacity=".7"/>
        <path d="M900 196 L900 672" strokeWidth="4" opacity=".8"/>
        <g fill="#DAD5C9" stroke="none" opacity=".9">
          <ellipse cx="700" cy="330" rx="54" ry="34"/><ellipse cx="820" cy="560" rx="42" ry="26"/>
          <ellipse cx="1240" cy="248" rx="36" ry="22"/><ellipse cx="330" cy="600" rx="46" ry="28"/>
        </g>
        <g fill="#8B877F" stroke="none">
          <circle cx="636" cy="260" r="4"/><circle cx="636" cy="340" r="4"/><circle cx="636" cy="420" r="4"/>
          <circle cx="636" cy="500" r="4"/><circle cx="636" cy="580" r="4"/>
          <circle cx="900" cy="300" r="4"/><circle cx="900" cy="470" r="4"/><circle cx="900" cy="620" r="4"/>
        </g>
      </g>

      {/* exposed stud bay, later covered */}
      <g id="studbay">
        <rect x="300" y="200" width="284" height="470" fill="#5E5245"/>
        <g fill="#C9A96F">
          <rect x="306" y="200" width="20" height="470"/><rect x="376" y="200" width="20" height="470"/>
          <rect x="446" y="200" width="20" height="470"/><rect x="516" y="200" width="20" height="470"/>
          <rect x="300" y="424" width="284" height="16"/>
        </g>
        <g fill="#D9A7A0" opacity=".85">
          <rect x="326" y="206" width="50" height="212"/><rect x="396" y="206" width="50" height="212"/>
          <rect x="466" y="206" width="50" height="212"/>
        </g>
        <path d="M536 236 C 566 300 520 350 552 410" stroke="#3C4A66" strokeWidth="6" fill="none"/>
      </g>
      <rect id="dwpanel" x="298" y="198" width="288" height="474" fill="#BCB8B0"/>

      {/* ceiling wire → pendant fixture */}
      <path id="wire" d="M770 196 C 774 254 758 292 766 344" stroke="#39445E" strokeWidth="5" fill="none"/>
      <g id="fixture">
        <path d="M770 196 L770 300" stroke="#2E3A52" strokeWidth="4"/>
        <ellipse cx="770" cy="352" rx="66" ry="18" fill="#0B1A33"/>
        <path d="M704 352 L770 300 L836 352 Z" fill="#12274A"/>
        <ellipse cx="770" cy="352" rx="24" ry="8" fill="#FFE7B8"/>
      </g>
      <ellipse id="lampglow" cx="770" cy="372" rx="300" ry="180" fill="url(#gLamp)"/>

      {/* plumbing stub → finished valve */}
      <rect id="pipe" x="646" y="574" width="14" height="82" fill="#7C6A52"/>
      <g id="valve">
        <rect x="628" y="560" width="50" height="18" fill="#C4CDD8"/>
        <circle cx="653" cy="548" r="15" fill="none" stroke="#C4CDD8" strokeWidth="7"/>
        <rect x="640" y="626" width="26" height="30" fill="#AFBAC7"/>
      </g>
      <g id="outlets" fill="#FBFAF7">
        <rect x="740" y="586" width="34" height="52" rx="3"/>
        <g fill="#B9B4A9"><circle cx="757" cy="602" r="4"/><circle cx="757" cy="620" r="4"/></g>
        <rect x="1286" y="392" width="36" height="54" rx="3"/>
        <rect x="1298" y="406" width="12" height="26" fill="#DAD5C9"/>
      </g>

      {/* floors */}
      <polygon id="floorRaw" points="0,900 1600,900 1330,672 268,672" fill="#C0A275"/>
      <g id="floorRawLines" opacity="0"></g>
      <polygon id="floorFin" points="0,900 1600,900 1330,672 268,672" fill="url(#gFloorFin)"/>
      <g id="base" fill="#FFFFFF">
        <rect x="268" y="640" width="1062" height="32"/>
        <polygon points="0,858 268,640 268,672 0,900"/>
        <polygon points="1600,858 1330,640 1330,672 1600,900"/>
      </g>
      <polygon id="sheen" points="268,700 1330,700 1600,900 0,900" fill="url(#gSheen)"/>
      <polygon id="sunbeam" points="936,266 1252,266 1560,900 700,900" fill="url(#gSun)"/>

      {/* construction clutter */}
      <g id="clutterA">
        <polygon points="120,300 236,322 224,760 108,782" fill="#CFCAC0"/>
        <polygon points="150,312 266,334 254,772 138,794" fill="#DEDAD1"/>
        <rect x="1360" y="470" width="180" height="24" fill="#C9A96F"/>
        <rect x="1360" y="504" width="180" height="24" fill="#B99A62"/>
      </g>
      <g id="clutterB">
        <polygon points="330,720 900,700 980,900 200,900" fill="#D8D3C6" opacity=".62"/>
        <g stroke="#7E8AA0" strokeWidth="11" fill="none" transform="translate(-660,0)">
          <path d="M1050 330 L1010 806"/><path d="M1156 330 L1200 806"/>
          <path d="M1058 420 L1148 420"/><path d="M1046 520 L1160 520"/>
          <path d="M1034 620 L1172 620"/><path d="M1022 720 L1184 720"/>
        </g>
        <path d="M560 762 L636 762 L622 856 L574 856 Z" fill="#4E617F"/>
        <path d="M556 762 Q598 738 640 762" stroke="#6B7C97" strokeWidth="6" fill="none"/>
        <rect x="596" y="700" width="14" height="66" fill="#8A6A43" transform="rotate(18 603 733)"/>
        <ellipse cx="800" cy="836" rx="96" ry="16" fill="#A79C88" opacity=".7"/>
        <path d="M746 836 L790 806 L836 836 Z" fill="#BDB19B"/>
        <rect x="1240" y="800" width="150" height="52" rx="6" fill="#3C4A66"/>
        <rect x="1272" y="782" width="86" height="20" rx="9" fill="#2B3750"/>
      </g>

      {/* floating dust */}
      <g id="dustP" fill="#FFFFFF" opacity=".85">
        <circle className="mote" cx="420" cy="300" r="3.4" opacity=".5" style={{ animationDelay: '-1s' }}/>
        <circle className="mote" cx="620" cy="420" r="2.6" opacity=".42" style={{ animationDelay: '-3s' }}/>
        <circle className="mote" cx="880" cy="250" r="3" opacity=".5" style={{ animationDelay: '-5s' }}/>
        <circle className="mote" cx="1010" cy="480" r="2.4" opacity=".4" style={{ animationDelay: '-2s' }}/>
        <circle className="mote" cx="1180" cy="360" r="3.6" opacity=".55" style={{ animationDelay: '-6s' }}/>
        <circle className="mote" cx="520" cy="560" r="2.2" opacity=".38" style={{ animationDelay: '-4s' }}/>
        <circle className="mote" cx="1320" cy="600" r="3" opacity=".45" style={{ animationDelay: '-7s' }}/>
        <circle className="mote" cx="760" cy="640" r="2.8" opacity=".4" style={{ animationDelay: '-8s' }}/>
      </g>

      {/* the finished home */}
      <g id="furniture">
        <ellipse cx="820" cy="812" rx="452" ry="80" fill="#C6BCA9"/>
        <ellipse cx="820" cy="812" rx="392" ry="62" fill="none" stroke="#B0A48D" strokeWidth="4"/>
        <g id="art" transform="translate(152,-34)">
          <rect x="356" y="288" width="196" height="150" fill="#FFFFFF" stroke="#D6960E" strokeWidth="5"/>
          <polygon points="372,424 434,346 480,398 520,362 536,424" fill="#C7D4E4"/>
          <circle cx="498" cy="322" r="16" fill="#E8CFA0"/>
        </g>
        {/* sofa */}
        <path d="M486 566 h432 a22 22 0 0 1 22 22 v88 h-476 v-88 a22 22 0 0 1 22 -22 z" fill="#2C3E5E"/>
        <rect x="470" y="656" width="476" height="80" rx="18" fill="#3B5177"/>
        <rect x="464" y="640" width="46" height="106" rx="16" fill="#2C3E5E"/>
        <rect x="906" y="640" width="46" height="106" rx="16" fill="#2C3E5E"/>
        <g fill="#D6960E">
          <rect x="536" y="600" width="72" height="60" rx="10" transform="rotate(-8 572 630)"/>
          <rect x="812" y="600" width="72" height="60" rx="10" transform="rotate(7 848 630)"/>
        </g>
        <g fill="#1B2740"><rect x="500" y="736" width="14" height="26"/><rect x="898" y="736" width="14" height="26"/></g>
        {/* coffee table */}
        <rect x="662" y="782" width="300" height="14" rx="4" fill="#8A5F3C"/>
        <g fill="#6E4B2E"><rect x="682" y="796" width="12" height="42"/><rect x="930" y="796" width="12" height="42"/></g>
        <rect x="742" y="762" width="70" height="20" rx="4" fill="#EDE7DA"/>
        {/* floor lamp */}
        <rect x="1012" y="500" width="8" height="286" fill="#2C3E5E"/>
        <ellipse cx="1016" cy="790" rx="46" ry="12" fill="#2C3E5E"/>
        <path d="M968 500 L1064 500 L1046 434 L986 434 Z" fill="#F0E3C7"/>
        {/* plant */}
        <path d="M1176 706 h84 l-12 92 h-60 z" fill="#B9744A"/>
        <g stroke="#3F6B4A" strokeWidth="9" fill="none" strokeLinecap="round">
          <path d="M1218 706 C 1214 640 1180 620 1166 578"/>
          <path d="M1218 706 C 1224 646 1258 626 1276 588"/>
          <path d="M1218 706 C 1218 656 1216 618 1220 566"/>
        </g>
        <g fill="#4C7F58">
          <ellipse cx="1164" cy="572" rx="26" ry="15" transform="rotate(-28 1164 572)"/>
          <ellipse cx="1278" cy="582" rx="26" ry="15" transform="rotate(26 1278 582)"/>
          <ellipse cx="1220" cy="558" rx="24" ry="14"/>
        </g>
      </g>

      <rect id="cool" width="1600" height="900" fill="#16233F" opacity=".42"/>
      <rect id="warm" width="1600" height="900" fill="#FFC77A" opacity="0"/>
    </svg>
  );
}
