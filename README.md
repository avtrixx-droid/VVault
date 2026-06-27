# VVault — Marketing Website

A self-contained static website for **VVault** (vvault.in). No build step, no framework — just HTML, CSS and a little JS.

## Files
| File | Purpose |
|---|---|
| `index.html` | Single-page landing (hero, how-it-works, features, USP, security, download, FAQ, footer) |
| `styles.css` | Emerald-Noir theme, all styling, responsive |
| `app.js` | Navbar, mobile menu, scroll reveals, FAQ, QR generation |
| `privacy.html` / `terms.html` | Legal pages |
| `favicon.svg` | VVault medallion favicon |
| `robots.txt` / `sitemap.xml` | SEO |

## Run locally
Just open `index.html` in a browser, or serve the folder:

```bash
cd website
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy (free options)
Drop the `website/` folder onto any static host:
- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder, or point it at this repo (publish directory = `website`).
- **GitHub Pages** — push and set Pages source to `/website`.

Then point your **vvault.in** domain (GoDaddy) at the host's DNS.

## Things to update before launch
1. **App Store link** — iOS shows "Coming Soon". Once published, replace the `#` href and the iOS QR `data-url` in `index.html` (look for `qr-ios`) with the real App Store URL.
2. **Play Store link** — currently `https://play.google.com/store/apps/details?id=in.vvault.app`. This is the correct package id; the link goes live when the listing is published.
3. **OG image** — add a real `og-image.png` (1200×630) and reference it with `<meta property="og:image">` for nicer social previews.
4. **Screenshots** — the phone mockup is CSS/SVG. Swap in real app screenshots if you prefer.

## Brand tokens (kept in sync with the app)
- Emerald `#059669` · Emerald glow `#34D399` · Gold `#A87B22` / `#E6C56A`
- Background "Emerald Noir" `#070D0A` · Surface `#0E1814`
- Font: Plus Jakarta Sans
