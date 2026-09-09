import { Button } from '@/components/ui/Button';
import { DustCanvas } from '@/components/ui/DustCanvas';
import { Eyebrow } from '@/components/ui/Section';
import { HeroScene } from '@/components/scene/HeroScene';
import { site } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-950 pb-[clamp(30px,7vh,74px)] pt-[112px] md:pt-[130px]">
      <div className="absolute -inset-[2%] z-0">
        <HeroScene />
      </div>

      {/* Scrim. Three stacked gradients rather than one flat overlay, so the
          light stays where the window is and the copy still has a dark ground. */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: [
            'radial-gradient(120% 90% at 72% 22%, rgba(120,160,215,.20), transparent 58%)',
            'linear-gradient(180deg, rgba(2,10,28,.86) 0%, rgba(2,10,28,.34) 32%, rgba(2,10,28,.72) 72%, #020A1C 100%)',
            'linear-gradient(90deg, rgba(2,10,28,.92) 0%, rgba(2,10,28,.30) 55%, rgba(2,10,28,.55) 100%)',
          ].join(','),
        }}
      />

      <DustCanvas className="pointer-events-none absolute inset-0 z-[2] opacity-75" />

      <div className="relative z-[3] w-full">
        <div className="wrap">
          <Eyebrow>
            {site.name} &nbsp;·&nbsp; {site.tagline}
          </Eyebrow>

          <h1 className="mt-5 max-w-[15ch] text-d1">
            From unfinished
            <span className="block text-gold">to move-in ready.</span>
          </h1>

          <p className="lede mt-6 max-w-[52ch] text-[clamp(16px,1.75vw,21px)] text-white/80">
            We transform properties from unfinished spaces into clean, polished, move-in-ready homes.
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button href="/contact" variant="gold" arrow>
              Get a Free Quote
            </Button>
            <Button href="/services" variant="ghost">
              Explore Our Services
            </Button>
          </div>

          <p className="mt-6 flex items-center gap-3 font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-white/55">
            <span className="h-[5px] w-[5px] rounded-full bg-gold shadow-[0_0_0_4px_rgba(214,150,14,.2)]" />
            Serving the GTA · Ontario, Canada
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 z-[4] hidden -translate-x-1/2 flex-col items-center gap-2.5 font-display text-[9.5px] font-bold tracking-[0.3em] text-white/50 md:flex"
      >
        <span>SCROLL TO TRANSFORM</span>
        <span className="relative h-[52px] w-px overflow-hidden bg-gradient-to-b from-transparent to-gold">
          <span className="absolute left-0 h-4 w-px bg-white motion-safe:animate-cue" />
        </span>
      </div>
    </section>
  );
}
