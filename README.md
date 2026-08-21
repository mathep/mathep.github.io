# mathep.github.io

My personal portfolio — projects, what I work in, and how to reach me.

Built with React (Create React App) and deployed to GitHub Pages.

## Running it locally

```bash
npm install --legacy-peer-deps
npm start      # http://localhost:3000
npm run build  # production build into build/
```

## Where things live

| What | Where |
|---|---|
| All content — name, links, skills, projects | `src/portfolio.js` |
| Colours, fonts, type scale | `src/_globalColor.scss` |
| Skill icons (regenerate with `npm run icons`) | `src/iconData.js` |
| Fonts | `src/assets/fonts/` |
| Images | `src/assets/images/` |

Everything on the page is driven from `src/portfolio.js`. Sections with
`display: false` are hidden entirely, and empty blocks render nothing rather
than leaving gaps.

## Skill icons

Icons come from [Iconify](https://icon-sets.iconify.design). Add a name to
`softwareSkills` in `src/portfolio.js`, then:

```bash
npm run icons
```

That inlines the icon data into `src/iconData.js`, so icons render from the
bundle with no network request. It fails loudly on an unknown icon name
instead of silently rendering a blank.

## Deploying

Pushing to `main` builds and publishes via GitHub Actions.
One-time setup: **Settings → Pages → Source → GitHub Actions**.

## License and credit

Licensed under **GPL-3.0** — see [LICENSE](LICENSE).

This site is built on [developerFolio](https://github.com/saadpasta/developerFolio)
by Saad Pasta, which is GPL-3.0. That license is copyleft, so this repository
stays GPL-3.0 and keeps the credit in the site footer.
