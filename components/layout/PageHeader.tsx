import Link from 'next/link';
import type { ReactNode } from 'react';
import { HeaderPattern } from '@/components/scene/HeaderPattern';
import { Eyebrow } from '@/components/ui/Section';

export type Crumb = { name: string; path: string };

/**
 * The header every inner page opens with. Sized to what it holds rather than
 * to the viewport, so the first screenful still shows the start of the page
 * content underneath it.
 */
export function PageHeader({
  crumbs,
  eyebrow,
  title,
  lede,
  actions,
  art,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  art?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[52svh] items-end overflow-hidden bg-navy-900 pb-[clamp(50px,7vw,86px)] pt-[150px]">
      <div className="absolute inset-0 z-0">{art ?? <HeaderPattern />}</div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(92deg,rgba(2,10,28,.97)_0%,rgba(2,10,28,.9)_44%,rgba(2,10,28,.42)_74%,rgba(2,10,28,.12)_100%),linear-gradient(0deg,#020A1C,transparent_42%)]"
      />
      <div className="wrap relative z-[2]">
        <nav aria-label="Breadcrumb">
          <ol className="flex list-none flex-wrap items-center gap-2.5 p-0 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2.5">
                {i < crumbs.length - 1 ? (
                  <>
                    <Link href={c.path} className="transition-colors hover:text-gold-light">
                      {c.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                ) : (
                  <span className="text-gold" aria-current="page">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Eyebrow className="mt-5">{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-[16ch] text-[clamp(34px,6vw,82px)]">{title}</h1>
        {lede ? <p className="lede mt-6">{lede}</p> : null}
        {actions ? <div className="mt-9 flex flex-wrap gap-3.5">{actions}</div> : null}
      </div>
    </section>
  );
}
