import { PageHeader } from '@/components/layout/PageHeader';
import { BeforeAfter } from '@/components/home/BeforeAfter';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHead } from '@/components/ui/Section';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Projects',
  description:
    'Illustrated before-and-after comparisons showing the kind of change a property turnover makes — interior renovation, painting, drywall repair, turnover and deep cleaning.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
        ]}
        eyebrow="Before / After"
        title="See the difference."
        lede="The same room, before and after the work. Drag the handle across any image to compare."
      />

      <Section tone="white">
        <div className="wrap">
          <Reveal>
            <div className="mb-8 max-w-[70ch] border-l-2 border-gold pl-5">
              <h2 className="text-[clamp(18px,2vw,24px)] text-ink">
                What you&rsquo;re looking at
              </h2>
              <p className="mt-3 text-[15.5px] leading-[1.65] text-ink-muted">
                Each comparison shows the same space before and after the work — same room, same
                angle, so you can see exactly what changed. These are example transformations that
                show the kind and standard of work involved; they are not a record of one named
                client&rsquo;s property. Where a client is happy for their job photos to be
                published, those go up here in place of these.
              </p>
            </div>
          </Reveal>

          <BeforeAfter />

          <Reveal className="mt-[clamp(44px,6vw,72px)]">
            <div className="flex flex-wrap items-center justify-between gap-8 border border-ink/[0.14] p-[clamp(28px,4vw,48px)]">
              <div>
                <h3 className="max-w-[22ch] text-d4 text-ink">
                  Photos of your property, before we start?
                </h3>
                <p className="mt-3 max-w-[46ch] text-[16px] text-ink-muted">
                  Send them through with your enquiry — it makes the first quote a great deal more
                  accurate.
                </p>
              </div>
              <Button href="/contact" variant="navy" arrow>
                Send Us Your Photos
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
