# AGENTS.md

## Purpose

This repository is Joseph Y. Cordero Mercado's personal web CV, hosted at `jycordero.github.io`. Its goal is to present a professional online resume targeting Data Engineering and Data Architecture roles.

The CV content has been refreshed using `Joseph_Cordero_Resume_2026.pdf`. When making updates, preserve that role focus and avoid reintroducing outdated Physics PhD positioning unless the user explicitly asks for it.

---

## Architecture

The site is a Vite + React static site styled with Tailwind CSS. It is source-controlled with Git and deployed through GitHub Actions to GitHub Pages.

### Source layout

```text
index.html                    # HTML shell, mounts React root
src/
  main.jsx                    # React entry point
  index.css                   # Tailwind directives (@tailwind base/components/utilities)
  App.jsx                     # Root component; controls section order and visibility
  data/                       # All CV content lives here
    profile.js                # Name, title, email, social links, about text, skills
    experience.js             # Main professional experience
    jobs.js                   # Additional job entries
    education.js              # Degrees and institutions
    projects.js               # Personal and side projects
    leadership.js             # Leadership and volunteer roles
    awards.js                 # Awards and fellowships
    interests.js              # Interests / personal details
  components/
    Header.jsx                # Name, title, social icons, contact info
    About.jsx                 # Profile image, summary, skills
    Education.jsx             # Uses TopCard
    Experience.jsx            # Uses LeftCard
    Projects.jsx              # Uses LeftCard
    Jobs.jsx                  # Uses LeftCard
    Leadership.jsx            # Uses TopCard
    Awards.jsx                # Uses TopCard
    Interests.jsx             # Nested bullet list
    Footer.jsx                # Name, email, references line
    shared/
      SectionTitle.jsx        # Section heading style
      LeftCard.jsx            # 25/75 two-column card
      TopCard.jsx             # Centered header with full-width bullets
.github/
  workflows/
    deploy.yml                # Build on push to master and deploy to GitHub Pages
images/                       # Static assets served by Vite
  profile.jpg                 # Profile picture
  favicon.ico                 # Browser tab icon
  Resume.pdf                  # Downloadable PDF resume; keep in sync manually
```

### Layout card types

| Card | Used by | Layout |
|---|---|---|
| `LeftCard` | Experience, Jobs, Projects | Label column on the left, bullets on the right |
| `TopCard` | Education, Leadership, Awards | Centered header with full-width bullets below |

### Rendering pipeline

`App.jsx` composes the section components in order. To hide a section, remove or comment out that component in `src/App.jsx`. Each section component should return `null` when its data array is empty.

---

## Canonical Content Sources

All CV data is static and manually maintained. Agents should treat `src/data/` as the source of truth for on-page resume content.

- `src/data/profile.js`: personal details, headline, links, summary, skills
- `src/data/experience.js`, `src/data/jobs.js`, `src/data/projects.js`: timeline-style entries with bullets
- `src/data/education.js`, `src/data/leadership.js`, `src/data/awards.js`: centered-card entries with bullets
- `src/data/interests.js`: categorized interests
- `images/Resume.pdf`: downloadable PDF resume that must be updated separately when requested

Primary factual reference for resume content: `Joseph_Cordero_Resume_2026.pdf`.

---

## Agent Guidance

- Prefer content edits in `src/data/` unless the user asks for layout or styling changes.
- Preserve the existing component structure unless a structural change is necessary.
- Keep section ordering changes isolated to `src/App.jsx`.
- Maintain concise, professional resume language oriented toward data engineering and data architecture roles.
- Do not assume the PDF resume updates automatically; `images/Resume.pdf` must be replaced manually if needed.
- If a section is meant to disappear, prefer emptying its data or removing it from `src/App.jsx` rather than leaving broken placeholders.
- Avoid introducing external data sources, APIs, or a CMS unless the user explicitly requests an architectural change.

---

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

Default local dev server: `http://localhost:5173`

---

## Deployment

Deployment is automated by `.github/workflows/deploy.yml`.

- Trigger: every push to `master`
- Build step: `npm ci && npm run build`
- Publish target: `dist/` via GitHub Pages

One-time GitHub configuration requirement:

1. Open repository Settings > Pages
2. Set Source to `GitHub Actions`
