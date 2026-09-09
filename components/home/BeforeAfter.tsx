'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { BaScene } from '@/components/scene/BaScene';
import { baCategories, type BaCategory } from '@/lib/content';

/**
 * One half of the comparison — a real photograph where the category has one,
 * otherwise the hand-drawn room. Both fill the 16:9 frame identically, so a
 * category can be swapped from drawing to photo without touching the layout.
 */
function Half({
  category,
  state,
  priority,
}: {
  category: BaCategory;
  state: 'before' | 'after';
  priority: boolean;
}) {
  const src = state === 'before' ? category.before : category.after;

  if (!src) {
    return <BaScene kind={category.kind} after={state === 'after'} />;
  }

  return (
    <Image
      src={src}
      alt=""
      fill
      priority={priority}
      sizes="(max-width: 1280px) 100vw, 1216px"
      className="object-cover"
    />
  );
}

/**
 * Draggable before / after comparison.
 *
 * The visible handle is decorative; the thing that actually holds the value is
 * a real <input type="range"> stretched over the frame. That means it works
 * with a mouse, a finger, and the arrow keys, and screen readers announce it
 * as a slider — which a div listening for pointer events never does.
 */
export function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [x, setX] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromPointer = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setX(Math.max(0, Math.min(100, pct)));
  }, []);

  const category = baCategories[active]!;

  return (
    <>
      {/* One scrolling row on a phone, wrapping chips on a wider screen — five
          labels of very different lengths wrap raggedly otherwise. */}
      <div
        className="mb-6 mt-8 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-x-visible sm:pb-0"
        role="tablist"
        aria-label="Project categories"
      >
        {baCategories.map((c, i) => (
          <button
            key={c.kind}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`shrink-0 whitespace-nowrap border px-[18px] py-[11px] font-display text-[12px] font-bold uppercase tracking-[0.13em] transition-colors duration-300 ${
              i === active
                ? 'border-navy-900 bg-navy-900 text-white'
                : 'border-ink/[0.18] text-ink-muted hover:border-navy-900 hover:text-ink'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* The pair is described once, on the frame, rather than twice on two
          <img> tags — a screen reader should hear the comparison, not the
          same room described from both sides of a slider. */}
      <figure className="m-0">
        <div
          ref={frameRef}
          role="img"
          aria-label={category.alt ?? `${category.name}: before and after comparison`}
          className="relative aspect-[16/9] cursor-ew-resize select-none overflow-hidden bg-ink shadow-lift"
          style={{ ['--x' as string]: `${x}%`, touchAction: 'pan-y' }}
          onPointerDown={(e) => {
            dragging.current = true;
            setFromPointer(e.clientX);
          }}
          onPointerMove={(e) => {
            if (dragging.current) setFromPointer(e.clientX);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
          onPointerLeave={() => {
            dragging.current = false;
          }}
        >
          <Half category={category} state="before" priority={active === 0} />
          <div className="ba-after absolute inset-0">
            <Half category={category} state="after" priority={active === 0} />
          </div>

          <div className="pointer-events-none absolute left-4 top-4 z-[4] bg-[rgba(2,10,28,.72)] px-[13px] py-2 font-display text-[11px] font-extrabold tracking-[0.24em] text-white backdrop-blur-sm">
            BEFORE
          </div>
          <div className="pointer-events-none absolute right-4 top-4 z-[4] bg-[rgba(214,150,14,.92)] px-[13px] py-2 font-display text-[11px] font-extrabold tracking-[0.24em] text-[#1A1201]">
            AFTER
          </div>

          <div className="ba-line pointer-events-none absolute inset-y-0 z-[5] w-0.5 bg-gold shadow-[0_0_22px_rgba(214,150,14,.75)]" />
          <div className="ba-knob pointer-events-none absolute top-1/2 z-[6] flex h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold shadow-[0_8px_30px_rgba(0,0,0,.5)]">
            <svg
              viewBox="0 0 24 24"
              className="h-[22px] w-[22px] text-[#1A1201]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 6L4 12l5 6M15 6l5 6-5 6" />
            </svg>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(x)}
            onChange={(e) => setX(Number(e.target.value))}
            aria-label={`Reveal the after state of the ${category.name.toLowerCase()} example`}
            className="absolute inset-0 z-[7] h-full w-full cursor-ew-resize opacity-0"
          />
        </div>

        <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[14px] text-ink-muted">
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint">
            {category.name}
          </span>
          <span>Drag the handle across the image to compare.</span>
        </figcaption>
      </figure>
    </>
  );
}
