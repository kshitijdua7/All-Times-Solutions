import { PageHeader } from '@/components/layout/PageHeader';
import { QuoteForm } from '@/components/contact/QuoteForm';
import { ContactDetails } from '@/components/ui/ContactDetails';
import { Section } from '@/components/ui/Section';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Contact',
  description:
    'Get a free quote for property turnover, renovation, painting, drywall, plumbing, electrical, blinds, deep cleaning or home automation in the GTA. Call Sumit Chopra on 416-317-5661.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
        eyebrow="Contact"
        title="Let's talk about your property."
        lede="Tell us the location, what needs doing and roughly when — we'll come back to you with the next step. Quotes are free."
      />

      <Section tone="light">
        <div className="wrap grid items-start gap-[clamp(34px,5vw,70px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <QuoteForm />
          <div className="grid gap-6">
            <ContactDetails />
            {site.hours ? (
              <div className="border border-ink/[0.12] bg-white p-6">
                <b className="mb-3 block font-display text-[10.5px] font-bold uppercase tracking-[0.2em] text-ink-faint">
                  Hours
                </b>
                <ul className="grid list-none gap-2 p-0 text-[15.5px] text-ink">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-6">
                      <span>{h.days}</span>
                      <span className="tabular-nums text-ink-muted">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <p className="text-[13px] leading-[1.6] text-ink-faint">
              Photos of the property help a great deal. Attach them to an email to{' '}
              <a href={site.emailHref} className="font-semibold text-ink underline underline-offset-4">
                {site.email}
              </a>{' '}
              and we can give you a much closer first answer.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
