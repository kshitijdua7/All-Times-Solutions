import Link from 'next/link';
import { LogoMark } from '@/components/ui/Logo';
import { footerNav, legalNav, site } from '@/lib/site';

const socials = [
  { key: 'facebook', label: 'Facebook' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'google', label: 'Google Business Profile' },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const live = socials.filter((s) => site.social[s.key]);

  return (
    <footer className="bg-gradient-to-b from-navy-900 to-navy-950 pt-[clamp(58px,7vw,86px)]">
      <div className="wrap">
        <div className="grid gap-[clamp(30px,5vw,64px)] pb-[clamp(44px,5vw,64px)] md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)_minmax(0,0.9fr)]">
          <div>
            <LogoMark size={62} className="mb-[18px]" />
            <h3 className="font-brand text-[23px] font-extrabold tracking-[0.01em]">
              {site.nameParts.first} <span className="text-gold">{site.nameParts.second}</span>
            </h3>
            <p className="mt-2.5 font-display text-[10.5px] font-bold tracking-[0.24em] text-white/55">
              {site.tagline}
            </p>
            <p className="mt-4 text-[17px] font-semibold text-gold-light">
              &ldquo;{site.promise}&rdquo;
            </p>
          </div>

          <nav aria-label="Footer">
            <h4 className="mb-[18px] font-display text-[10.5px] font-bold uppercase tracking-[0.22em] text-white/45">
              Explore
            </h4>
            <ul className="grid list-none gap-[11px] p-0">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15.5px] text-white/80 transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="mb-[18px] font-display text-[10.5px] font-bold uppercase tracking-[0.22em] text-white/45">
              Get In Touch
            </h4>
            <ul className="grid list-none gap-[11px] p-0">
              <li>
                <a
                  href={site.phoneHref}
                  className="text-[15.5px] text-white/80 transition-colors hover:text-gold-light"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="break-words text-[15.5px] text-white/80 transition-colors hover:text-gold-light"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-[15.5px] text-white/80">{site.serviceArea}</li>
            </ul>

            {live.length > 0 && (
              <ul className="mt-5 flex list-none gap-4 p-0">
                {live.map((s) => (
                  <li key={s.key}>
                    <a
                      href={site.social[s.key]}
                      className="text-[13px] text-white/60 underline-offset-4 hover:text-gold-light hover:underline"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3.5 border-t border-white/[0.14] py-6 text-[13px] text-white/45">
          <span>
            © {year} {site.name}. All Rights Reserved.
          </span>
          <span className="flex flex-wrap gap-4">
            {legalNav.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white/75">
                {l.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
