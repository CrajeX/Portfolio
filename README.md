# Craje — Portfolio

A brutalist developer portfolio built with React + Vite + Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173).

## Project structure

```
src/
├── main.jsx                 # Entry point
├── App.jsx                  # Composes all sections in order
├── data/
│   └── portfolioData.js     # ALL content lives here — edit this first
├── components/
│   ├── Hero.jsx
│   ├── Manifesto.jsx
│   ├── Stack.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── HazardDivider.jsx
│   └── ui/
│       ├── Stamp.jsx        # the recurring "inspection stamp" signature
│       └── SectionLabel.jsx
└── styles/
    ├── variables.css        # design tokens (colors, type, spacing)
    └── *.module.css         # one CSS module per component
```

## Editing content

Open `src/data/portfolioData.js`. Everything visible on the site — your name,
projects, stack, experience, contact info — is exported from this one file.
Search it for `// TODO` comments; those mark spots that need your real details
(email, social links, resume path, and a few project specifics).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages,
or any static host.
