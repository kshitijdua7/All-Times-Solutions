import { LogoMark } from '@/components/ui/Logo';
import { site } from '@/lib/site';

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 6 10-6" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/**
 * Sumit's card. The logo mark stands in for a portrait until a real one is
 * supplied — and the note says so out loud rather than shipping a stock photo
 * of someone who doesn't work here.
 */
export function ContactCard() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(160deg,#01143C,#020A1C)] p-[clamp(28px,3.4vw,40px)] text-white">
      <span
        aria-hidden="true"
        className="absolute -bottom-[70px] -right-[70px] h-[230px] w-[230px] rounded-full border border-gold/25"
      />
      <LogoMark size={82} className="mb-5" />
      <h3 className="text-[26px]">{site.contactName}</h3>
      <p className="mt-2 font-display text-[11px] font-bold tracking-[0.22em] text-gold">
        {site.contactRole}
      </p>

      <div className="relative z-[2] mt-6 grid gap-0.5">
        <a
          href={site.phoneHref}
          className="flex items-center gap-3.5 border-b border-white/10 py-3.5 text-[15.5px] transition-colors hover:text-gold-light [&>svg]:h-[19px] [&>svg]:w-[19px] [&>svg]:shrink-0 [&>svg]:text-gold"
        >
          <PhoneIcon />
          {site.phone}
        </a>
        <a
          href={site.emailHref}
          className="flex items-center gap-3.5 border-b border-white/10 py-3.5 text-[15.5px] transition-colors hover:text-gold-light [&>svg]:h-[19px] [&>svg]:w-[19px] [&>svg]:shrink-0 [&>svg]:text-gold"
        >
          <MailIcon />
          <span className="break-words">{site.email}</span>
        </a>
        <div className="flex items-center gap-3.5 border-b border-white/10 py-3.5 text-[15.5px] [&>svg]:h-[19px] [&>svg]:w-[19px] [&>svg]:shrink-0 [&>svg]:text-gold">
          <PinIcon />
          Serving {site.serviceArea}
        </div>
      </div>

    </div>
  );
}
