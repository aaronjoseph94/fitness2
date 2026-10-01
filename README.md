# Pretty N Fit Coaching

Marketing site for Jaycelyn Zimmer, personal trainer and nutrition coach in Central Alberta.
React + Vite, static build, hosted on Cloudflare Pages.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

Everything editable is in [`src/data.js`](src/data.js): copy, prices, plans, FAQ, email, socials, nutrition steps, gallery captions.

**Jaycelyn's photo.** Drop `jaycelyn-about.jpg` (portrait, about 4:5) into `public/images/`. The "Your coach" section shows a placeholder until it exists.

**Before / after.** Drop `before.jpg` and `after.jpg` into `public/images/` (same framing and lighting work best, 4:3 or taller). The "Results" section shows a drag-to-compare slider once both files exist, and placeholders until then. Only use a real client's photos with their written permission, and set `transformation.caption` in `data.js` (for example "Complete Coaching, 6 months · shared with permission").

**Taking payments.** Each plan in `data.js` has a `checkoutUrl`. Paste a Stripe Payment Link (or any checkout URL) and the plan's button goes straight to checkout. Leave it empty and the button opens the inquiry form with that plan pre-selected.

**Inquiry form.** The form composes an email to `prettynfitcoaching@hotmail.com` in the visitor's mail app. No backend. To store submissions instead, point the form at a Cloudflare Pages Function or a form service.

**Testimonials.** Add real client quotes to `testimonials` in `data.js`. The section stays hidden while the list is empty.

## Photography

Stock photos are from Unsplash under the [Unsplash License](https://unsplash.com/license) (free for commercial use, no attribution required, credit appreciated).

| File | Photographer | Source |
| --- | --- | --- |
| `hero.jpg` | @sxoxm | https://unsplash.com/photos/1574680096145-d05b474e2155 |
| `narrative.jpg` | @weareambitious | https://unsplash.com/photos/1706029831387-fd8bc3d27d01 |
| `strength.jpg` | @victorfreitas | https://unsplash.com/photos/1556817411-31ae72fa3ea0 |
| `coach.jpg` | @jonathanborba | https://unsplash.com/photos/1571019614242-c5c5dee9f50b |
| `nutrition.jpg` | @jasonjarr | https://unsplash.com/photos/1575672401755-05f5ce45138f |
| `grip.jpg` | @hamza01nsr | https://unsplash.com/photos/1683889842940-ed1e5233e291 |
| `cta.jpg` | @hg_photo | https://unsplash.com/photos/1544955752-78051eb9b0b8 |
| `gym-1.jpg` | @aloragriffiths | https://unsplash.com/photos/1534367610401-9f5ed68180aa |
| `gym-2.jpg` | @johnarano | https://unsplash.com/photos/1541534741688-6078c6bfb5c5 |
| `gym-3.jpg` | @victorfreitas | https://unsplash.com/photos/1521804906057-1df8fdb718b7 |
| `gym-4.jpg` | @brandoncmorales | https://unsplash.com/photos/1613686955273-4ac02632ae12 |
| `gym-5.jpg` | @shanalirajpoot | https://unsplash.com/photos/1744551472900-d23f4997e1cd |
| `gym-6.jpg` | @silverkblack | https://unsplash.com/photos/1758875570600-8daf8d2f05f3 |
| `food-flatlay.jpg` | @kate5oh3 | https://unsplash.com/photos/1466637574441-749b8f19452f |
| `food-prep.jpg` | @ellaolsson | https://unsplash.com/photos/1543352632-5a4b24e4d2a6 |
| `food-basket.jpg` | @jankraus | https://unsplash.com/photos/1690934164598-99267828e900 |

To swap a photo, replace the file in `public/images/` and keep the name, or change the path in `images` in `data.js`.

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub or GitLab repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Add a custom domain under the project's Custom domains tab.

Or deploy from your machine without Git:

```bash
npm run build
npx wrangler pages deploy dist --project-name pretty-n-fit
```
