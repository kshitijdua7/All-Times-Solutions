'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Drives the pinned renovation sequence.
 *
 * The section is a tall track containing a `position: sticky` stage. As the
 * track scrolls past, progress goes 0 → 1. We deliberately do NOT hijack the
 * wheel or lock the body: the page scrolls normally the whole way through, so
 * keyboard scrolling, the scrollbar, find-in-page and screen readers all keep
 * working, and a visitor can always scroll straight past it.
 *
 * Progress is written to a CSS custom property rather than React state so the
 * camera push doesn't re-render the tree on every frame. Only the discrete
 * stage index (0–6) is state, and it changes seven times in the whole section.
 */
export function useScrollProgress(stageCount: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Where each stage takes over. Uneven on purpose: the opening and the
    // final reveal are given more scroll distance than the middle steps.
    const bounds = [0, 0.1, 0.24, 0.38, 0.53, 0.68, 0.83].slice(0, stageCount);

    let ticking = false;
    let current = -1;

    const measure = () => {
      const rect = track.getBoundingClientRect();
      const span = track.offsetHeight - window.innerHeight;
      let p = span > 0 ? -rect.top / span : 0;
      p = p < 0 ? 0 : p > 1 ? 1 : p;

      stageRef.current?.style.setProperty('--p', p.toFixed(4));

      let next = 0;
      for (let i = 0; i < bounds.length; i++) if (p >= bounds[i]) next = i;
      if (next !== current) {
        current = next;
        setStage(next);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [stageCount]);

  return { trackRef, stageRef, stage };
}
