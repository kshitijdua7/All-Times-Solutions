import Link from 'next/link';
import { ArrowIcon, Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHead } from '@/components/ui/Section';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { services } from '@/lib/services';

function href(slug: string) {
  return slug === 'home-automation' ? '/home-automation' : `/services/${slug}`;
}

export function ServicesGrid() {
  return (
    <div className="wrap">
      <Reveal>
        <SectionHead
          eyebrow="Services"
          title="Everything your property needs."
          aside={<p className="lede">One team. Multiple solutions. One move-in-ready result.</p>}
        />
      </Reveal>

      {/* Nine services in a 3×3 hairline grid — it fills exactly, so no card
          is ever left sitting alone on a row. */}
      <Reveal className="grid-hair-dark grid-cols-1 min-[860px]:grid-cols-3">
        {services.map((s, i) => {
          const feature = s.slug === 'home-automation';
          return (
            <Link
              key={s.slug}
              href={href(s.slug)}
              className={`group relative flex min-h-[260px] flex-col gap-4 p-[clamp(26px,3.2vw,42px)] transition-colors duration-300 ${
                feature ? 'bg-navy-900 hover:bg-navy-800' : 'bg-white hover:bg-[#FBFCFE]'
              }`}
            >
              <span
                className={`absolute right-6 top-[22px] font-display text-[12px] font-extrabold tabular-nums tracking-[0.14em] ${
                  feature ? 'text-white/30' : 'text-ink/20'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <ServiceIcon
                name={s.icon}
                className={`h-[52px] w-[52px] transition-[color,transform] duration-300 group-hover:-translate-y-[3px] ${
                  feature ? 'text-gold' : 'text-navy-900 group-hover:text-gold'
                }`}
              />

              {feature && (
                <span className="w-max bg-gold px-2.5 py-[5px] font-display text-[9.5px] font-bold tracking-[0.2em] text-[#1A1201]">
                  ALSO AVAILABLE
                </span>
              )}

              <h3 className={`text-[20px] ${feature ? 'text-white' : 'text-ink'}`}>{s.name}</h3>
              <p className={`text-[15.5px] leading-[1.6] ${feature ? 'text-white/[0.74]' : 'text-ink-muted'}`}>
                {s.short}
              </p>

              <span
                className={`mt-auto inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] ${
                  feature ? 'text-gold-light' : 'text-navy-900'
                }`}
              >
                {feature ? 'See what we install' : 'Read more'}
                <ArrowIcon className="h-[13px] w-[13px] transition-transform duration-300 group-hover:translate-x-[5px]" />
              </span>
            </Link>
          );
        })}
      </Reveal>

      <Reveal className="mt-[clamp(40px,5vw,64px)]">
        <div className="flex flex-wrap items-center justify-between gap-[clamp(22px,4vw,50px)] bg-[linear-gradient(115deg,#01143C_0%,#062250_58%,#0E3070_100%)] p-[clamp(32px,4.6vw,60px)] text-white">
          <div>
            <h3 className="max-w-[16ch] text-d4">Need more than one service?</h3>
            <p className="mt-3 max-w-[44ch] text-[16px] text-white/[0.72]">
              Tell us what your property needs. We&rsquo;ll help you plan the next step.
            </p>
          </div>
          <Button href="/contact" variant="gold" arrow>
            Get a Free Quote
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
