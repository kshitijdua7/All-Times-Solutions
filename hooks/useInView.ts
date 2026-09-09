'use client';

import { useEffect, useRef, useState } from 'react';

type Options = {
  /** Fire once and stop observing. Default true. */
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

/**
 * Reports when an element first enters the viewport.
 * Used for the reveal-on-scroll treatment and for kicking off the
 * process timeline and the turnover checklist.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  once = true,
  threshold = 0.12,
  rootMargin = '0px 0px -8% 0px',
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old browser, or a crawler): show everything.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView };
}
