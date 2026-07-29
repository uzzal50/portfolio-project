# Uzzwal Maharjan — Portfolio

A simple one-page React + Tailwind CSS portfolio built from your CV.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere (Vercel, Netlify, GitHub Pages, your own host at uzzwalmaharjan.com.np, etc).

## Structure

```
├── index.html          # Vite entry HTML
├── src/
│   ├── main.jsx        # React root
│   ├── App.jsx         # Your portfolio page (edit content here)
│   └── index.css       # Tailwind directives
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Editing content

All your info (experience, projects, skills) lives in plain arrays at the top of `src/App.jsx` — edit those directly to update the site.
