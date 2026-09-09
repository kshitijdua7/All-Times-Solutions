import type { ReactNode } from 'react';

type Tone = 'navy' | 'deep' | 'light' | 'white';

const toneClass: Record<Tone, string> = {
  navy: 'bg-navy-900 text-white',
  deep: 'bg-navy-950 text-white',
  light: 'bg-bone text-ink on-light',
  white: 'bg-white text-ink on-light',
};

export function Section({
  tone = 'deep',
  id,
  className = '',
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`section ${toneClass[tone]} ${className}`.trim()}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  center,
  className = '',
}: {
  children: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <p className={`eyebrow ${center ? 'eyebrow-center' : ''} ${className}`.trim()}>{children}</p>
  );
}

/**
 * The standard two-column section opener: eyebrow + heading on the left,
 * supporting copy on the right. Collapses to one column under 900px.
 */
export function SectionHead({
  eyebrow,
  title,
  aside,
  className = '',
}: {
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mb-[clamp(44px,6vw,74px)] grid items-end gap-[clamp(24px,5vw,70px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] ${className}`.trim()}
    >
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 text-d2">{title}</h2>
      </div>
      {aside ? <div className="grid gap-4">{aside}</div> : null}
    </div>
  );
}
