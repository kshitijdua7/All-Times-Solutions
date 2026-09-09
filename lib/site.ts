/* ============================================================================
 *  ALL TIME SOLUTIONS — SITE CONFIGURATION
 *  ---------------------------------------------------------------------------
 *  This is the ONLY file you need to edit to change business details.
 *  Everything on the site reads from here: header, footer, contact page,
 *  every service page, the sitemap and the Google structured data.
 *
 *  Search this file for "TODO" to find everything still waiting on you.
 * ========================================================================== */

export const site = {
  /* ---------------------------------------------------------------- brand */
  name: 'All Time Solutions',
  nameParts: { first: 'ALL TIME', second: 'SOLUTIONS' },
  tagline: 'PROPERTY TURNOVER EXPERTS',
  promise: 'We Make Properties Move-In Ready',

  /* -------------------------------------------------------------- contact */
  contactName: 'Sumit Chopra',
  contactRole: 'YOUR POINT OF CONTACT',
  phone: '416-317-5661',
  phoneHref: 'tel:+14163175661',
  email: 'alltimesolutions02@gmail.com',
  emailHref: 'mailto:alltimesolutions02@gmail.com',

  /* ---------------------------------------------------------- service area */
  serviceArea: 'GTA, Ontario, Canada',
  serviceAreaLong: 'Greater Toronto Area, Ontario, Canada',
  region: 'ON',
  country: 'CA',

  /* --------------------------------------------------------------- domain */
  // TODO: replace with your real domain once it's registered. This is used for
  // canonical URLs, the sitemap and Open Graph tags — search engines need it
  // to be the address people actually visit.
  url: 'https://www.alltimesolutions.ca',

  /* ---------------------------------------------------------- form handler */
  // TODO: the quote forms validate but will NOT deliver until this is set.
  //
  // Easiest option — Formspree (free tier is plenty):
  //   1. Sign up at https://formspree.io with alltimesolutions02@gmail.com
  //   2. Create a form, copy the endpoint it gives you
  //   3. Paste it below, e.g. 'https://formspree.io/f/xxxxxxxx'
  //
  // Until then the form falls back to opening the visitor's email app with
  // everything pre-filled, which works but loses some leads on mobile.
  formEndpoint: 'https://formspree.io/f/meaqvpkd' as string,

  /* -------------------------------------------------------- business hours */
  // TODO: your real hours. Delete this block entirely if you'd rather not
  // publish hours — do NOT leave guessed times on a live site.
  hours: null as null | { days: string; time: string }[],

  /* --------------------------------------------------------------- social */
  // TODO: add real profile URLs. Anything left empty is simply not rendered,
  // so it is safe to ship with these blank.
  social: {
    facebook: '',
    instagram: '',
    google: '', // Google Business Profile — worth creating, it drives local search
  },

  /* ------------------------------------------------------------------ seo */
  seo: {
    title: 'All Time Solutions | Property Turnover & Renovation Services GTA',
    description:
      'All Time Solutions provides property turnover, renovation, painting, drywall repair, deep cleaning, plumbing, electrical, home automation and window blind services across the GTA, Ontario.',
    keywords: [
      'property turnover GTA',
      'property renovation GTA',
      'property maintenance GTA',
      'move-in ready homes GTA',
      'home renovation GTA',
      'painting services GTA',
      'drywall repair GTA',
      'deep cleaning GTA',
      'plumbing services GTA',
      'electrical services GTA',
      'window blinds GTA',
      'home automation GTA',
      'property turnover Ontario',
    ],
  },
} as const;

/* ------------------------------------------------------------- navigation */

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Process', href: '/process' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Home Automation', href: '/home-automation' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Process', href: '/process' },
  { label: 'Projects', href: '/projects' },
  { label: 'Home Automation', href: '/home-automation' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const legalNav: NavItem[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

/* ------------------------------------------------------- the honest rules */

/**
 * Deliberately NOT on this site, because none of it has been supplied and
 * inventing any of it would be a lie a customer could catch:
 *
 *   · customer reviews or testimonials      · awards
 *   · certifications or licence numbers     · years in business
 *   · number of completed projects          · named clients or addresses
 *   · team members beyond Sumit             · photographs of past work
 *
 * Where a claim like that would normally sit, the copy says something true
 * instead. When you have real ones, add them here and they'll flow through.
 */
export const unverifiedClaims = {
  testimonials: [] as { quote: string; author: string; role: string }[],
  stats: [] as { value: string; label: string }[],
} as const;

