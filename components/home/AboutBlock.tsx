import { ContactCard } from '@/components/ui/ContactCard';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Section';

const highlights = [
  'PROPERTY TURNOVER',
  'RENOVATION',
  'REPAIRS',
  'CLEANING',
  'FINISHING',
  'HOME AUTOMATION',
];

export function AboutBlock() {
  return (
    <div className="wrap grid items-start gap-[clamp(34px,5vw,72px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
      <Reveal>
        <Eyebrow>About Us</Eyebrow>
        <h2 className="mt-5 text-d3">
          We don&rsquo;t just service properties.
          <br />
          We prepare them for what&rsquo;s next.
        </h2>
        <p className="lede mt-6">
          All Time Solutions is a property turnover and renovation service company serving the GTA
          in Ontario, Canada. We help property owners and managers handle the essential work
          required to transform spaces into clean, functional and move-in-ready properties.
        </p>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {highlights.map((h, i) => (
            <span
              key={h}
              className={`border px-4 py-2.5 font-display text-[11.5px] font-bold tracking-[0.16em] ${
                i === 0
                  ? 'border-navy-900 bg-navy-900 text-white'
                  : 'border-ink/[0.16] text-ink'
              }`}
            >
              {h}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={1}>
        <ContactCard />
      </Reveal>
    </div>
  );
}
