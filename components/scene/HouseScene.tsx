/**
 * The house beside the turnover checklist. Each completed item adds a
 * `t1` … `t8` class, and the rules in globals.css turn that into a visible
 * change on the house: the crack closes, the wall gets boarded and painted,
 * the pipe appears, the windows light, the blinds drop, it sparkles, and
 * finally the door turns gold and gets a handle.
 */
export function HouseScene({ done }: { done: number }) {
  const marks = Array.from({ length: 8 }, (_, i) => i + 1)
    .filter((n) => done >= n)
    .map((n) => `t${n}`)
    .join(' ');

  return (
    <svg
      className={`house h-full w-full ${marks}`}
      viewBox="0 0 600 460"
      role="presentation"
      aria-hidden="true"
    >
      <defs><radialGradient id="hHalo" cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor="#FFD79A" stopOpacity=".55"/>
        <stop offset="1" stopColor="#FFD79A" stopOpacity="0"/></radialGradient></defs>
      <rect width="600" height="460" fill="none"/>
      <ellipse id="hGlow" className="st" cx="300" cy="290" rx="298" ry="230" fill="url(#hHalo)" opacity="0"/>
      <ellipse cx="300" cy="424" rx="238" ry="20" fill="rgba(255,255,255,.05)"/>
      <polygon id="hRoof" className="st" points="300 44 552 214 48 214" fill="#3A4A66"/>
      <rect id="hBody" className="st" x="96" y="214" width="408" height="204" fill="#8E9AAE"/>
      <g id="hStuds" className="st" fill="#C9A96F"><rect x="112" y="222" width="14" height="188"/>
        <rect x="156" y="222" width="14" height="188"/><rect x="200" y="222" width="14" height="188"/></g>
      <rect id="hPanel" className="st" x="104" y="218" width="120" height="196" fill="#CFCBC3"/>
      <path id="hCrack" className="st" d="M372 240 l16 34 l-14 26 l20 30" stroke="#4A5568" strokeWidth="5"
        fill="none" strokeLinecap="round"/>
      <g>
        <rect id="hWin" className="st" x="256" y="248" width="88" height="88" fill="#5C6C86"/>
        <g id="hBlinds" className="st" fill="#F2F0EA">
          <rect x="258" y="250" width="84" height="11"/><rect x="258" y="266" width="84" height="11"/>
          <rect x="258" y="282" width="84" height="11"/><rect x="258" y="298" width="84" height="11"/>
          <rect x="258" y="314" width="84" height="11"/>
        </g>
        <g fill="none" stroke="#01143C" strokeWidth="7">
          <rect x="256" y="248" width="88" height="88"/><path d="M300 248v88M256 292h88"/></g>
      </g>
      <rect id="hDoor" className="st" x="384" y="308" width="76" height="110" fill="#54617A"/>
      <circle id="hKey" className="st" cx="398" cy="366" r="7" fill="#01143C"/>
      <g id="hPipe" className="st" stroke="#C4CDD8" strokeWidth="9" fill="none" strokeLinecap="round">
        <path d="M140 300 v56 h44"/><circle cx="140" cy="290" r="9" fill="#C4CDD8" stroke="none"/>
      </g>
      <g id="hSpark" className="st" fill="#FFFFFF">
        <path className="sp" d="M170 260 l6 14 14 6 -14 6 -6 14 -6 -14 -14 -6 14 -6z" style={{ animationDelay: '-.2s' }}/>
        <path className="sp" d="M470 262 l5 11 11 5 -11 5 -5 11 -5 -11 -11 -5 11 -5z" style={{ animationDelay: '-1.1s' }}/>
        <path className="sp" d="M420 236 l4 9 9 4 -9 4 -4 9 -4 -9 -9 -4 9 -4z" style={{ animationDelay: '-1.8s' }}/>
      </g>
    </svg>
  );
}
