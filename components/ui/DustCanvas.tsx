'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Mote = { x: number; y: number; r: number; vx: number; vy: number; a: number };

/**
 * Dust drifting through the light in the hero. Canvas rather than a hundred
 * DOM nodes, capped at 2× pixel ratio, and paused entirely once the hero
 * scrolls out of view so it costs nothing for the rest of the page.
 */
export function DustCanvas({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const cv = ref.current;
    const parent = cv?.parentElement;
    if (!cv || !parent) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let motes: Mote[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let live = true;

    const size = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      cv.style.width = `${w}px`;
      cv.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(26, Math.min(74, Math.round(w / 22)));
      motes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.7 + 0.5,
        vx: (Math.random() - 0.35) * 0.18,
        vy: -(Math.random() * 0.22 + 0.05),
        a: Math.random() * 0.38 + 0.07,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const m of motes) {
        m.x += m.vx;
        m.y += m.vy;
        if (m.y < -8) {
          m.y = h + 8;
          m.x = Math.random() * w;
        }
        if (m.x < -8) m.x = w + 8;
        if (m.x > w + 8) m.x = -8;
        ctx.beginPath();
        ctx.fillStyle = `rgba(214,228,255,${m.a})`;
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (live) raf = requestAnimationFrame(tick);
    };

    size();
    tick();

    window.addEventListener('resize', size);
    const io = new IntersectionObserver(
      (entries) => {
        live = entries[0]?.isIntersecting ?? false;
        cancelAnimationFrame(raf);
        if (live) raf = requestAnimationFrame(tick);
      },
      { threshold: 0 },
    );
    io.observe(cv);

    return () => {
      live = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', size);
      io.disconnect();
    };
  }, [reduced]);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
