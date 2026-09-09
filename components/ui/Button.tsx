import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'gold' | 'ghost' | 'navy' | 'outline-dark';

const variantClass: Record<Variant, string> = {
  gold: 'btn-gold',
  ghost: 'btn-ghost',
  navy: 'btn-navy',
  'outline-dark': 'btn-outline-dark',
};

export function ArrowIcon({ className = 'arw' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

/**
 * Internal routes go through next/link so they're prefetched and instant.
 * Anything starting with tel:, mailto: or http: is a plain anchor.
 */
export function Button({ href, children, variant = 'gold', arrow, className = '' }: Props) {
  const cls = `btn ${variantClass[variant]} ${className}`.trim();
  const inner = (
    <>
      {children}
      {arrow ? <ArrowIcon /> : null}
    </>
  );

  const external = /^(https?:|tel:|mailto:)/.test(href);
  if (external) {
    return (
      <a className={cls} href={href}>
        {inner}
      </a>
    );
  }

  return (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}
