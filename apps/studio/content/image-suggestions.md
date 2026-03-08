# Image Suggestions for Monorepo Seed Content

This guide maps image slots in [monorepo-content.ndjson](./monorepo-content.ndjson) to suggested visuals and source links.

## Recommended style

- Clean, modern, editorial tech photography
- Neutral or cool tones to match a developer brand
- Real people, laptops, whiteboards, collaborative spaces
- Avoid cliché “green code rain” visuals

## Sources (free stock)

- Unsplash: https://unsplash.com
- Pexels: https://www.pexels.com
- Pixabay: https://pixabay.com

## Per-content image map

| Target                                       | Field              | Suggested visual                                                        | Search links                                                                                 |
| -------------------------------------------- | ------------------ | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `siteSettings`                               | `logo`             | Minimal geometric logo or monogram mark on transparent/solid background | https://www.freepik.com/search?format=search&query=minimal%20tech%20logo                     |
| `author.muhammad-bashir`                     | `image`            | Professional developer portrait (waist-up, neutral background)          | https://unsplash.com/s/photos/developer-portrait                                             |
| `homePage.heros[0]`                          | `image`            | Team collaborating around code architecture board                       | https://unsplash.com/s/photos/software-team ; https://www.pexels.com/search/software%20team/ |
| `homePage.sections[imageFeatures].images[0]` | `images`           | Clean desk + laptop + design notes                                      | https://unsplash.com/s/photos/developer-workspace                                            |
| `homePage.sections[imageFeatures].images[1]` | `images`           | Over-the-shoulder coding close-up                                       | https://unsplash.com/s/photos/coding-laptop                                                  |
| `homePage.sections[imageTeaser]`             | `image`            | Architecture diagram on screen / system design sketch                   | https://unsplash.com/s/photos/system-design                                                  |
| `homePage.sections[teaserList].items[0]`     | `image` (optional) | Blog app UI mockup on laptop                                            | https://www.pexels.com/search/laptop%20website/                                              |
| `homePage.sections[teaserList].items[1]`     | `image` (optional) | Documentation page on desktop screen                                    | https://unsplash.com/s/photos/documentation                                                  |
| `homePage.sections[teaserList].items[2]`     | `image` (optional) | CMS/editor interface style shot                                         | https://www.pexels.com/search/content%20management/                                          |
| `homePage.sections[heroTeaser].images[0]`    | `images`           | Developer pairing session                                               | https://unsplash.com/s/photos/pair-programming                                               |
| `homePage.sections[heroTeaser].images[1]`    | `images`           | CI/CD dashboard, terminal, or deployment flow visual                    | https://unsplash.com/s/photos/devops-dashboard                                               |
| `post.monorepo-architecture`                 | `mainImage`        | Repository tree / architecture whiteboard                               | https://unsplash.com/s/photos/software-architecture                                          |
| `post.sanity-page-builder`                   | `mainImage`        | Headless CMS editing workspace                                          | https://www.pexels.com/search/cms/                                                           |
| `post.shared-ui-and-types`                   | `mainImage`        | Design system tokens / component board                                  | https://unsplash.com/s/photos/design-system                                                  |

## Suggested aspect ratios

- Hero and post main images: `16:9` (e.g. `1600x900`)
- Stacked image sections (`imageFeatures`, `heroTeaser`): `4:5` (e.g. `1200x1500`)
- Teaser list cards: `4:3` or `16:10`
- Author image: `1:1`
- Logo: square SVG/PNG (`512x512`)

## Accessibility notes for image selection

- Prefer images where the subject is clear and supports surrounding text.
- Avoid text-heavy images (harder to read and localize).
- Avoid flashing/highly busy imagery that can reduce readability.
- Use descriptive alt text in Studio where applicable.
