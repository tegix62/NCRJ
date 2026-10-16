# rj-site

Prototype site built with [Astro](https://astro.build). Separate from the RDC site.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| What | Where |
|---|---|
| Colors, fonts, spacing (brand tokens) | `src/styles/global.css` (`:root`) |
| Site name, tagline, nav, categories | `src/site.ts` |
| Articles | `src/content/posts/*.md` |
| Contributors | `src/content/authors/*.md` |
| Page templates | `src/pages/` |

To add an article, copy a file in `src/content/posts/`, change the frontmatter, and write the body in Markdown.

## Built to port to Ghost

The structure mirrors a Ghost theme so the design can move over if needed. Keep it portable: plain `.astro` components and plain CSS, no React/Vue islands.

| Astro | Ghost theme |
|---|---|
| `layouts/Default.astro` | `default.hbs` |
| `pages/index.astro` | `home.hbs` |
| `pages/blog/index.astro` | `index.hbs` |
| `pages/blog/[slug].astro` | `post.hbs` |
| `pages/category/[tag].astro` | `tag.hbs` |
| `pages/author/[slug].astro` | `author.hbs` |
| `pages/about.astro` etc. | `page.hbs` / `page-<slug>.hbs` |
| `components/*.astro` | `partials/*.hbs` |
| `styles/global.css` | `assets/css/screen.css` (as-is) |
| post `tags` | Ghost tags |
