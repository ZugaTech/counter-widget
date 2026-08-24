# Counter Widget

A clean, accessible, and responsive counter widget built with plain HTML, CSS, and JavaScript — no frameworks, no build tools.

**Author:** Moyosore Ogunde

## Live Demo

Hosted on Vercel: [Deployment URL will be added after deploy]

## Features

- **Increment / Decrement / Reset** counter controls
- **Centered, responsive layout** with a polished card UI
- **Accessibility best practices**:
  - Semantic HTML (`<main>`, `<footer>`, `<button>`)
  - ARIA labels and live regions for screen readers
  - Keyboard navigation support (Enter / Space)
  - Focus-visible styles
  - Reduced-motion and high-contrast media query support
- **Security best practices**:
  - Content Security Policy (CSP) headers
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy` and `Permissions-Policy`
- **Performance**:
  - Static assets cached for one year (CSS/JS)
  - HTML set to no-cache for freshness
  - Deferred script loading

## Project Structure

```
.
├── index.html      # Main markup
├── style.css       # Styles and responsive design
├── script.js       # Counter logic and event handling
├── vercel.json     # Vercel deployment config (headers, caching)
└── README.md       # This file
```

## How to Run Locally

1. Clone or download the project.
2. Open `index.html` in any modern web browser.
3. No build step or server is required.

## How to Deploy to Vercel

```bash
# If Vercel CLI is already installed and logged in
vercel --yes
```

## Design Notes

- The counter deliberately allows negative values to keep the logic simple and predictable.
- All styles are applied via an external stylesheet; no inline styles are used.
- JavaScript is vanilla ES6+ with defensive element checking and descriptive JSDoc comments.

## License

MIT License — free to use and modify.
