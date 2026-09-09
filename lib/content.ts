/* ============================================================================
 *  CONTENT — the copy that appears in more than one place.
 *  Editing a string here changes it everywhere it is used.
 * ========================================================================== */

/** The seven scenes of the pinned scroll sequence on the homepage. */
export type Scene = {
  no: string;
  title: string;
  body: string;
  tags?: string[];
  cta?: { label: string; href: string };
};

export const scenes: Scene[] = [
  {
    no: 'SCENE 01 — THE START',
    title: 'It starts with a space.',
    body: 'Every property has potential. We bring the right people, services and attention to detail together to unlock it.',
    tags: ['Empty Property', 'Assessment'],
  },
  {
    no: 'SCENE 02 — REPAIR',
    title: 'We fix what needs fixing.',
    body: 'From drywall repairs to essential property improvements, we take care of the details that prepare your space for its next chapter.',
    tags: ['Drywall Repair', 'Property Repairs'],
  },
  {
    no: 'SCENE 03 — SYSTEMS',
    title: 'The foundation of a better space.',
    body: 'Professional property services help ensure your space is functional, safe and ready for the finishing touches.',
    tags: ['Plumbing', 'Electrical'],
  },
  {
    no: 'SCENE 04 — TRANSFORMATION',
    title: 'Then the transformation begins.',
    body: 'Fresh paint can completely change how a property feels.',
    tags: ['Painting'],
  },
  {
    no: 'SCENE 05 — THE DETAILS',
    title: "It's the details that complete the space.",
    body: 'Trim, flooring and window coverings turn finished work into a finished room.',
    tags: ['Window Blinds', 'Finishing Touches'],
  },
  {
    no: 'SCENE 06 — THE FINAL CLEAN',
    title: 'Clean. Fresh. Ready.',
    body: 'Our deep cleaning service helps turn a completed renovation into a space that feels ready for its next occupants.',
    tags: ['Deep Cleaning'],
  },
  {
    no: 'SCENE 07 — MOVE-IN READY',
    title: "Now it's move-in ready.",
    body: 'From property turnover to complete finishing touches, All Time Solutions helps turn properties into spaces people are ready to call home.',
    cta: { label: 'Start Your Transformation', href: '/contact' },
  },
];

/** Short labels for the stage rail beside the scroll sequence. */
export const stageLabels = [
  'START',
  'REPAIR',
  'SYSTEMS',
  'PAINT',
  'DETAILS',
  'CLEAN',
  'READY',
] as const;

/** The five-step process, used on the homepage and the /process page. */
export const processSteps = [
  { no: '01', name: 'Assess', body: 'We understand what your property needs.' },
  { no: '02', name: 'Plan', body: 'We determine the services and finishing work required.' },
  { no: '03', name: 'Transform', body: 'Our team tackles the work needed to prepare the property.' },
  {
    no: '04',
    name: 'Finish',
    body: 'Painting, blinds, cleaning and finishing details bring everything together.',
  },
  { no: '05', name: 'Ready', body: 'The property is prepared for its next occupants.' },
] as const;

/** The one-team advantage. */
export const benefits = [
  { no: '01', name: 'Simpler', body: 'Coordinate your property needs through one team.' },
  {
    no: '02',
    name: 'Complete',
    body: 'From repairs and painting to cleaning and finishing touches.',
  },
  { no: '03', name: 'Ready', body: 'Our goal is simple: leave your property ready for its next chapter.' },
] as const;

/** The turnover checklist, in the order the work actually happens. */
export const turnoverChecklist = [
  'Repairs',
  'Drywall',
  'Painting',
  'Plumbing',
  'Electrical',
  'Window Blinds',
  'Deep Cleaning',
  'Final Preparation',
] as const;

/* ---------------------------------------------------------- before / after
 *
 * Each category can carry a photo pair. Both photos in a pair MUST be the same
 * room from the same camera position — the slider wipes across the middle of
 * the frame, so if the framing shifts the seam stops lining up and the whole
 * effect falls apart. Images live in public/projects/ and are pre-cropped to
 * 16:9 at 1920×1080.
 *
 * Leave `before`/`after` off a category and it falls back to the hand-drawn
 * illustration instead, so the page never breaks while you're swapping photos.
 */
export type BaKind = 'reno' | 'paint' | 'drywall' | 'turnover' | 'clean';

export type BaCategory = {
  name: string;
  kind: BaKind;
  before?: string;
  after?: string;
  /** Describes the change, for screen readers and for Google Images. */
  alt?: string;
};

