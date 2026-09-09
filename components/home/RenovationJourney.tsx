'use client';

import { Button } from '@/components/ui/Button';
import { RoomScene } from '@/components/scene/RoomScene';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { scenes, stageLabels } from '@/lib/content';

/**
 * The signature moment.
 *
 * A tall track with a sticky stage inside it. As you scroll, the room in the
 * background rebuilds itself stage by stage and the copy crossfades. Scroll
 * back up and it comes apart again, because the stage classes are derived
 * from scroll position rather than fired once by a trigger.
 *
 * Note what this does NOT do: it doesn't pin the body, capture the wheel, or
 * swallow touch events. The page scrolls normally the whole way through, so
 * the scrollbar, keyboard, find-in-page and screen readers keep working and
 * nobody can get trapped in it.
 */
export function RenovationJourney() {
  const { trackRef, stageRef, stage } = useScrollProgress(scenes.length);

  return (
    <section className="relative bg-navy-950" aria-label="The renovation journey, scene by scene">
      <div ref={trackRef} className="h-[640vh] lg:h-[700vh]">
        <div className="sticky top-0 flex h-[100svh] items-end overflow-hidden lg:items-center">
          {/* the camera push — driven by a CSS variable, not React state */}
          <div ref={stageRef} aria-hidden="true" className="stagewrap absolute inset-0">
            <RoomScene stage={stage} />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(2,10,28,.95)_8%,rgba(2,10,28,.55)_44%,rgba(2,10,28,.15)_78%)] lg:bg-[linear-gradient(90deg,rgba(2,10,28,.94)_0%,rgba(2,10,28,.62)_34%,rgba(2,10,28,0)_62%),linear-gradient(0deg,rgba(2,10,28,.8),transparent_42%)]"
          />

          <div className="wrap relative z-[3] pb-[clamp(34px,9vh,80px)] lg:pb-0">
            <div className="relative min-h-[300px] lg:min-h-[340px] lg:max-w-[640px]">
              {scenes.map((s, i) => (
                <article
                  key={s.no}
                  aria-hidden={i !== stage}
                  className={`absolute inset-0 flex flex-col justify-end transition-[opacity,transform] duration-700 ease-brand lg:justify-start ${
                    i === stage
                      ? 'pointer-events-auto translate-y-0 opacity-100'
                      : 'pointer-events-none translate-y-6 opacity-0'
                  }`}
                >
                  <p className="font-display text-[12px] font-extrabold tracking-[0.28em] text-gold">
                    {s.no}
                  </p>
                  <h2 className="mt-4 text-[clamp(30px,5.4vw,74px)] leading-[0.94]">{s.title}</h2>
                  <p className="mt-5 max-w-[46ch] text-[clamp(15px,1.5vw,18.5px)] text-white/[0.76]">
                    {s.body}
                  </p>

                  {s.tags && (
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="border border-gold/40 bg-gold/[0.08] px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-[0.15em] text-gold-light"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {s.cta && (
                    <div className="mt-7">
                      <Button href={s.cta.href} variant="gold" arrow>
                        {s.cta.label}
                      </Button>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* stage rail — tells you where you are in the sequence */}
          <div
            aria-hidden="true"
            className="absolute right-[var(--pad)] top-1/2 z-[4] hidden -translate-y-1/2 flex-col items-end gap-1 text-right lg:flex"
          >
            {stageLabels.map((label, i) => (
              <b
                key={label}
                className={`border-r-2 bg-[rgba(2,10,28,.62)] py-1.5 pl-3.5 pr-3 font-display text-[10.5px] font-bold tracking-[0.2em] backdrop-blur-[2px] transition-colors duration-300 ${
                  i === stage
                    ? 'border-gold text-gold-light'
                    : i < stage
                      ? 'border-gold/45 text-white/55'
                      : 'border-white/20 text-white/40'
                }`}
              >
                {label}
              </b>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
