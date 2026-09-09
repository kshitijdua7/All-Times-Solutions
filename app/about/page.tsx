import { PageHeader } from '@/components/layout/PageHeader';
import { ConvergeDiagram } from '@/components/scene/ConvergeDiagram';
import { Button } from '@/components/ui/Button';
import { ContactCard } from '@/components/ui/ContactCard';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow, Section } from '@/components/ui/Section';
import { benefits } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'About Us',
  description:
    'All Time Solutions is a property turnover and renovation service company serving the GTA in Ontario, Canada. Contact Sumit Chopra on 416-317-5661.',
  path: '/about',
});

const highlights = [
  'PROPERTY TURNOVER',
  'RENOVATION',
  'REPAIRS',
  'CLEANING',
  'FINISHING',
  'HOME AUTOMATION',
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]}
        eyebrow="About Us"
        title={
          <>
            We don&rsquo;t just service properties. We prepare them for what&rsquo;s next.
          </>
        }
        lede={`${site.name} is a property turnover and renovation service company serving the GTA in Ontario, Canada.`}
      />

      <Section tone="white">
        <div className="wrap grid items-start gap-[clamp(34px,5vw,72px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
          <div>
            <p className="text-[clamp(18px,2vw,23px)] leading-[1.6] text-ink">
              We help property owners and managers handle the essential work required to transform
              spaces into clean, functional and move-in-ready properties.
            </p>
            <p className="lede mt-6">
              Turnover work is rarely one trade. A unit that needs painting usually needs drywall
              first; a unit that needs new blinds usually needs the walls finished before they go
              up; and every one of them needs a deep clean at the end, after the last person with
              tools has left. Running those through one point of contact is the whole idea.
            </p>
            <p className="lede mt-5">
              You deal with {site.contactName} directly — the same person from the first walk-through
              to the final walk-through.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {highlights.map((h, i) => (
                <span
                  key={h}
                  className={`border px-4 py-2.5 font-display text-[11.5px] font-bold tracking-[0.16em] ${
                    i === 0 ? 'border-navy-900 bg-navy-900 text-white' : 'border-ink/[0.16] text-ink'
                  }`}
                >
                  {h}
                </span>
              ))}
            </div>

            <div className="mt-10 border-l-2 border-gold pl-5">
              <h2 className="text-[clamp(18px,2vw,22px)] text-ink">
                What you won&rsquo;t find on this site
              </h2>
              <p className="mt-3 max-w-prose text-[15.5px] leading-[1.65] text-ink-muted">
                No review counts, no awards, no badges, no &ldquo;25 years of experience&rdquo;, no
                stock photos of other people&rsquo;s finished kitchens presented as ours. If it
                isn&rsquo;t verified, it isn&rsquo;t on here. When there are real testimonials and
                real project photos, they&rsquo;ll go up — with names attached.
              </p>
            </div>

            <div className="mt-10">
              <Button href="/contact" variant="navy" arrow>
                Get a Free Quote
              </Button>
            </div>
          </div>

          <Reveal delay={1}>
            <ContactCard />
          </Reveal>
        </div>
      </Section>

      <Section tone="deep">
        <div className="wrap grid items-center gap-[clamp(34px,6vw,84px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
          <Reveal>
            <Eyebrow>The One-Team Advantage</Eyebrow>
            <h2 className="mt-5 text-d3">
              Why manage six contractors when you can start with one?
            </h2>
            <div className="mt-9 grid gap-px border-y border-white/[0.14] bg-white/[0.14]">
              {benefits.map((b) => (
                <div
                  key={b.no}
                  className="grid grid-cols-[64px_1fr] items-start gap-[18px] bg-[#020D26] px-[clamp(20px,2.4vw,30px)] py-6"
                >
                  <b className="pt-[3px] font-display text-[13px] font-extrabold tabular-nums tracking-[0.12em] text-gold">
                    {b.no}
                  </b>
                  <div>
                    <h3 className="text-[17px] font-bold uppercase tracking-[0.04em]">{b.name}</h3>
                    <p className="mt-[7px] text-[15.5px] text-white/[0.68]">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={1} className="mx-auto aspect-square w-full max-w-[480px]">
            <ConvergeDiagram />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