export const baCategories: BaCategory[] = [
  {
    name: 'Interior Renovation',
    kind: 'reno',
    before: '/projects/interior-renovation-before.jpg',
    after: '/projects/interior-renovation-after.jpg',
    alt: 'A tired room with stained carpet, marked walls and a dated ceiling fixture, and the same room after renovation with fresh white walls, new plank flooring and pot lights',
  },
  {
    name: 'Painting',
    kind: 'paint',
    before: '/projects/painting-before.jpg',
    after: '/projects/painting-after.jpg',
    alt: 'A wall covered in patch compound, peeling paint and staining, and the same wall after prep and painting with a flat, even finish',
  },
  {
    name: 'Drywall Repair',
    kind: 'drywall',
    before: '/projects/drywall-repair-before.jpg',
    after: '/projects/drywall-repair-after.jpg',
    alt: 'A wall with holes through to the insulation, anchor damage and a long crack, and the same wall after drywall repair with a smooth flat surface',
  },
  {
    name: 'Property Turnover',
    kind: 'turnover',
    before: '/projects/property-turnover-before.jpg',
    after: '/projects/property-turnover-after.jpg',
    alt: 'A vacated unit left with rubbish, a broken blind and damaged walls, and the same room after turnover, empty and clean with a new roller shade and flooring',
  },
  {
    name: 'Deep Cleaning',
    kind: 'clean',
    before: '/projects/deep-cleaning-before.jpg',
    after: '/projects/deep-cleaning-after.jpg',
    alt: 'A kitchen left heavily soiled across the counters, stove and floor, and the same kitchen after a deep clean with every surface clear',
  },
];

/** What we install, on the Home Automation page. */
export const automationItems = [
  {
    name: 'Smart Lighting & Dimmers',
    body: 'Scheduled, dimmable and app-controlled lighting through the rooms that need it.',
  },
  {
    name: 'Smart Switches & Outlets',
    body: 'Wall switches and outlets replaced with controllable versions — no rewiring the room.',
  },
  {
    name: 'Smart Thermostats',
    body: "Heating and cooling on a schedule, adjustable from a phone whether you're there or not.",
  },
  {
    name: 'Video Doorbells & Cameras',
    body: "See who's at the door and keep an eye on a vacant unit between occupants.",
  },
  {
    name: 'Smart Locks & Keyless Entry',
    body: 'Codes instead of keys — useful for showings, trades access and tenant changeovers.',
  },
  {
    name: 'Motorised Blinds & Shades',
    body: 'Our window blind work, motorised — on a schedule or on voice command.',
  },
  {
    name: 'Hubs, Apps & Voice Control',
    body: 'Everything brought together in one app, and set up to answer to voice if you want it.',
  },
  {
    name: 'Wi-Fi & Network Coverage',
    body: 'None of the above works without signal — we make sure the coverage reaches every room.',
  },
] as const;

export const automationFit = [
  {
    when: 'DURING THE TURNOVER',
    body: 'Switches, thermostats and doorbells go in while the electrical and painting work is already under way.',
  },
  {
    when: 'BEFORE A LISTING',
    body: 'Smart entry and lighting show well, and keyless access makes showings and trades visits far simpler to manage.',
  },
  {
    when: 'ON ITS OWN',
    body: "Already lived in? We'll install and set up automation on an occupied property as a standalone job.",
  },
] as const;

/** Questions worth answering honestly, rather than inventing numbers for. */
export const faqs = [
  {
    q: 'How long does a property turnover take?',
    a: "It depends entirely on the size of the unit and what it needs — a repaint and clean is a very different job from a unit that needs drywall, plumbing and new blinds throughout. Rather than publish a number that would be wrong for most properties, we give you a timeline after we've seen the space.",
  },
  {
    q: 'Do you handle everything, or do I still need other trades?',
    a: 'The services listed on this site are the ones we take on. Where a job needs something outside that list, we will tell you plainly rather than take it on regardless.',
  },
  {
    q: 'What does it cost?',
    a: "Quotes are free and based on the actual scope. Tell us the property location, roughly what it needs and when you need it ready, and we'll come back with the next step.",
  },
  {
    q: 'Do you work on occupied properties?',
    a: 'Yes. Turnover work usually happens in a vacant unit, but individual services — painting, blinds, drywall repair, deep cleaning, home automation — can be done in an occupied property.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'The Greater Toronto Area, Ontario. If you are just outside it, ask — it is worth a conversation.',
  },
] as const;
