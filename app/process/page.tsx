import { PageHeader } from '@/components/layout/PageHeader';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { TurnoverChecklist } from '@/components/home/TurnoverChecklist';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHead } from '@/components/ui/Section';
import { faqs } from '@/lib/content';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Our Process',
  description:
    'How a property turnover runs, stage by stage: assess, plan, transform, finish, ready. All Time Solutions, serving the GTA, Ontario.',
  path: '/process',
});

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Our Process', path: '/process' },
        ]}
        eyebrow="How We Work"
        title="From first look to final walk-through."
        lede="Five stages, in order. Each one has to be finished before the next one starts — that sequence is what keeps a turnover on schedule and stops work being done twice."
        actions={
          <Button href="/contact" variant="gold" arrow>
            Start With an Assessment
          </Button>
        }
      />

      <Section tone="light">
        <div className="wrap">
          <ProcessTimeline />
        </div>
      </Section>

      <Section tone="deep">
        <TurnoverChecklist />
      </Section>

      <Section tone="white">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Questions"
              title="The things people ask first."
              aside={
                <p className="lede">
                  Where a straight answer would need a number we don&rsquo;t have yet, we say so
                  rather than publish one that would be wrong for most properties.
                </p>
              }
            />
          </Reveal>

          <div className="grid-hair-dark">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white p-[clamp(22px,2.6vw,32px)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-[clamp(17px,2vw,22px)] font-bold tracking-[-0.01em] text-ink marker:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center border border-ink/20 text-ink transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-prose text-[16px] leading-[1.7] text-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
