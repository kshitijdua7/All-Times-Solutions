import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { ArrowIcon, Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { pageMeta } from '@/lib/seo';
import { services } from '@/lib/services';

export const metadata = pageMeta({
  title: 'Services',
  description:
    'Plumbing, electrical, painting, deep cleaning, window blinds, drywall repair, property turnover, full renovation and home automation across the GTA, Ontario.',
  path: '/services',
});

function href(slug: string) {
  return slug === 'home-automation' ? '/home-automation' : `/services/${slug}`;
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
        eyebrow="What We Do"
        title="Everything your property needs."
        lede="One team. Multiple solutions. One move-in-ready result. Every service below can be booked on its own, or combined into a single turnover."
        actions={
          <Button href="/contact" variant="gold" arrow>
            Get a Free Quote
          </Button>
        }
      />

      <Section tone="deep">
        <div className="wrap">
          <div className="grid-hair">
            {services.map((s, i) => (
              <Reveal key={s.slug} as="article">
                <Link
                  href={href(s.slug)}
                  className="group grid gap-6 bg-[#020D26] p-[clamp(26px,3.2vw,44px)] transition-colors duration-300 hover:bg-[#04173B] md:grid-cols-[72px_minmax(0,1fr)_auto] md:items-center"
                >
                  <ServiceIcon name={s.icon} className="h-14 w-14 text-gold" />
                  <div>
                    <p className="font-display text-[11px] font-extrabold tabular-nums tracking-[0.2em] text-white/35">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="mt-2 text-[clamp(22px,2.6vw,30px)]">{s.name}</h2>
                    <p className="mt-3 max-w-[60ch] text-[15.5px] text-white/[0.7]">{s.short}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-gold-light">
                    View
                    <ArrowIcon className="h-[13px] w-[13px] transition-transform duration-300 group-hover:translate-x-[5px]" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
