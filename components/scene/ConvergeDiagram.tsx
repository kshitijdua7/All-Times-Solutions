/** Six services converging on one team — the one-team section. */
export function ConvergeDiagram() {
  return (
    <svg className="h-full w-full" viewBox="0 0 520 520" role="presentation" aria-hidden="true">
      <defs><radialGradient id="cvG" cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor="#D6960E" stopOpacity=".22"/>
        <stop offset="1" stopColor="#D6960E" stopOpacity="0"/></radialGradient></defs>
      <circle cx="260" cy="260" r="248" fill="none" stroke="rgba(255,255,255,.09)"/>
      <circle cx="260" cy="260" r="182" fill="none" stroke="rgba(255,255,255,.07)"/>
      <circle cx="260" cy="260" r="150" fill="url(#cvG)"/>
      <g stroke="#D6960E" strokeWidth="1.4" opacity=".55">
        <path d="M260 42 L260 178"/><path d="M448 152 L288 238"/><path d="M448 368 L288 282"/>
        <path d="M260 478 L260 342"/><path d="M72 368 L232 282"/><path d="M72 152 L232 238"/>
      </g>
      <g fill="#020D26" stroke="rgba(255,255,255,.2)">
        <circle cx="260" cy="42" r="34"/><circle cx="448" cy="152" r="34"/>
        <circle cx="448" cy="368" r="34"/><circle cx="260" cy="478" r="34"/>
        <circle cx="72" cy="368" r="34"/><circle cx="72" cy="152" r="34"/>
      </g>
      <g fill="none" stroke="#D6960E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(246 28) scale(0.58)"><path d="M9 4v8M5 8h9M9 12v9a7 7 0 0 0 7 7h3"/>
          <path d="M22 6c2.4 3.2 4 5.2 4 7.2a4 4 0 0 1-8 0C18 11.2 19.6 9.2 22 6z"/></g>
        <g transform="translate(434 138) scale(0.58)"><path d="M18 2L6 20h9l-2 14 13-20h-9z"/></g>
        <g transform="translate(434 354) scale(0.58)"><rect x="2" y="4" width="20" height="9" rx="2"/>
          <path d="M22 9h5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H16v5"/><rect x="12" y="21" width="7" height="10" rx="2"/></g>
        <g transform="translate(246 464) scale(0.58)"><path d="M11 21l-3 9h18l-3-9z"/>
          <path d="M14 21V9a3 3 0 0 1 6 0v12"/><path d="M17 6V1"/></g>
        <g transform="translate(58 354) scale(0.58)"><rect x="2" y="3" width="26" height="22" rx="2"/>
          <path d="M2 9h26M2 15h26M2 21h26"/></g>
        <g transform="translate(58 138) scale(0.58)"><path d="M2 4h26v24H2z"/><path d="M2 14h15M17 4v10M17 14v14"/></g>
      </g>
      <g transform="translate(260 260)">
        <circle r="74" fill="#01143C" stroke="#D6960E" strokeWidth="2"/>
        <g fill="none" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"
           transform="translate(-26 -26) scale(1.08)">
          <path d="M2 24L24 6l22 18" transform="scale(0.9)"/>
          <path d="M8 27v18h32V27" transform="scale(0.9)"/>
        </g>
        <text x="0" y="46" textAnchor="middle" fill="#D6960E" fontFamily="Archivo, sans-serif"
          fontSize="11" fontWeight="800" letterSpacing="2.4">ONE TEAM</text>
      </g>
    </svg>
  );
}
