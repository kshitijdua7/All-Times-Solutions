import { AboutBlock } from '@/components/home/AboutBlock';
import { BeforeAfter } from '@/components/home/BeforeAfter';
import { FinalCta } from '@/components/home/FinalCta';
import { Hero } from '@/components/home/Hero';
import { OneTeam } from '@/components/home/OneTeam';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { RenovationJourney } from '@/components/home/RenovationJourney';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { TurnoverChecklist } from '@/components/home/TurnoverChecklist';
import { QuoteForm } from '@/components/contact/QuoteForm';
import { ContactDetails } from '@/components/ui/ContactDetails';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHead } from '@/components/ui/Section';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* The signature moment: a room that rebuilds itself as you scroll. */}
      <RenovationJourney />

      <Section tone="white" id="services">
        <ServicesGrid />
      </Section>

      <Section className="bg-gradient-to-b from-navy-900 to-navy-950">
        <OneTeam />
      </Section>

      <Section tone="light" id="process">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Our Process"
              title="From first look to final walk-through."
              aside={
                <p className="lede">
                  Five stages, in order. Each one has to be finished before the next one starts —
                  that sequence is what keeps a turnover on schedule.
                </p>
              }
            />
          </Reveal>
          <ProcessTimeline />
        </div>
      </Section>

      <Section tone="white" id="projects">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Projects"
              title="See the difference."
              aside={
                <>
                  <p className="lede">
                    Five kinds of work, each one shown as the same space before and after.
                  </p>
                  <p className="max-w-[60ch] border-l-2 border-gold pl-3.5 text-[13px] leading-[1.55] text-ink-faint">
                    <strong>Example transformations.</strong> These show the kind of change the work
                    makes to a space. They are examples rather than a record of one named
                    client&rsquo;s property.
                  </p>
                </>
              }
            />
          </Reveal>
          <BeforeAfter />
        </div>
      </Section>

      <Section tone="white" id="about" className="!pt-0">
        <AboutBlock />
      </Section>

      <Section tone="deep" id="turnover">
        <TurnoverChecklist />
      </Section>

      <FinalCta />

      <Section tone="light" id="contact">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Contact"
              title="Let's talk about your property."
              aside={
                <p className="lede">
                  Tell us the location, what needs doing and roughly when — we&rsquo;ll come back to
                  you with the next step.
                </p>
              }
            />
          </Reveal>
          <div className="grid items-start gap-[clamp(34px,5vw,70px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <QuoteForm />
            <ContactDetails />
          </div>
        </div>
      </Section>
    </>
  );
}
