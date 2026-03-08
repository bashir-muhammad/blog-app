# Studio Seed Content

This folder contains import-ready content for the blog app.

## File

- `monorepo-content.ndjson` — sample content focused on this monorepo, including:
  - `siteSettings`, `menu`, `homePage`, `detailsPage`
  - 2 `landingPage` documents
  - 1 `author`, 3 `category`, 2 `tag`, 3 `post` documents
  - all section modules used in `homePage.sections`:
    - `richText`
    - `features`
    - `imageFeatures`
    - `imageTeaser`
    - `teaserList`
    - `accordion`
    - `heroTeaser`
    - `blogList`

## Import command

Run from `apps/studio`:

```bash
pnpm exec sanity dataset import ./content/monorepo-content.ndjson blog --replace
```

Use your dataset name (for example `development`).

## Notes

- The content is designed to render without requiring local code changes.
- Image-heavy modules are included, but image assets are intentionally not embedded in the seed file. Add images in Studio after import for full visual polish.
- If you do not want to replace an existing dataset, remove `--replace` and import into a fresh dataset instead.
