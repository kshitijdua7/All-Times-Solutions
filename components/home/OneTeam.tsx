import { ConvergeDiagram } from '@/components/scene/ConvergeDiagram';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Section';
import { benefits } from '@/lib/content';

export function OneTeam() {
  return (
    <div className="wrap grid items-center gap-[clamp(34px,6vw,84px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
      <Reveal>
        <Eyebrow>The One-Team Advantage</Eyebrow>
        <h2 className="mt-5 text-d3">
          Why manage six contractors when you can start with one?
        </h2>
        <p className="lede mt-6">
          Property turnover can involve a lot of moving pieces. All Time Solutions brings multiple
          property services together, helping make the process simpler from repair to final clean.
        </p>

        <div className="mt-9 grid gap-px border-y border-white/[0.14] bg-white/[0.14]">
          {benefits.map((b) => (
            <div
              key={b.no}
              className="grid grid-cols-[64px_1fr] items-start gap-[18px] bg-[#020D26] px-[clamp(20px,2.4vw,30px)] py-6 transition-colors duration-300 hover:bg-[#04173B]"
            >
              <b className="pt-[3px] font-display text-[13px] font-extrabold tabular-nums tracking-[0.12em] text-gold">
                {b.no}
              </b>
              <div>
                <h3 className="text-[17px] font-bold uppercase tracking-[0.04em]">{b.name}</h3>
                <p className="mt-[7px] text-[15.5px] text-white/[0.68]">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={1} className="mx-auto aspect-square w-full max-w-[520px]">
        <ConvergeDiagram />
      </Reveal>
    </div>
  );
}
