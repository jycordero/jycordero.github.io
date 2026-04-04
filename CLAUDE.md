# CLAUDE.md

## Purpose

This is Joseph Y. Cordero Mercado's personal web CV, hosted at `jycordero.github.io`. Its goal is to present a professional online resume targeting **Data Engineering and Data Architecture** roles. The CV content is currently outdated — it still reflects a Physics PhD research background and has not been updated to reflect current professional experience, skills, or role focus.

---

## Architecture

The site is a **Vite + React** static site styled with **Tailwind CSS**. It is source-controlled via Git and deployed through **GitHub Actions → GitHub Pages**.

### Source layout

```
index.html                    # HTML shell, mounts React root
src/
  main.jsx                    # React entry point
  index.css                   # Tailwind directives (@tailwind base/components/utilities)
  App.jsx                     # Root component — controls section order and visibility
  data/                       # ← ALL CV CONTENT LIVES HERE (edit these to update the CV)
    profile.js                # Name, title, email, social links, about text, skills
    experience.js             # Research / professional experience
    jobs.js                   # Other job entries (teaching, etc.)
    education.js              # Degrees and institutions
    projects.js               # Personal / side projects
    leadership.js             # Leadership and volunteer roles
    awards.js                 # Awards and fellowships
    interests.js              # Interests / "a little more about me"
  components/
    Header.jsx                # Dark header: name, title, social icons, contact info
    About.jsx                 # Profile image + about blurb + skill tags
    Education.jsx             # Uses TopCard
    Experience.jsx            # Uses LeftCard
    Projects.jsx              # Uses LeftCard
    Jobs.jsx                  # Uses LeftCard
    Leadership.jsx            # Uses TopCard
    Awards.jsx                # Uses TopCard
    Interests.jsx             # Nested bullet list
    Footer.jsx                # Name, email, references line
    shared/
      SectionTitle.jsx        # Consistent section heading style
      LeftCard.jsx            # 25/75 two-column card (label left, bullets right)
      TopCard.jsx             # Centered header + full-width bullets
.github/
  workflows/
    deploy.yml                # Build on push to master → deploy to GitHub Pages
images/                       # Served as static assets by Vite
    profile.jpg               # Profile picture
    favicon.ico               # Browser tab icon
    Resume.pdf                # Downloadable PDF resume (keep in sync manually)
```

### Layout card types

| Card | Used by | Layout |
|---|---|---|
| `LeftCard` | Experience, Jobs, Projects | Label column (~25%) left, bullets (~75%) right |
| `TopCard` | Education, Leadership, Awards | Centered header, full-width bullets below |

### Rendering pipeline

`App.jsx` composes all section components in order. To hide a section, comment it out in `App.jsx`. Each section component returns `null` automatically if its data array is empty.

---

## Data sources

All content is **static and manually maintained** — no CMS, database, or external API. To update the CV, edit the files in `src/data/`:

- **`profile.js`** — personal info, social links, about blurb, skills
- **`experience.js`**, **`jobs.js`**, **`projects.js`** — arrays of `{ company/name, jobTitle, dates, bullets[] }`
- **`education.js`**, **`leadership.js`**, **`awards.js`** — arrays of `{ name, qualification, dates, bullets[] }`
- **`interests.js`** — array of `{ category, items[] }`
- **`images/Resume.pdf`** — downloadable PDF (must be kept in sync manually)

---

## Content status

CV content is current as of April 2026, sourced from `Joseph_Cordero_Resume_2026.pdf`.

---

## Development

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Deployment

Deployments are fully automated via `.github/workflows/deploy.yml`:
- Triggers on every push to `master`
- Runs `npm ci && npm run build`
- Deploys `dist/` to GitHub Pages using the official `actions/deploy-pages` action

**One-time GitHub setup required:**
1. Go to repo **Settings → Pages**
2. Set Source to **"GitHub Actions"** (not "Deploy from a branch")

