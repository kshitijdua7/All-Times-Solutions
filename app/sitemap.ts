import type { MetadataRoute } from 'next';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

/** Generated at build time from the route list — it can't drift out of date. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    { path: '/', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/home-automation', priority: 0.8 },
    { path: '/process', priority: 0.7 },
    { path: '/projects', priority: 0.7 },
    { path: '/about', priority: 0.6 },
    { path: '/contact', priority: 0.9 },
    { path: '/privacy', priority: 0.2 },
    { path: '/terms', priority: 0.2 },
  ];

  const servicePaths = services
    .filter((s) => s.slug !== 'home-automation')
    .map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 }));

  return [...staticPaths, ...servicePaths].map(({ path, priority }) => ({
    url: `${site.url}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority,
  }));
}
