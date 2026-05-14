# Yashvir Pal — Portfolio

A Node.js + Express portfolio website inspired by [brittanychiang.com](https://brittanychiang.com).

## Tech Stack

- **Runtime** — Node.js (v18+)
- **Framework** — Express 4
- **Templating** — Handlebars (express-handlebars)
- **Styling** — Vanilla CSS with CSS custom properties
- **Security** — Helmet, Compression

## Project Structure

```
yashvirpal-portfolio/
├── src/
│   ├── app.js                  # Express entry point
│   ├── routes/
│   │   └── index.js            # Page routes
│   ├── data/
│   │   └── portfolio.js        # ← Edit your content here
│   ├── views/
│   │   ├── layouts/
│   │   │   └── main.hbs        # HTML shell / layout
│   │   ├── partials/
│   │   │   ├── sidebar.hbs     # Left sticky panel
│   │   │   └── icons/          # SVG icon partials
│   │   ├── home.hbs
│   │   ├── resume.hbs
│   │   ├── projects.hbs
│   │   ├── contact.hbs
│   │   └── 404.hbs
│   └── public/
│       ├── css/main.css
│       ├── js/main.js
│       └── assets/             # Put your CV PDF here
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server (with auto-reload)
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Updating Content

All portfolio content lives in **one file**:

```
src/data/portfolio.js
```

Edit your name, experience, projects, skills etc. there — changes reflect instantly (with `nodemon`).

## Adding Your CV

Place your PDF at:
```
src/public/assets/yashvirpal_developer.pdf
```

## Deployment

### Render / Railway / Fly.io
Push to GitHub, connect repo, set build command `npm install` and start command `npm start`.

### Environment Variables
| Variable | Default | Description |
|----------|---------|-------------|
| `PORT`   | `3000`  | Server port |

## Pages

| Route | View |
|-------|------|
| `/` | Home (About + Experience + Skills + Projects) |
| `/resume` | Full résumé with education |
| `/projects` | All projects |
| `/contact` | Contact info & email CTA |
