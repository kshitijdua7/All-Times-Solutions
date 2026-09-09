import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

/**
 * The mark is the client's own logo, traced out of the business card and
 * supplied in two colourways: `light` (white house, gold swoosh) for navy
 * backgrounds, `dark` (navy house, gold swoosh) for white ones.
 */
export function LogoMark({
  tone = 'light',
  size = 44,
  className = '',
}: {
  tone?: 'light' | 'dark';
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={tone === 'light' ? '/logo-light.png' : '/logo-dark.png'}
      alt=""
      width={size}
      height={Math.round((size * 396) / 426)}
      priority={size >= 44}
      className={className}
    />
  );
}

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-brand leading-none ${className}`.trim()}>
      <span className="block text-[16.5px] font-extrabold whitespace-nowrap text-white">
        {site.nameParts.first} <span className="text-gold">{site.nameParts.second}</span>
      </span>
      <span className="mt-1 block font-display text-[8.5px] font-semibold tracking-[0.2em] text-white/60">
        {site.tagline}
      </span>
    </span>
  );
}

export function BrandLink({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex shrink-0 items-center gap-3 ${className}`.trim()}
      aria-label={`${site.name} — home`}
    >
      <LogoMark />
      <Wordmark />
    </Link>
  );
}
