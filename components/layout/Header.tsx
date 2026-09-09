'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BrandLink } from '@/components/ui/Logo';
import { primaryNav, site } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  // Transparent over the hero, solid navy once you start scrolling.
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer on navigation, and never leave the body locked.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-gold focus:px-4 focus:py-3 focus:font-display focus:text-sm focus:font-bold focus:uppercase focus:text-[#1A1201]"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[120] border-b transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500 ${
          solid
            ? 'border-white/[0.14] bg-[rgba(1,17,48,0.86)] shadow-[0_12px_40px_-24px_#000] backdrop-blur-md backdrop-saturate-150'
            : 'border-transparent'
        }`}
      >
        <div
          className={`mx-auto flex max-w-wrap items-center gap-4 px-[var(--pad)] transition-[height] duration-500 xl:gap-8 ${
            solid ? 'h-[74px]' : 'h-[88px]'
          }`}
        >
          <BrandLink />

          <nav className="ml-auto hidden items-center gap-4 min-[1260px]:flex xl:gap-6" aria-label="Main">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`group relative whitespace-nowrap py-1.5 font-display text-[12.5px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                  isActive(item.href) ? 'text-white' : 'text-white/[0.78] hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-gold transition-[width] duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="btn btn-gold ml-2 hidden whitespace-nowrap px-5 py-[13px] text-[11.5px] min-[1260px]:inline-flex"
          >
            Get a Free Quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="ml-auto flex h-[46px] w-[46px] shrink-0 flex-col items-center justify-center gap-[5px] border border-white/[0.14] bg-white/5 min-[1260px]:hidden"
          >
            <span
              className={`block h-[1.6px] w-[19px] bg-white transition-transform duration-300 ${
                open ? 'translate-y-[6.6px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.6px] w-[19px] bg-white transition-opacity duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1.6px] w-[19px] bg-white transition-transform duration-300 ${
                open ? '-translate-y-[6.6px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen drawer. It slides the page's own overlay in — it never
          takes control of scrolling beyond locking the body while open. */}
      <div
        id="mobile-drawer"
        aria-hidden={!open}
        className={`fixed inset-0 z-[115] flex flex-col justify-center gap-1.5 bg-gradient-to-b from-navy-900 to-navy-950 px-[var(--pad)] pb-10 pt-24 transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] ${
          open ? 'translate-y-0 visible' : 'invisible -translate-y-full'
        }`}
      >
        {primaryNav.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            tabIndex={open ? 0 : -1}
            className="border-b border-white/10 py-2 font-display text-[clamp(26px,7.5vw,40px)] font-extrabold tracking-[-0.03em] text-white"
          >
            <span className="mb-0 block font-body text-[12px] font-bold tracking-[0.16em] text-gold">
              {String(i + 1).padStart(2, '0')}
            </span>
            {item.label}
          </Link>
        ))}
        <a
          href={site.phoneHref}
          tabIndex={open ? 0 : -1}
          className="btn btn-gold mt-6 self-start text-[13px]"
        >
          Call {site.phone}
        </a>
      </div>
    </>
  );
}
