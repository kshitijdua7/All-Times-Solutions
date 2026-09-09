import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/ui/Section';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Privacy',
  description: `How ${site.name} handles the information you send through this website.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy', path: '/privacy' },
        ]}
        eyebrow="Privacy"
        title="What we do with your details."
      />

      <Section tone="white">
        <div className="wrap max-w-prose [&_h2]:mt-10 [&_h2]:text-[22px] [&_h2]:text-ink [&_p]:mt-4 [&_p]:text-[16.5px] [&_p]:leading-[1.7] [&_p]:text-ink-muted">
          <div className="mb-10 border-l-2 border-gold pl-5">
            <p className="!mt-0 text-[14px] font-semibold text-ink">
              Template — please have this reviewed before the site goes live.
            </p>
            <p className="!mt-2 text-[14px]">
              This page describes what the website as built actually does. It is written to be
              accurate, not to be legal advice. Have a lawyer or your accountant check it against
              Canadian privacy law (PIPEDA) before publishing.
            </p>
          </div>

          <h2>What we collect</h2>
          <p>
            Only what you type into the quote form: your name, phone number, email address, the
            property location, the services you are interested in, and any details you add. Nothing
            else is collected, and there is no account to create.
          </p>

          <h2>Why we collect it</h2>
          <p>
            To answer your enquiry and quote the work. That is the only reason. We do not sell it,
            rent it, or pass it to anyone outside {site.name} except where a specific job requires
            it and you have asked us to arrange that work.
          </p>

          <h2>Where it goes</h2>
          <p>
            Submissions reach us by email at{' '}
            <a href={site.emailHref} className="font-semibold text-ink underline underline-offset-4">
              {site.email}
            </a>
            . If a form service is used to deliver them, it passes the message on and does not use
            it for anything else.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            This site sets no cookies and runs no analytics or advertising trackers. If that changes
            — for example if a booking tool or analytics is added later — this page will be updated
            before it goes live.
          </p>

          <h2>Getting it removed</h2>
          <p>
            Ask, and we will delete your enquiry. Call {site.phone} or email{' '}
            <a href={site.emailHref} className="font-semibold text-ink underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
