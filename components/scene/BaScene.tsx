import type { BaKind } from '@/lib/content';

/**
 * The room drawn for the before / after slider.
 *
 * One shared room geometry with a per-category set of props laid over it, so
 * the two halves line up exactly and the only thing that changes across the
 * seam is the state of the space. These are drawings, clearly labelled as
 * such on the page — they are not photographs of past work.
 */
export function BaScene({ kind, after }: { kind: BaKind; after: boolean }) {
  const wall = after ? (kind === 'paint' ? '#F4F2ED' : '#EFEDE7') : '#ADA9A1';
  const ceil = after ? '#FBFBF9' : '#BFBBB3';
  const side = after ? (kind === 'paint' ? '#01143C' : '#E5E2DB') : '#9E9A92';
  const floor = after ? '#9A6C43' : '#BFA378';
  const sky = after ? '#A6CBEE' : '#8C9DB4';

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 675"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
    >
      <rect width="1200" height="675" fill={wall} />
      <polygon points="0,0 1200,0 1010,140 190,140" fill={ceil} />
      <polygon points="0,0 190,140 190,506 0,675" fill={side} />
      <polygon points="1200,0 1010,140 1010,506 1200,675" fill={after ? '#E9E6DF' : '#A5A199'} />
      <rect x="190" y="140" width="820" height="366" fill={wall} />

      {/* window */}
      <rect x="700" y="196" width="252" height="216" fill={sky} />
      <g fill="#6E6A62">
        <rect x="820" y="196" width="10" height="216" />
        <rect x="700" y="298" width="252" height="10" />
      </g>

      {after ? (
        <>
          <g fill="#FFFFFF">
            <rect x="686" y="184" width="280" height="14" />
            <rect x="686" y="410" width="280" height="16" />
            <rect x="686" y="184" width="14" height="242" />
            <rect x="952" y="184" width="14" height="242" />
          </g>
          <rect x="702" y="196" width="248" height="13" fill="#F2F0EA" />
          <g fill="#EAE7DF">
            {Array.from({ length: 9 }, (_, b) => (
              <rect key={b} x="704" y={213 + b * 21} width="244" height="15" />
            ))}
          </g>
        </>
      ) : (
        <polygon points="694,190 958,190 964,420 688,412" fill="#DCE9F7" opacity=".38" />
      )}

      {/* floor */}
      <polygon points="0,675 1200,675 1010,506 190,506" fill={floor} />
      {after ? (
        <>
          <g stroke="#82552F" strokeWidth="2" opacity=".5">
            <path d="M190 560 L1010 560" />
            <path d="M120 620 L1080 620" />
            <path d="M420 506 L360 675" />
            <path d="M780 506 L840 675" />
          </g>
          <g fill="#FFFFFF">
            <rect x="190" y="484" width="820" height="24" />
            <polygon points="0,640 190,484 190,508 0,675" />
            <polygon points="1200,640 1010,484 1010,508 1200,675" />
          </g>
        </>
      ) : (
        <g stroke="#A98A5E" strokeWidth="3" opacity=".8">
          <path d="M190 560 L1010 560" />
          <path d="M120 626 L1080 626" />
        </g>
      )}

      {/* ---- per-category props ---- */}
      {kind === 'reno' &&
        (after ? (
          <>
            <path
              d="M300 396 h330 a20 20 0 0 1 20 20 v70 h-370 v-70 a20 20 0 0 1 20 -20z"
              fill="#2C3E5E"
            />
            <rect x="286" y="470" width="370" height="62" rx="15" fill="#3B5177" />
            <g fill="#D6960E">
              <rect x="336" y="424" width="56" height="46" rx="8" />
              <rect x="556" y="424" width="56" height="46" rx="8" />
            </g>
            <rect x="400" y="566" width="220" height="11" rx="4" fill="#8A5F3C" />
            <rect x="240" y="212" width="140" height="110" fill="#FFF" stroke="#D6960E" strokeWidth="4" />
            <polygon points="252,312 300,254 336,296 368,268 368,312" fill="#C7D4E4" />
          </>
        ) : (
          <>
            <g stroke="#8C7B63" strokeWidth="8" fill="none">
              <path d="M330 230 L300 560" />
              <path d="M420 230 L452 560" />
              <path d="M336 300 L414 300" />
              <path d="M328 380 L424 380" />
              <path d="M320 460 L436 460" />
            </g>
            <polygon points="60,220 150,238 140,540 50,556" fill="#CFCAC0" />
            <path d="M560 236 C 564 288 548 320 556 360" stroke="#4A5568" strokeWidth="5" fill="none" />
            <path d="M520 520 L580 520 L568 596 L532 596z" fill="#8FA0B6" />
          </>
        ))}

      {kind === 'paint' &&
        (after ? (
          <>
            <rect x="190" y="140" width="300" height="366" fill="#01143C" />
            <rect x="248" y="216" width="184" height="140" fill="none" stroke="#D6960E" strokeWidth="4" />
          </>
        ) : (
          <>
            <g fill="#C6C0B4" opacity=".9">
              <rect x="220" y="180" width="230" height="150" />
              <rect x="260" y="356" width="300" height="110" />
              <rect x="520" y="200" width="120" height="120" />
            </g>
            <rect x="300" y="176" width="34" height="120" fill="#8C93A3" />
            <rect x="286" y="160" width="62" height="22" fill="#4A5568" />
            <path d="M240 560 h150 l-12 44 h-126z" fill="#4A5568" />
          </>
        ))}

      {kind === 'drywall' &&
        (after ? (
          <>
            <rect x="250" y="180" width="330" height="300" fill={wall} />
            <rect x="300" y="222" width="180" height="140" fill="#FFF" stroke="#D6960E" strokeWidth="4" />
          </>
        ) : (
          <>
            <rect x="280" y="220" width="200" height="190" fill="#5E5245" />
            <g fill="#C9A96F">
              <rect x="292" y="220" width="18" height="190" />
              <rect x="360" y="220" width="18" height="190" />
              <rect x="428" y="220" width="18" height="190" />
            </g>
            <g fill="#D9A7A0" opacity=".8">
              <rect x="310" y="226" width="50" height="178" />
              <rect x="378" y="226" width="50" height="178" />
            </g>
            <path d="M560 200 l18 44 l-16 34 l22 40" stroke="#8B877F" strokeWidth="6" fill="none" />
            <ellipse cx="620" cy="440" rx="52" ry="30" fill="#DAD5C9" />
          </>
        ))}

      {kind === 'turnover' &&
        (after ? (
          <>
            <ellipse cx="600" cy="600" rx="330" ry="46" fill="#FFF" opacity=".2" />
            <polygon points="700,196 952,196 1140,675 470,675" fill="#FFE3B0" opacity=".3" />
          </>
        ) : (
          <>
            <g fill="#9A8B72">
              <rect x="250" y="430" width="130" height="110" />
              <rect x="270" y="360" width="96" height="70" />
              <rect x="392" y="466" width="110" height="76" />
            </g>
            <g stroke="#7A6B54" strokeWidth="4" fill="none">
              <path d="M250 486 h130 M270 396 h96 M392 504 h110" />
            </g>
            <ellipse cx="760" cy="600" rx="120" ry="26" fill="#9A8B72" opacity=".55" />
            <ellipse cx="420" cy="628" rx="90" ry="18" fill="#9A8B72" opacity=".45" />
            <path d="M980 250 q30 60 -10 90" stroke="#8B877F" strokeWidth="6" fill="none" />
          </>
        ))}

      {kind === 'clean' &&
        (after ? (
          <>
            <polygon points="190,540 1010,540 1200,675 0,675" fill="#FFFFFF" opacity=".28" />
            <g fill="#FFFFFF">
              <path d="M330 300 l8 18 18 8 -18 8 -8 18 -8 -18 -18 -8 18 -8z" />
              <path d="M900 470 l6 14 14 6 -14 6 -6 14 -6 -14 -14 -6 14 -6z" />
              <path d="M560 220 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5z" />
            </g>
          </>
        ) : (
          <>
            <g fill="#8B8071" opacity=".5">
              <ellipse cx="420" cy="590" rx="130" ry="34" />
              <ellipse cx="820" cy="628" rx="150" ry="30" />
              <ellipse cx="300" cy="440" rx="70" ry="90" />
            </g>
            <rect x="700" y="196" width="252" height="216" fill="#7E7466" opacity=".38" />
            <g stroke="#8B8071" strokeWidth="5" opacity=".5" fill="none">
              <path d="M240 200 q40 40 0 80" />
              <path d="M300 180 q40 40 0 80" />
            </g>
          </>
        ))}
    </svg>
  );
}
