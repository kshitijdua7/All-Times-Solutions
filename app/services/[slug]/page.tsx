import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { QuoteForm } from '@/components/contact/QuoteForm';
import { Button } from '@/components/ui/Button';
import { ContactDetails } from '@/components/ui/ContactDetails';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow, Section, SectionHead } from '@/components/ui/Section';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';
import { getService, services } from '@/lib/services';
import { site } from '@/lib/site';

/** One static page per service, generated at build time. */
export function generateStaticParams() {
  return services.filter((s) => s.slug !== 'home-automation').map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return pageMeta({ title: 'Service', description: site.seo.description });

  return pageMeta({
    title: `${service.name} in the GTA`,
    description: `${service.short} ${site.name} serves the Greater Toronto Area, Ontario.`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || service.slug === 'home-automation') notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHeader
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
        eyebrow="Property Services"
        title={`${service.name} in the GTA`}
        lede={service.short}
        actions={
          <>
            <Button href="/contact" variant="gold" arrow>
              Get a Free Quote
            </Button>
            <Button href={site.phoneHref} variant="ghost">
              Call {site.phone}
            </Button>
          </>
        }
      />

      <Section tone="deep">
        <div className="wrap grid gap-[clamp(34px,6vw,80px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <ServiceIcon name={service.icon} className="h-16 w-16 text-gold" />
            <p className="lede mt-7 text-[clamp(17px,1.9vw,22px)] text-white/85">{service.intro}</p>
            <p className="lede mt-6">{service.fit}</p>
          </div>

          <Reveal>
            <Eyebrow>What the work covers</Eyebrow>
            <ul className="mt-6 grid list-none gap-px border border-white/[0.14] bg-white/[0.14] p-0">
              {service.covers.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3.5 bg-[#020D26] px-5 py-4 text-[15.5px] text-white/85"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-1 h-4 w-4 shrink-0 text-gold"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 12.5l5.5 5.5L20 6.5" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] leading-[1.55] text-white/45">
              Scope varies by property. Anything outside this list, we&rsquo;ll say so rather than
              take it on regardless.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="navy" className="!py-[clamp(56px,7vw,90px)]">
        <div className="wrap">
          <Eyebrow>Often booked with</Eyebrow>
          <div className="mt-7 grid gap-px border border-white/[0.14] bg-white/[0.14] sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={o.slug === 'home-automation' ? '/home-automation' : `/services/${o.slug}`}
                className="group flex flex-col gap-3 bg-navy-900 p-6 transition-colors duration-300 hover:bg-navy-800"
              >
                <ServiceIcon name={o.icon} className="h-9 w-9 text-gold" />
                <h3 className="text-[17px]">{o.name}</h3>
                <p className="text-[14px] text-white/[0.62]">{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="light">
        <div className="wrap">
          <SectionHead
            eyebrow="Get a quote"
            title={`Need ${service.name.toLowerCase()}?`}
            aside={
              <p className="lede">
                Tell us the property location and what it needs. Quotes are free and based on the
                actual scope of work.
              </p>
            }
          />
          <div className="grid items-start gap-[clamp(34px,5vw,70px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <QuoteForm preselect={service.name} />
            <ContactDetails />
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: service.name, path: `/services/${service.slug}` },
            ]),
          ),
        }}
      />
    </>
  );
}
