import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Section';
import { site } from '@/lib/site';

export default function NotFound() {
  return (
    <section className="flex min-h-[76svh] items-center bg-navy-950 py-32">
      <div className="wrap">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 max-w-[18ch] text-d2">This page isn&rsquo;t here.</h1>
        <p className="lede mt-6">
          The link may be old, or the address slightly off. The services, the process and the
          contact form are all one click away.
        </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <Button href="/" variant="gold" arrow>
            Back to Home
          </Button>
          <Button href="/services" variant="ghost">
            See Our Services
          </Button>
          <Button href={site.phoneHref} variant="ghost">
            Call {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
