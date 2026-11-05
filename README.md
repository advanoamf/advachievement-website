# סיכת סניף — advachievement.com

Static website for **סיכת סניף** (custom lapel pins for branches, tribes, youth movements and community groups).
Replaces the old Wix site. Plain HTML/CSS/JS, so there's no build step and no subscription.

## Structure
| Path | What |
|---|---|
| `index.html` | Home: hero, tribe pins, shop (WhatsApp ordering), gallery, how it works, price list + calculator, FAQ, contact |
| `game/` | "מצא את הסניף" pin memory game |
| `takanon/` | Contest/giveaway rules (Hebrew + English) |
| `assets/js/data.js` | **Edit here:** prices, products, gallery images, WhatsApp number |
| `assets/img/` | Optimized images (WebP) taken from the old Wix site |
| `scarves/`, `sale/`, `צור-קשר/` … | Redirects from the old Wix URLs so existing links keep working |

## Run locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Hosting (Netlify)
The site is hosted on Netlify (project `advachievement-website`, free plan), which deploys automatically from the `main` branch. There's no build step; it publishes the repo root.

- Primary domain: `www.advachievement.com`; `advachievement.com` redirects to it. HTTPS is a Let's Encrypt certificate that Netlify renews.
- DNS is at Squarespace Domains: `@` **A** `75.2.60.5` and `www` **CNAME** `advachievement-website.netlify.app`.
- The other DNS records (Google Workspace email, `app`, `zaka`) belong to other services.
- The free plan adds a "Powered by Netlify" badge in the bottom-right corner, so the WhatsApp button sits above it.

## Instagram / Facebook links
Visitors who arrive through these links get "(הגעתי דרך אינסטגרם/פייסבוק)" added to their WhatsApp order message, so you can see where each order came from.

| Use | Link |
|---|---|
| Instagram bio | `https://www.advachievement.com/ig/` |
| Facebook page button / posts | `https://www.advachievement.com/fb/` |
| Story/post about one pin | `https://www.advachievement.com/ig/#pin-kaveh` · `#pin-reim` · `#pin-shrulik` (use `/fb/` for Facebook) |

Pin ids are the `id` fields in `assets/js/data.js`. To show the Facebook button on the site, set `social.facebook` there.
