import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/ui/Section';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Terms',
  description: `Terms of use for the ${site.name} website.`,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Terms', path: '/terms' },
        ]}
        eyebrow="Terms"
        title="Using this website."
      />

      <Section tone="white">
        <div className="wrap max-w-prose [&_h2]:mt-10 [&_h2]:text-[22px] [&_h2]:text-ink [&_p]:mt-4 [&_p]:text-[16.5px] [&_p]:leading-[1.7] [&_p]:text-ink-muted">
          <div className="mb-10 border-l-2 border-gold pl-5">
            <p className="!mt-0 text-[14px] font-semibold text-ink">
              Template — please have this reviewed before the site goes live.
            </p>
          </div>

          <h2>This site is information, not a quote</h2>
          <p>
            Everything on this website describes the kinds of work {site.name} takes on. Nothing on
            it is a price, an offer, or a commitment to a timeline. A quote is a separate document,
            given after we have seen the property.
          </p>

          <h2>The images</h2>
          <p>
            All the visuals on this site — including the before-and-after comparisons on the
            Projects page — are illustrations drawn for this website. They are not photographs of
            past projects and are labelled as such where they appear.
          </p>

          <h2>Service area</h2>
          <p>
            We work across the {site.serviceAreaLong}. Being listed here is not a guarantee of
            availability on any particular date.
          </p>

          <h2>Contact</h2>
          <p>
            {site.contactName} — {site.phone} —{' '}
            <a href={site.emailHref} className="font-semibold text-ink underline underline-offset-4">
              {site.email}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
