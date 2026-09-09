'use client';

import { useEffect, useState } from 'react';
import { HouseScene } from '@/components/scene/HouseScene';
import { Eyebrow } from '@/components/ui/Section';
import { useInView } from '@/hooks/useInView';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { turnoverChecklist } from '@/lib/content';

function Tick() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="#1A1201"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12.5l5.5 5.5L20 6.5" />
    </svg>
  );
}

/**
 * Every item that ticks off changes the house beside it — the crack closes,
 * the wall gets boarded and painted, the windows light, the blinds drop, and
 * the door finally turns gold. The list and the drawing are the same story
 * told twice.
 */
export function TurnoverChecklist() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.28 });
  const reduced = useReducedMotion();
  const [done, setDone] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDone(turnoverChecklist.length);
      return;
    }
    const timers = turnoverChecklist.map((_, i) =>
      setTimeout(() => setDone((n) => Math.max(n, i + 1)), 260 + i * 380),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, reduced]);

  const complete = done >= turnoverChecklist.length;

  return (
    <div className="wrap grid items-center gap-[clamp(36px,6vw,80px)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div ref={ref}>
        <Eyebrow>Property Turnover</Eyebrow>
        <h2 className="mt-5 text-d2">
          One property.
          <br />
          Many details.
          <br />
          One complete solution.
        </h2>
        <p className="lede mt-6">
          Before a property is ready for its next tenant, owner or occupant, a long list of small
          jobs has to be closed out — and every one of them holds up the handover until it&rsquo;s
          done. This is the list we work through.
        </p>

        <ul className="mt-8 grid list-none gap-px border border-white/[0.14] bg-white/[0.14] p-0">
          {turnoverChecklist.map((item, i) => {
            const on = i < done;
            return (
              <li
                key={item}
                className={`flex items-center gap-4 px-5 py-4 font-display text-[clamp(14px,1.6vw,17px)] font-bold uppercase tracking-[0.08em] transition-colors duration-500 ${
                  on ? 'bg-[#04173B] text-white' : 'bg-[#020D26] text-white/[0.34]'
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center border transition-colors duration-500 ${
                    on ? 'border-gold bg-gold' : 'border-white/[0.24]'
                  }`}
                >
                  {on ? <Tick /> : null}
                </span>
                {item}
              </li>
            );
          })}
        </ul>

        <p
          className={`mt-7 font-display text-[clamp(17px,2.2vw,26px)] font-extrabold tracking-[0.06em] text-gold transition-[opacity,transform] duration-700 ${
            complete ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'
          }`}
        >
          The property is ready.
        </p>
      </div>

      <div className="aspect-[4/3] w-full">
        <HouseScene done={done} />
      </div>
    </div>
  );
}
