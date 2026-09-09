# All Time Solutions — website

Property turnover & renovation, GTA, Ontario.
Next.js 15 · React 19 · TypeScript · Tailwind CSS.

---

## Run it on your computer

You need **Node.js 18.18 or newer** — get it from <https://nodejs.org> (take the LTS
version). Then, in VS Code, open this folder and open a terminal
(`Terminal → New Terminal`) and run:

```bash
npm install     # once, downloads the dependencies
npm run dev     # starts the site
```

Then open **<http://localhost:3000>**.

Leave `npm run dev` running while you work. Save any file and the browser updates
by itself. Press `Ctrl + C` in the terminal to stop it.

Other commands:

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with live reload |
| `npm run build` | Production build — run this before deploying |
| `npm start` | Serves the production build locally |
| `npm run typecheck` | Checks every file for type errors |
| `npm run lint` | Checks code style |

---

## The three things to do before this goes live

Everything below lives in **`lib/site.ts`**. Search that file for `TODO`.

### 1. The quote forms don't deliver yet

They validate properly, but with no destination set they fall back to opening
the visitor's email app with the message pre-filled. That works, but you lose
some enquiries on mobile. To receive submissions directly:

1. Sign up at <https://formspree.io> with `alltimesolutions02@gmail.com` (free tier is fine)
2. Create a form and copy the endpoint it gives you
3. In `lib/site.ts`, set:
   ```ts
   formEndpoint: 'https://formspree.io/f/xxxxxxxx',
   ```

Until you do, the browser console logs a warning on every page with a form, so
this can't ship unnoticed.

### 2. The domain

`lib/site.ts` currently says `https://www.alltimesolutions.ca`. Change it to
whatever you actually register. It's used for canonical URLs, the sitemap and
the link previews that show when someone shares the site — search engines need
it to match the real address.

### 3. Business hours and social links

Both are empty and both are safe to leave empty — nothing renders if they're
blank. Fill them in when you have them rather than guessing; wrong hours on a
website cost more than no hours.

---

## What's deliberately missing

There are **no reviews, testimonials, awards, certifications, licence numbers,
years in business, project counts, named clients, or photographs of past work**
anywhere on this site. None of that was supplied, and inventing it is the kind
of thing a customer can catch.

Where a claim like that would normally sit, the copy says something true
instead. The FAQ answer about timelines, for example, explains *why* there's no
number rather than making one up.

Two places are labelled as placeholders on the page itself:

- **Projects** — the before/after comparisons are drawn illustrations, and the
  page says so in plain English. Send real job photos and they replace these
  directly.
- **Sumit's card** — the logo mark stands in for a portrait, and the caption
  says so.

When you have real testimonials and real project photos, add them and the
placeholders come out.

---

## Where things are

```
app/                      One folder per page (Next.js App Router)
  page.tsx                Homepage
  services/[slug]/        A page per service, generated from lib/services.ts
  home-automation/        The dedicated automation page
  layout.tsx              Shared shell: fonts, header, footer, structured data
  globals.css             Brand CSS + the scroll-sequence stage rules
components/
  home/                   The homepage sections
  layout/                 Header, footer, inner-page header
  scene/                  All the hand-drawn artwork, as React components
  ui/                     Buttons, sections, reveals, contact card
hooks/                    Scroll progress, in-view, reduced-motion
lib/
  site.ts                 ← business details. Edit this, not the pages.
  services.ts             ← the 9 services. Add one and it appears everywhere.
  content.ts              Copy used in more than one place
  seo.ts                  Metadata + Google structured data
public/                   The logo, in both colourways
```

**To change a phone number, email, service or piece of shared copy, edit
`lib/`** — never the page files. Adding a service to `lib/services.ts` gives you
its card on the homepage, its row on the services index, its own page, its
sitemap entry and its option in the quote dropdown, with no other edits.

---

## Three judgment calls worth knowing about

**The scroll sequence doesn't hijack your scroll.** The reference component
you sent pins `document.body` and swallows wheel and touch events — its own
comment says there's "no release valve in either direction." That breaks
keyboard scrolling, the scrollbar, find-in-page and screen readers, and on a
slow connection it can trap a visitor with no way out. I rebuilt the same
effect with a sticky element and a scroll-position calculation instead
(`hooks/useScrollProgress.ts`), so the page genuinely scrolls the whole way
through and anyone can scroll straight past it. The room still rebuilds itself
stage by stage, and still comes apart if you scroll back up.

**The artwork is vector, not video or photography.** The room, the hero, the
before/afters, the house, the smart-home scene — all hand-drawn SVG in
`components/scene/`. That means nothing to host, no stock-photo licences, no
loading delay before the hero renders, it's sharp on any screen, and the
transformation can be driven precisely because every part of the room is an
element with an id. The whole homepage is about 129 KB of JavaScript.

**Fonts are bundled, not fetched from Google.** They're real files inside
`node_modules`, compiled into your build and served from your own domain. The
site builds with no internet connection, loads one fewer third party, and sends
nothing about your visitors to Google.

---

## Putting it online

Every page is static, so this will run anywhere.

**Easiest — Vercel** (free for a site this size, made by the Next.js team):

1. Push this folder to a GitHub repository
2. Go to <https://vercel.com>, "Add New → Project", pick the repo
3. Accept the defaults and deploy. Add your domain in Project Settings → Domains.

**Netlify** works the same way.

**Traditional hosting (cPanel, GoDaddy, a plain web server):** uncomment these
two lines in `next.config.mjs`:

```js
output: 'export',
images: { unoptimized: true },
```

then run `npm run build`. You'll get an `out/` folder — upload its contents to
your web root. No Node.js needed on the server.

---

## Accessibility and performance notes

- Every page works with the keyboard, including the before/after slider (it's a
  real range input, so arrow keys move it and screen readers announce it).
- `prefers-reduced-motion` is respected — the camera push, the drifting hero and
  the staggered reveals all stop, and the content shows immediately.
- Colour contrast on the navy and gold combinations was chosen to stay legible;
  the gold is only used on dark grounds or as a solid button with near-black text.
- All 24 routes are pre-rendered to static HTML at build time.

---

## Contact details on the site

Sumit Chopra · 416-317-5661 · alltimesolutions02@gmail.com · Serving the GTA,
Ontario, Canada.

Change them in `lib/site.ts` and they update in the header, footer, every
service page, the contact page and the Google structured data at once.
