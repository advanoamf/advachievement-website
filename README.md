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
| `CNAME` | Custom domain for GitHub Pages (`www.advachievement.com`) |

## Run locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Publish (GitHub Pages)
1. Repo → Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
2. At your domain's DNS provider:
   - `www` → **CNAME** → `advanoamf.github.io`
   - apex `advachievement.com` → **A** records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Back in Settings → Pages, tick **Enforce HTTPS** once the certificate is issued.

> GitHub Pages on a free account requires the repository to be **public**.
