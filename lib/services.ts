/* ============================================================================
 *  SERVICES — one entry per service page.
 *
 *  Adding a service here creates its card on the homepage, its row in the
 *  services index, its own page at /services/<slug>, its sitemap entry and
 *  its option in the quote form. Nothing else needs touching.
 * ========================================================================== */

export type IconKey =
  | 'plumbing'
  | 'electrical'
  | 'painting'
  | 'cleaning'
  | 'blinds'
  | 'drywall'
  | 'turnover'
  | 'renovation'
  | 'automation';

export type Service = {
  slug: string;
  name: string;
  /** Short line used on cards. Kept to one sentence on purpose. */
  short: string;
  /** Opening paragraph on the service's own page. */
  intro: string;
  /** What the work actually covers. Written as scope, not as promises. */
  covers: string[];
  /** Where this fits in a turnover — the "why it matters" paragraph. */
  fit: string;
  icon: IconKey;
  /** Feature it on the homepage grid with the navy treatment. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: 'plumbing',
    name: 'Plumbing',
    short: 'Property plumbing solutions to help keep your space functional and ready.',
    intro:
      'Plumbing is one of the things a new occupant tests within the first hour — taps, drains, the shut-off under the sink. We handle the plumbing work a property needs so none of it becomes a first-week complaint.',
    covers: [
      'Fixture removal, replacement and reinstallation',
      'Taps, sinks, vanities and basin connections',
      'Shut-off valves and supply lines',
      'Drain and trap work at fixture level',
      'Making good after removals, ready for finishing',
    ],
    fit: 'Plumbing runs early in a turnover, before painting and flooring, because anything opened up afterwards means patching and repainting a wall you have already finished.',
    icon: 'plumbing',
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    short: 'Electrical service for property improvement and finishing needs.',
    intro:
      'Bare wires hanging from a ceiling and missing cover plates are the fastest way to make a finished property feel unfinished. We complete the electrical work a space needs to read as done.',
    covers: [
      'Light fixtures, pendants and ceiling work',
      'Switches, dimmers, outlets and cover plates',
      'Replacing damaged or dated devices',
      'Preparing openings ahead of drywall and paint',
      'Smart switches and controls — see Home Automation',
    ],
    fit: 'Electrical sits alongside plumbing in the early stages. Getting it done before the walls close up is what keeps the finishing work clean.',
    icon: 'electrical',
  },
  {
    slug: 'painting',
    name: 'Painting',
    short: 'Fresh, professional-looking finishes that transform the feel of a property.',
    intro:
      'Paint changes how a property feels more than anything else per dollar spent. It is also the step that shows every shortcut taken before it, which is why we do the prep properly.',
    covers: [
      'Full interior repaints, room by room or whole unit',
      'Walls, ceilings, trim, doors and frames',
      'Surface prep — filling, sanding, caulking, priming',
      'Colour changes and accent walls',
      'Touch-ups after repairs and installations',
    ],
    fit: 'Painting comes after repairs and systems, before flooring and blinds. A wall painted before the drywall is properly finished has to be painted twice.',
    icon: 'painting',
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    short: 'Detailed cleaning that leaves your property fresh, clean and ready.',
    intro:
      'A renovation is not finished when the work stops — it is finished when the dust is gone. Deep cleaning is the step that turns completed work into a space someone would happily move into.',
    covers: [
      'Post-construction and post-renovation cleaning',
      'Kitchens and bathrooms, inside and out',
      'Floors, baseboards, sills, frames and fixtures',
      'Interior windows, tracks and glass',
      'Move-in and move-out cleans',
    ],
    fit: 'This is the last thing that happens before a walk-through. Every other trade generates dust, so cleaning has to come after all of them, not alongside.',
    icon: 'cleaning',
  },
  {
    slug: 'window-blinds',
    name: 'Window Blinds',
    short: 'Window blind solutions that add privacy, comfort and finishing detail.',
    intro:
      'Bare windows make a finished room look empty and leave a property with no privacy on day one. Blinds are a small line on a quote that changes how the whole space photographs and shows.',
    covers: [
      'Supply and installation of window blinds',
      'Measuring for each opening',
      'Removing and replacing old or damaged blinds',
      'Whole-unit fit-outs for turnovers',
      'Motorised options — see Home Automation',
    ],
    fit: 'Blinds go in near the end, once painting and trim are done, so nothing gets marked or has to come back off the wall.',
    icon: 'blinds',
  },
  {
    slug: 'drywall-repair',
    name: 'Drywall Repair',
    short: 'Repair and restoration of damaged drywall to prepare spaces for finishing.',
    intro:
      'Holes, dents, popped screws, water damage and the marks left behind by furniture and fixings. Drywall repair is the quiet work that decides whether a fresh coat of paint looks new or just looks painted.',
    covers: [
      'Patching holes, dents and impact damage',
      'Taping, mudding, sanding and feathering seams',
      'Replacing damaged sections and boarding openings',
      'Corner bead repair and edge work',
      'Preparing surfaces so paint sits flat',
    ],
    fit: 'Drywall is the foundation of every finish that follows. Paint cannot hide a bad patch — it highlights it under the first bit of side light.',
    icon: 'drywall',
  },
  {
    slug: 'property-turnover',
    name: 'Property Turnover',
    short: 'Multiple services coordinated through one team so a unit is ready between occupants.',
    intro:
      'Turnover is the whole job, not one trade: getting a property from the state the last occupant left it in to the state the next one expects. We coordinate the pieces so you are not chasing six different people for six different dates.',
    covers: [
      'Walk-through and scope of what the unit needs',
      'Repairs, drywall and making good',
      'Plumbing and electrical work',
      'Painting, blinds and finishing details',
      'Deep clean and final preparation',
    ],
    fit: 'This is the service the rest of the site is built around. Every other page on this site is one stage of it.',
    icon: 'turnover',
    featured: true,
  },
  {
    slug: 'full-property-renovation',
    name: 'Full Property Renovation',
    short: 'Larger scopes of work, from repairs and finishes through to move-in preparation.',
    intro:
      'When a property needs more than a turnover — a space reconfigured, finishes brought up to date, a unit taken from tired to current. Larger scopes, handled through the same single point of contact.',
    covers: [
      'Whole-unit refresh and modernisation',
      'Multi-room renovation scopes',
      'Coordinated trades across the project',
      'Finishing, blinds and fixtures throughout',
      'Final clean and handover preparation',
    ],
    fit: 'A renovation follows the same sequence as a turnover, just with more in each stage. The order does not change — repairs, systems, paint, details, clean.',
    icon: 'renovation',
  },
  {
    slug: 'home-automation',
    name: 'Home Automation',
    short:
      'Smart lighting, switches, thermostats, doorbells, locks and motorised blinds — set up and working before the keys change hands.',
    intro:
      'Alongside our turnover work we install and set up home automation, so lighting, climate, entry and window coverings are working on day one rather than sitting in boxes in a cupboard.',
    covers: [
      'Smart lighting and dimmers',
      'Smart switches and outlets',
      'Smart thermostats',
      'Video doorbells and cameras',
      'Smart locks and keyless entry',
      'Motorised blinds and shades',
      'Hubs, apps and voice control',
      'Wi-Fi and network coverage',
    ],
    fit: 'A turnover is the one window where the walls are open, the paint is fresh and nobody is living there. Doing the automation in the same visit avoids a second round of drilling and touch-ups later.',
    icon: 'automation',
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

/** Options shown in the "Services Needed" dropdown on the quote form. */
export const quoteOptions: string[] = [
  'Full Property Turnover',
  ...services.filter((s) => s.slug !== 'property-turnover').map((s) => s.name),
  'Multiple Services',
  'Other',
];
