import type { IconKey } from '@/lib/services';

const paths: Record<IconKey, React.ReactNode> = {
  plumbing: (
    <>
      <path d="M14 8v8M9 12h10M14 16v10a8 8 0 0 0 8 8h4" />
      <rect x="26" y="28" width="12" height="12" rx="2" />
      <path d="M32 8c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z" />
    </>
  ),
  electrical: <path d="M26 4L12 26h10l-2 18 16-24H26z" />,
  painting: (
    <>
      <rect x="6" y="8" width="26" height="12" rx="2" />
      <path d="M32 14h6a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H24v6" />
      <rect x="20" y="31" width="8" height="12" rx="2" />
    </>
  ),
  cleaning: (
    <>
      <path d="M16 30l-4 12h24l-4-12z" />
      <path d="M20 30V14a4 4 0 0 1 8 0v16" />
      <path d="M24 10V4M31 12l4-4M17 12l-4-4" />
    </>
  ),
  blinds: (
    <>
      <rect x="7" y="7" width="34" height="30" rx="2" />
      <path d="M7 15h34M7 22h34M7 29h34M24 37v6M18 43h12" />
    </>
  ),
  drywall: (
    <>
      <path d="M6 8h36v32H6z" />
      <path d="M6 20h20M26 8v12M26 20v20M6 32h12" />
      <path d="M30 26l10 10M40 26L30 36" />
    </>
  ),
  turnover: (
    <>
      <path d="M6 22L24 7l18 15" />
      <path d="M11 26v15h26V26" />
      <path d="M20 41v-9h8v9" />
      <path d="M30 15V8h5v11" />
    </>
  ),
  renovation: (
    <>
      <path d="M32 6l10 10-4 4-10-10z" />
      <path d="M28 10L8 30v10h10l20-20" />
      <path d="M8 30l10 10M22 16l10 10" />
    </>
  ),
  automation: (
    <>
      <path d="M8 21L24 8l16 13" />
      <path d="M12 24v16h24V24" />
      <circle cx="24" cy="31" r="5" />
      <path d="M24 24v2M24 36v2" />
      <path d="M17 15a10 10 0 0 1 14 0" />
    </>
  ),
};

export function ServiceIcon({
  name,
  className = 'h-[52px] w-[52px]',
}: {
  name: IconKey;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
