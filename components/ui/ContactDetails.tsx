import { site } from '@/lib/site';

const rows = [
  {
    label: 'Contact',
    value: site.contactName,
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
      </>
    ),
  },
  {
    label: 'Phone',
    value: site.phone,
    href: site.phoneHref,
    icon: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    ),
  },
  {
    label: 'Email',
    value: site.email,
    href: site.emailHref,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 6 10-6" />
      </>
    ),
  },
  {
    label: 'Service Area',
    value: site.serviceArea,
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

/** The plain facts, on a white card, next to the quote form. */
export function ContactDetails() {
  return (
    <aside className="grid gap-px border border-ink/[0.12] bg-ink/[0.12]">
      {rows.map((r) => (
        <div key={r.label} className="flex items-start gap-4 bg-white px-6 py-[22px]">
          <svg
            viewBox="0 0 24 24"
            className="mt-[3px] h-5 w-5 shrink-0 text-gold"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {r.icon}
          </svg>
          <div>
            <b className="mb-1 block font-display text-[10.5px] font-bold uppercase tracking-[0.2em] text-ink-faint">
              {r.label}
            </b>
            {r.href ? (
              <a
                href={r.href}
                className="break-words text-[17px] font-semibold text-ink transition-colors hover:text-gold"
              >
                {r.value}
              </a>
            ) : (
              <span className="break-words text-[17px] font-semibold text-ink">{r.value}</span>
            )}
          </div>
        </div>
      ))}
    </aside>
  );
}
