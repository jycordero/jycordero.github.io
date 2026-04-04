# jycordero.github.io

Personal web CV for Joseph Y. Cordero Mercado — Data Engineer / Data Architect.
Live at **[jycordero.github.io](https://jycordero.github.io)**.

Built with Vite + React + Tailwind CSS, deployed automatically to GitHub Pages via GitHub Actions.

## Updating content

All CV content lives in `src/data/`. Edit the relevant file and push — the site redeploys automatically.

| File | Section |
|---|---|
| `src/data/profile.js` | Name, title, contact, skills, about blurb |
| `src/data/experience.js` | Professional experience |
| `src/data/education.js` | Degrees |
| `src/data/projects.js` | Projects |
| `src/data/jobs.js` | Other jobs |
| `src/data/leadership.js` | Leadership roles |
| `src/data/awards.js` | Awards |
| `src/data/interests.js` | Interests |

Static assets (profile photo, PDF resume) go in `images/`.

## Local development

```bash
npm install
npm run dev
```

## Deployment

Pushes to `master` trigger a GitHub Actions build and deploy.
One-time setup: **Settings → Pages → Source → GitHub Actions**.
