# Ephraim_Portfolio — Static Portfolio Scaffold

This repository contains a small static portfolio site built with semantic HTML5 and modular CSS. It includes four pages: Home, Projects, About/Resume, and Contact.

Files added:
- `index.html` — Home / hero / selected projects
- `projects.html` — Projects listing
- `about.html` — About / education / skills and resume download link
- `contact.html` — Contact form (mailto fallback)
- `css/styles.css` — Modular styles and responsive layout
- `assets/` — placeholder for images and resume (see `assets/README.md`)

How to view locally

Open the `index.html` file in your browser. For a local static server (recommended):

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deployment

- GitHub Pages: push this repo to GitHub and enable Pages from the `main` branch (root).
- Vercel / Netlify: connect the repo and deploy as a static site.

Next steps (suggested):
- Replace placeholder images in `assets/` with your real profile photo and project screenshots.
- Add `resume.pdf` in `assets/` if you want the resume download to work.
- Update project cards with real descriptions and links to repos or demos.
- Optional: add small JavaScript for a mobile menu if desired.

Tests & validation

This scaffold includes a tiny Node validator that checks for common issues (missing assets referenced from `assets/`, missing `alt` attributes on images, and presence of `id="main"` for skip links). To run it:

```bash
# install node if you don't have it (optional)
# run tests
node scripts/validate.js
```

You can also run a quick local server and view the site:

```bash
npm run start
```

Continuous deployment (GitHub Pages)

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`. When you push to the `main` branch the action will upload the repository contents and deploy the Pages site for this repository (no build step required for static files). After pushing, enable GitHub Pages in the repository settings if necessary.

