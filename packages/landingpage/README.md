# @inovex.de/landingpage

The public landing page for [inovex elements](https://elements.inovex.de), built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Tech

- **[Astro](https://astro.build)** — static site generator, zero JS shipped by default
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first styling via the Vite plugin
- **[@inovex.de/elements](../elements)** — web components consumed directly, no wrappers needed

## Structure

```
src/
├── assets/          # SVGs and brand assets
├── components/      # Astro components (Hero, NavBar, Showcase, …)
├── i18n/            # Translations (en.json, de.json) + useTranslations helper
├── layouts/         # Layout.astro (shared HTML shell)
├── pages/
│   ├── index.astro  # German (default, no prefix)
│   └── en/
│       └── index.astro  # English (/en/)
└── global.css       # Tailwind CSS entry point
```

## Commands

Run from the **repo root**:

| Command | Action |
| :--- | :--- |
| `pnpm start:landingpage` | Start local dev server |
| `pnpm build` | Build all packages including landingpage |

Or run directly from this package:

| Command        | Action |
|:---------------| :--- |
| `pnpm start`   | Start local dev server at `localhost:4321` |
| `pnpm build`   | Build to `./dist/` |
| `pnpm preview` | Preview the production build locally |

## i18n

Two locales are supported: German (`de`, default) and English (`en`).

- German pages live at `/` (no prefix)
- English pages live at `/en/`
- Translations are in `src/i18n/de.json` and `src/i18n/en.json`
- Use `useTranslations(Astro.currentLocale)` in any component to get the typed translation object
