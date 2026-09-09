'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { processSteps } from '@/lib/content';

/**
 * The five stages light up in order as the row comes into view. The numbering
 * is not decoration — these steps genuinely have to happen in this sequence,
 * and the staggered reveal is the point being made.
 */
export function ProcessTimeline() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const reduced = useReducedMotion();
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setLit(processSteps.length);
      return;
    }
    const timers = processSteps.map((_, i) =>
      setTimeout(() => setLit((n) => Math.max(n, i + 1)), i * 190),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, reduced]);

  return (
    <div ref={ref} className="grid border-t border-ink/[0.14] lg:grid-cols-5">
      {processSteps.map((step, i) => {
        const on = i < lit;
        return (
          <div
            key={step.no}
            className={`relative border-b border-ink/[0.14] px-[clamp(18px,2vw,28px)] pb-10 pt-8 transition-colors duration-500 lg:border-b-0 lg:border-r lg:last:border-r-0 ${
              on ? 'bg-navy-900/[0.035]' : ''
            }`}
          >
            <span
              className={`absolute -top-px left-0 h-0.5 bg-gold transition-[width] duration-700 ease-brand ${
                on ? 'w-full' : 'w-0'
              }`}
            />
            <b
              className={`block font-display text-[44px] font-extrabold leading-none tabular-nums tracking-[-0.04em] transition-colors duration-500 ${
                on ? 'text-gold' : 'text-ink/[0.14]'
              }`}
            >
              {step.no}
            </b>
            <h3 className="mt-4 text-[21px] tracking-[0.02em] text-ink">{step.name}</h3>
            <p className="mt-[11px] text-[15.5px] text-ink-muted">{step.body}</p>
          </div>
        );
      })}
    </div>
  );
}
