'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { quoteOptions } from '@/lib/services';
import { site } from '@/lib/site';

type Fields = {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  details: string;
};

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error';

const empty: Fields = {
  name: '',
  phone: '',
  email: '',
  location: '',
  service: quoteOptions[0]!,
  details: '',
};

const inputClass =
  'w-full border border-ink/[0.16] bg-white px-4 py-[15px] text-[16px] text-ink transition-[border-color,box-shadow] focus:border-navy-900 focus:outline-none focus:ring-[3px] focus:ring-navy-900/10';

function Field({
  id,
  label,
  error,
  children,
  full,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={`grid gap-2 ${full ? 'sm:col-span-2' : ''}`}>
      <label
        htmlFor={id}
        className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-[13px] font-semibold text-[#A3200F]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function QuoteForm({ preselect }: { preselect?: string }) {
  const [values, setValues] = useState<Fields>(() =>
    preselect && quoteOptions.includes(preselect) ? { ...empty, service: preselect } : empty,
  );
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  // Warn once in the console if the form has no destination, so this can't
  // ship unnoticed and quietly lose leads.
  useEffect(() => {
    if (!site.formEndpoint) {
      // eslint-disable-next-line no-console
      console.warn(
        '[All Time Solutions] No form endpoint is set. Quote requests will fall back to ' +
          "opening the visitor's email app. Set `formEndpoint` in lib/site.ts to receive " +
          'submissions directly. See the README.',
      );
    }
  }, []);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((x) => ({ ...x, [key]: undefined }));
  };

  function validate(): boolean {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) next.name = 'Please tell us your name.';
    if (!values.phone.trim()) next.phone = 'A phone number is the fastest way to reach you.';
    else if (values.phone.replace(/\D/g, '').length < 10)
      next.phone = 'That looks short for a phone number — please check it.';
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = 'Please check the email address.';
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      document.getElementById(`q-${first}`)?.focus();
      return false;
    }
    return true;
  }

  function mailtoFallback() {
    const body = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email || '-'}`,
      `Property location: ${values.location || '-'}`,
      `Services needed: ${values.service}`,
      '',
      'Project details:',
      values.details || '-',
    ].join('\n');

    window.location.href =
      `${site.emailHref}?subject=${encodeURIComponent(`Free quote request — ${values.service}`)}` +
      `&body=${encodeURIComponent(body)}`;
    setStatus('mailto');
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    if (!site.formEndpoint) {
      mailtoFallback();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, source: 'alltimesolutions.ca quote form' }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      setValues(empty);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="border-l-2 border-gold bg-white p-8">
        <h3 className="text-[24px] text-ink">Thanks — that&rsquo;s with us.</h3>
        <p className="mt-3 text-ink-muted">
          {site.contactName} will get back to you about your property. If it&rsquo;s urgent, call{' '}
          <a href={site.phoneHref} className="font-bold text-ink underline underline-offset-4">
            {site.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn btn-navy mt-6 text-[12px]"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-[18px] sm:grid-cols-2">
      <Field id="q-name" label="Name" error={errors.name}>
        <input
          id="q-name"
          name="name"
          type="text"
          autoComplete="name"
          className={inputClass}
          placeholder="Your full name"
          value={values.name}
          onChange={set('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'q-name-error' : undefined}
        />
      </Field>

      <Field id="q-phone" label="Phone" error={errors.phone}>
        <input
          id="q-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          placeholder="(416) 000-0000"
          value={values.phone}
          onChange={set('phone')}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'q-phone-error' : undefined}
        />
      </Field>

      <Field id="q-email" label="Email" error={errors.email}>
        <input
          id="q-email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          placeholder="you@email.com"
          value={values.email}
          onChange={set('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'q-email-error' : undefined}
        />
      </Field>

      <Field id="q-location" label="Property Location">
        <input
          id="q-location"
          name="location"
          type="text"
          className={inputClass}
          placeholder="City or neighbourhood in the GTA"
          value={values.location}
          onChange={set('location')}
        />
      </Field>

      <Field id="q-service" label="Services Needed" full>
        <select
          id="q-service"
          name="service"
          className={`${inputClass} select-arrow appearance-none pr-11`}
          value={values.service}
          onChange={set('service')}
        >
          {quoteOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>

      <Field id="q-details" label="Project Details" full>
        <textarea
          id="q-details"
          name="details"
          rows={5}
          className={`${inputClass} min-h-[132px] resize-y`}
          placeholder="Unit size, condition, timeline, anything else worth knowing."
          value={values.details}
          onChange={set('details')}
        />
      </Field>

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === 'sending'} className="btn btn-gold w-full disabled:opacity-70">
          {status === 'sending' ? 'Sending…' : 'Request a Free Quote'}
        </button>
      </div>

      {status === 'error' && (
        <p role="alert" className="text-[14px] font-semibold text-[#A3200F] sm:col-span-2">
          That didn&rsquo;t send. Please call{' '}
          <a href={site.phoneHref} className="underline underline-offset-4">
            {site.phone}
          </a>{' '}
          or email{' '}
          <a href={site.emailHref} className="underline underline-offset-4">
            {site.email}
          </a>{' '}
          and we&rsquo;ll pick it up from there.
        </p>
      )}

      <p className="text-[12.5px] leading-[1.55] text-ink-faint sm:col-span-2">
        {status === 'mailto'
          ? 'Your email app should now be open with the details filled in — press send and we’ll be in touch.'
          : site.formEndpoint
            ? 'We use your details only to answer your enquiry.'
            : 'This form opens your email app with the details filled in, ready to send to All Time Solutions.'}{' '}
        Prefer to talk? Call{' '}
        <a href={site.phoneHref} className="font-bold text-ink underline underline-offset-4">
          {site.phone}
        </a>
        .
      </p>
    </form>
  );
}
