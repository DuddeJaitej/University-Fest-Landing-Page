# University Fest Landing Page

A responsive React + Vite landing page for Presidency University Fest. The site presents event details, artist highlights, schedule information, ticket passes, and embedded media in a polished one-page experience.

## Tech stack

- React 19
- Vite 8
- JavaScript (ESM)
- CSS Modules
- Git for version control

## Why `vite.config.js` exists

The `vite.config.js` file configures Vite for this project. It is used to:

- enable the React plugin (`@vitejs/plugin-react`)
- set a custom base path if the app is deployed under a subpath, such as GitHub Pages
- configure build behavior and static asset handling

If you deploy to GitHub Pages under a repository path like `https://<username>.github.io/University-Fest-Landing-Page/`, the `base` option ensures asset paths resolve correctly.

## Architecture and code flow

### Application flow

1. `src/main.jsx` starts the app and renders `<App />` into the DOM.
2. `src/App.jsx` defines the page layout and imports sections like `Hero`, `About`, `Artists`, `Events`, `Schedule`, `Passes`, `VideoSection`, and `Footer`.
3. Each section is implemented as a React component under `src/components/`.
4. Static content such as artist data, event details, and pass info is stored in `src/data/`.
5. Components load images and media from `public/Assets/`.
6. Styling is encapsulated using CSS modules in each component folder.

### Folder structure

- `src/`
  - `App.jsx` — main app wrapper and page layout
  - `main.jsx` — app entry point for Vite
  - `components/` — reusable UI sections
    - `About/`
    - `Artists/`
    - `Events/`
    - `Footer/`
    - `Hero/`
    - `Intro/`
    - `Navbar/`
    - `Passes/`
    - `Schedule/`
    - `VideoSection/`
  - `data/` — static JSON-like data used by components
  - `hooks/` — custom hooks such as scroll reveal and counter helpers
  - `pages/` — page-level components (e.g. `Home.jsx`)
  - `styles/` — global and variable styles
- `public/` — static public files available at runtime
  - `Assets/` — images, icons, and video files
- `package.json` — project scripts and dependencies
- `vite.config.js` — Vite configuration file
- `.gitignore` — files excluded from version control

### Component flow

- `Navbar` handles navigation links and page anchors.
- `Hero` shows the festival headline and call-to-action buttons.
- `About` explains the festival and event theme.
- `Artists` displays a gallery of performers using data from `src/data/artists.js`.
- `Events` lists festival events.
- `Schedule` shows the event timeline.
- `Passes` shows ticket options and a modal placeholder for payment.
- `VideoSection` embeds YouTube videos and handles sound toggling.
- `Footer` contains branding and external links.

## Project overview

This repository is organized as a simple React single-page application built with Vite.

```
University-Fest-Landing-Page/
├─ public/
│  ├─ Assets/
│  │  ├─ hero-Image.jpg
│  │  ├─ video.mp4
│  │  ├─ favicon.svg
│  │  └─ ...media files
├─ src/
│  ├─ components/
│  │  ├─ About/
│  │  ├─ Artists/
│  │  ├─ Events/
│  │  ├─ Footer/
│  │  ├─ Hero/
│  │  ├─ Intro/
│  │  ├─ Navbar/
│  │  ├─ Passes/
│  │  ├─ Schedule/
│  │  └─ VideoSection/
│  ├─ data/
│  ├─ hooks/
│  ├─ pages/
│  ├─ styles/
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
├─ vite.config.js
├─ README.md
└─ .gitignore
```

This layout keeps the app entry, page layout, and reusable UI sections separate. Static data is kept under `src/data/`, shared styles are in `src/styles/`, and all public assets are served from `public/`.

## Prerequisites

- Node.js 18 or later
- npm (included with Node.js)
- Git

## Installation

```bash
# clone your repository
git clone <repository-url>
cd University-Fest-Landing-Page
npm install
```

Replace `<repository-url>` with the actual GitHub URL for your project.

## Running locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

## Build for production

```bash
npm run build
```

This creates the production output in `dist/`.

## Preview production build

```bash
npm run preview
```

## Deployment

### GitHub Pages deployment

If you deploy under a repo path like `/University-Fest-Landing-Page/`, set the base path in `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/University-Fest-Landing-Page/',
  plugins: [react()],
})
```

Then build again:

```bash
npm run build
```

### Custom domain deployment

If your app is served from a root domain or custom domain, you can leave `base` unset.

## Common issues and fixes

### `npm install` fails

- Ensure Node.js 18+ is installed.
- Delete `node_modules/` and run `npm install` again.
- If a package install error appears, check the full terminal message.

### `npm run dev` fails

- Confirm you are in the project root folder.
- Run `npm install` first.
- Make sure `package.json` and `vite.config.js` exist.

### `npm run build` fails

- Check imported file paths and asset paths.
- Verify the `src/` and `public/Assets/` file names exactly match the code.
- Use lowercase file names if your deployment environment is case-sensitive.

### Git branch conflicts

If remote branch changes exist:

```bash
git fetch origin
git pull --rebase origin main
git push -u origin main
```

Resolve merge conflicts manually and continue the rebase.

### Asset 404s after deployment

- If deployed on GitHub Pages, set `base: '/University-Fest-Landing-Page/'`.
- Rebuild with `npm run build` after changing `vite.config.js`.

## Useful npm scripts

- `npm run dev` — start development server
- `npm run build` — build production files
- `npm run preview` — preview the built app
- `npm run lint` — run Oxlint

## Notes

- Keep static assets in `public/Assets/`.
- Use root-relative asset paths carefully if you deploy under a subpath.
- Do not commit `.env` files unless they are intended to be shared.

