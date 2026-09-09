'use client';

import type { ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

/**
 * Fades and lifts a block into view the first time it's scrolled to.
 *
 * Deliberately opt-in per block rather than applied globally: a page where
 * every single element waits on an observer is a page that looks broken to
 * anyone who lands mid-scroll, and empty to a crawler that doesn't scroll.
 * Anything above the fold is rendered without this wrapper.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  as?: ElementType;
  /** Stagger, in steps of ~90ms. 0–3. */
  delay?: 0 | 1 | 2 | 3;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`${inView ? 'reveal-in' : 'reveal'} ${className}`.trim()}
      style={inView && delay ? { transitionDelay: `${delay * 90}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
