# Free Halloween Tools

Free Halloween website tools from Titan Business Pros LLC. The homepage is [`index.html`](index.html), and each product is a separate HTML page that works from the same repository.

## Tools

1. [Classic Halloween Website Maker](website-maker.html) — build a decorated Halloween events website with icons, photos, colors, and sounds.
2. [Simple Halloween Website Maker](simple-halloween-website-maker.html) — build a clean event page with three aligned photo uploads and a choice of sounds.
3. [Halloween Catering Generator](halloween-catering-generator.html) — create a Halloween catering order form.
4. [Halloween Coupon Generator](halloween-coupon-generator.html) — create Halloween coupons.
5. [Halloween QR Code Generator](halloween-qr-code-generator.html) — make scannable, themed QR codes for website addresses or text.
6. [Horror Film Trivia Website Maker](horror-film-trivia-website-maker.html) — make a trivia page with a company name and uploaded logo; exports a standalone `index.html`.
7. [Halloween Flyer Builder](halloween-flyer-builder.html) — design a flyer and export a landscape PNG at 3300 × 2550 pixels with 300-DPI print metadata (11 × 8.5 inches).
8. [Haunted House Waiver Generator](haunted-house-waiver-generator.html) — customize a haunted attraction's name, rules, and theme, then download a waiver PNG.
9. [Spooky Flyer Builder](spooky-flyer-builder.html) — choose from 12 templates, customize and position flyer text, and download the design as a PNG.

Both website makers are free forever. To publish an exported `index.html` as a live website, add it to a GitHub repository and enable GitHub Pages. [Watch the GitHub publishing tutorial](https://www.youtube.com/watch?v=k_zVscN_gDY). A custom website and domain setup is available for $25, with no monthly or hosting fees; call or text 405-998-7979 or email titanbusinesspros@gmail.com.

## Game

[Halloween Math Battle](halloween-math-battle.html) is embedded in `index.html` above the footer on desktop screens only. It is not loaded on mobile. On desktop it starts when loaded and gives each player 15 seconds to choose an answer.

## Shared images

- `images/Top image.png` is the homepage banner and is used in builders where specified.
- `images/favicon.png` is the shared site favicon.
- The main site is installable as a PWA using `site.webmanifest` and `service-worker.js`. Installed copies show an update button when a new service worker is ready; bump the `CACHE_NAME` in `service-worker.js` with each site release so installed apps can detect it.
- `images/Click to download.png` is the install button artwork. The remaining `images/web-app-manifest-*` files and Apple touch icon provide the app icons.

## Publish with GitHub Pages

The site is static HTML. In the repository settings, choose **Pages**, set publishing to the `main` branch and `/(root)`, and save. The repository must be public to use GitHub Pages on GitHub Free. Product links on `index.html` are relative, so keep each linked HTML file in the repository root.
