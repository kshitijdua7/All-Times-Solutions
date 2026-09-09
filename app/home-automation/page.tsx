import { PageHeader } from '@/components/layout/PageHeader';
import { SmartHomeScene } from '@/components/scene/SmartHomeScene';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow, Section, SectionHead } from '@/components/ui/Section';
import { automationFit, automationItems } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Home Automation GTA',
  description:
    'Smart lighting, switches, thermostats, video doorbells, smart locks, motorised blinds and Wi-Fi coverage — installed and set up across the GTA, Ontario, by All Time Solutions.',
  path: '/home-automation',
});

const icons = [
  <>
    <path d="M24 6a13 13 0 0 0-8 23v5h16v-5a13 13 0 0 0-8-23z" />
    <path d="M19 40h10M21 44h6" />
  </>,
  <>
    <rect x="10" y="6" width="28" height="36" rx="4" />
    <circle cx="24" cy="20" r="6" />
    <path d="M24 14v6M16 34h16" />
  </>,
  <>
    <path d="M20 26V10a4 4 0 0 1 8 0v16a8 8 0 1 1-8 0z" />
    <circle cx="24" cy="32" r="4" fill="currentColor" stroke="none" />
  </>,
  <>
    <rect x="14" y="4" width="20" height="40" rx="6" />
    <circle cx="24" cy="17" r="5" />
    <path d="M20 32h8" />
  </>,
  <>
    <rect x="10" y="20" width="28" height="22" rx="4" />
    <path d="M16 20v-6a8 8 0 0 1 16 0v6" />
    <circle cx="24" cy="30" r="3" />
    <path d="M24 33v4" />
  </>,
  <>
    <rect x="7" y="7" width="34" height="28" rx="2" />
    <path d="M7 14h34M7 21h34M7 28h34M24 35v8M19 43h10" />
  </>,
  <>
    <circle cx="24" cy="24" r="8" />
    <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4" />
  </>,
  <>
    <path d="M6 18a26 26 0 0 1 36 0M13 26a17 17 0 0 1 22 0M20 34a7 7 0 0 1 8 0" />
    <circle cx="24" cy="41" r="2.5" fill="currentColor" stroke="none" />
  </>,
];

export default function HomeAutomationPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Home Automation', path: '/home-automation' },
        ]}
        eyebrow={`Also from ${site.name}`}
        title={
          <>
            Move-in ready,
            <br />
            and already smart.
          </>
        }
        lede="Alongside our property turnover work, we install and set up home automation — so lighting, climate, entry and window coverings are working the day the keys change hands."
        art={<SmartHomeScene />}
        actions={
          <>
            <Button href="/contact" variant="gold" arrow>
              Ask About Home Automation
            </Button>
            <Button href={site.phoneHref} variant="ghost">
              Call {site.phone}
            </Button>
          </>
        }
      />

      <Section tone="deep">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="What We Install"
              title="Smart where it actually helps."
              aside={
                <p className="lede">
                  We keep it practical: the devices a property owner, landlord or new occupant will
                  genuinely use, installed properly and handed over working.
                </p>
              }
            />
          </Reveal>

          <Reveal className="grid-hair sm:grid-cols-2 lg:grid-cols-4">
            {automationItems.map((item, i) => (
              <article
                key={item.name}
                className="flex flex-col gap-3.5 bg-[#020D26] px-[26px] py-[30px] transition-colors duration-300 hover:bg-[#04173B]"
              >
                <svg
                  viewBox="0 0 48 48"
                  className="h-10 w-10 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icons[i]}
                </svg>
                <h2 className="text-[18px] tracking-[0.02em]">{item.name}</h2>
                <p className="text-[15px] text-white/70">{item.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section tone="light">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Where It Fits</Eyebrow>
            <h2 className="mt-5 max-w-[24ch] text-d3">
              The cheapest time to wire a property is while it&rsquo;s already open.
            </h2>
            <p className="lede mt-6">
              A turnover is the one window where the walls are patched, the paint is fresh and
              nobody is living there. Doing the automation in the same visit avoids a second round
              of drilling, patching and touch-ups later.
            </p>
          </Reveal>

          <Reveal className="mt-11 grid gap-[clamp(20px,3vw,38px)] sm:grid-cols-3">
            {automationFit.map((f) => (
              <div key={f.when} className="border-t-2 border-gold pt-5">
                <b className="font-display text-[12px] font-extrabold tracking-[0.2em] text-gold">
                  {f.when}
                </b>
                <p className="mt-2.5 text-[15.5px] text-ink-muted">{f.body}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-[clamp(44px,6vw,72px)]">
            <div className="flex flex-wrap items-center justify-between gap-[clamp(22px,4vw,50px)] bg-[linear-gradient(115deg,#01143C_0%,#062250_58%,#0E3070_100%)] p-[clamp(32px,4.6vw,60px)] text-white">
              <div>
                <h3 className="max-w-[18ch] text-d4">Want automation added to your quote?</h3>
                <p className="mt-3 max-w-[44ch] text-[16px] text-white/[0.72]">
                  Mention it when you get in touch and we&rsquo;ll price it alongside the rest of
                  the work.
                </p>
              </div>
              <Button href="/contact" variant="gold" arrow>
                Get a Free Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
