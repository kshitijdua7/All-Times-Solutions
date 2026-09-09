import { FinaleScene } from '@/components/scene/FinaleScene';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Section';
import { site } from '@/lib/site';

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-[clamp(96px,14vw,190px)] text-center">
      <div className="absolute inset-0 z-0">
        <FinaleScene />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(2,10,28,.55),rgba(2,10,28,.86))]"
      />
      <div className="wrap relative z-[2]">
        <Eyebrow center>{site.promise}</Eyebrow>
        <h2 className="mx-auto mt-6 max-w-[17ch] text-d2">
          Ready to make your property move-in ready?
        </h2>
        <p className="lede mx-auto mt-6 text-center">
          Tell us what your property needs and let&rsquo;s get started.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3.5">
          <Button href="/contact" variant="gold" arrow>
            Get a Free Quote
          </Button>
          <Button href={site.phoneHref} variant="ghost">
            Call {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
