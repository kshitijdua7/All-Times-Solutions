import type { Metadata } from 'next';
import { site } from './site';
import { services } from './services';

/**
 * Builds page metadata from a title and description, filling in the
 * canonical URL and Open Graph tags so every page is consistent.
 */
export function pageMeta({
  title,
  description,
  path = '/',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  const url = `${site.url}${path === '/' ? '' : path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_CA',
      siteName: site.name,
      title: fullTitle,
      description,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}

/**
 * Structured data for Google. Only facts that were actually supplied are
 * included — no aggregateRating, no review count, no founding date, because
 * inventing those is exactly what gets a business profile penalised.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.name,
    slogan: site.promise,
    description: site.seo.description,
    url: site.url,
    telephone: `+1-${site.phone}`,
    email: site.email,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: site.serviceAreaLong,
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: site.region,
      addressCountry: site.country,
    },
    employee: { '@type': 'Person', name: site.contactName },
    knowsAbout: services.map((s) => s.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Property services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, description: s.short },
      })),
    },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path === '/' ? '' : t.path}`,
    })),
  };
}
