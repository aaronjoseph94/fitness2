# Pretty N Fit Coaching

Marketing site for Jaycelyn Zimmer, personal trainer and nutrition coach in Central Alberta.
React + Vite, static build. Deploys to Cloudflare Pages or Netlify.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

Everything editable is in [`src/data.js`](src/data.js): copy, prices, plans, FAQ, email, socials.

**Photos.** Create `public/images/` and drop images in with these names. Until a file exists, a placeholder shows.

| File | Where it shows |
| --- | --- |
| `jaycelyn-hero.jpg` | Hero, big arch photo (portrait, ~4:5) |
| `jaycelyn-back.jpg` | Hero, small square photo overlapping the arch |
| `jaycelyn-about.jpg` | Meet your coach section (portrait, ~4:5) |
| `og.jpg` | Link preview on social (1200×630) |

**Taking payments.** Each plan in `data.js` has a `checkoutUrl`. Paste a Stripe Payment Link (or any checkout URL) and the plan's button goes straight to checkout. Leave it empty and the button opens the inquiry form with that plan pre-selected.

**Inquiry form.** The form composes an email to `prettynfitcoaching@hotmail.com` in the visitor's mail app, including the commitment the visitor picked (month to month, 3, 6 or 12 months). No backend.

**Testimonials.** Add real client quotes to `testimonials` in `data.js`. The section stays hidden while the list is empty.

## Nutrition photos

The nutrition section uses four Unsplash photos (Unsplash License, free for commercial use) in `public/images/`:

| File | Photographer |
| --- | --- |
| `food-flatlay.jpg` | @kate5oh3 |
| `food-prep.jpg` | @ellaolsson |
| `food-basket.jpg` | @jankraus |
| `nutrition.jpg` | @jasonjarr |

## Deploy

**Cloudflare Pages:** Workers & Pages → Create → Pages → Connect to Git. Framework preset **Vite**, build command `npm run build`, output directory `dist`. Set the `NODE_VERSION` environment variable to `22`.

**Netlify:** `netlify.toml` already sets the build command, output folder and Node 22 (Vite 8 needs Node 20.19+).
