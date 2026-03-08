# 📝 App Monorepo

A full-stack platform built with Turborepo to host React-based apps with Sanity CMS.
This monorepo gives frontend developers a place to build small components, experiment with new technologies, and ship fully functional apps.

[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.5-ef4444?style=flat-square)](https://turbo.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

## Why a Monorepo?

This repository uses a monorepo to:

- Share UI components and modules across apps
- Spin up focused apps (blog, docs, studio) without duplicating setup
- Share TypeScript types between Studio and Blog
- Reuse design tokens and Tailwind config
- Keep CMS schemas aligned with frontend components
- Simplify tooling, dependencies, and builds

## ✨ Features

- 🚀 **Next.js 15** with App Router and React Server Components
- 🎨 **Tailwind CSS v4** with custom design tokens
- 📦 **Turborepo** for blazing-fast builds
- 🗄️ **Sanity CMS** for structured content management
- 🧩 **Modular Architecture** with shared UI components
- 📱 **Fully Responsive** design system
- 🎯 **Type-Safe** with TypeScript throughout
- 🔥 **Hot Module Replacement** with Turbopack
- 📐 **ESLint & Prettier** configured for code quality

## 🏗️ Project Structure

```
blog-app/
├── apps/
│   ├── blog/
│   │   ├── src/
│   │   │   ├── app/              # Next.js App Router
│   │   │   ├── components/       # React components
│   │   │   └── sanity/           # Sanity client & queries
│   │   └── package.json
│   ├── docs/
│   └── studio/
│       ├── schemaTypes/          # Sanity schema definitions
│       │   ├── documents/        # Document types
│       │   ├── objects/          # Object types
│       │   └── modules/          # Module types
│       └── structure/            # Studio structure
├── packages/
│   ├── ui/
│   │   └── src/
│   │       ├── components/       # Shared components
│   │       └── lib/              # Utilities
│   ├── modules/
│   │   └── src/
│   │       └── modules/          # Content modules
│   └── tailwind-config/
│       └── design-tokens.css     # Global design tokens
├── docs/                         # Documentation
├── package.json                  # Root package.json
├── pnpm-workspace.yaml           # Workspace configuration
└── turbo.json                    # Turborepo configuration
```

## 📦 What's Inside?

This monorepo uses [pnpm](https://pnpm.io) as a package manager and includes the following packages and apps:

### Apps

```
apps/
├── blog/          # Main Next.js blog application
├── docs/          # Documentation site
└── studio/        # Sanity Studio CMS
```

- **`blog`** - The primary Next.js application featuring:
  - Dynamic routing with `[slug]` pages
  - Sanity content integration
  - Server-side rendering and ISR
  - Rich text rendering
  - Custom page builder

- **`docs`** - The documentation app built with Next.js:
  - Project docs and implementation notes
  - Shared UI package integration
  - Lightweight environment for docs-focused iteration

- **`studio`** - Sanity Studio for content management:
  - Custom schema types (posts, authors, categories, tags)
  - Visual content editing
  - Type generation for TypeScript
  - Live preview integration

### Packages

```
packages/
├── ui/                  # Shared React components
├── modules/             # Content modules
├── content-types/       # Sanity type definitions
├── tailwind-config/     # Shared Tailwind configuration
├── typescript-config/   # Shared TypeScript configs
└── eslint-config/       # Shared ESLint configurations
```

- **`@repo/ui`** - Reusable UI components with Tailwind CSS:
  - Button, Input, Card, etc.
  - Built with `class-variance-authority` and `radix-ui`
  - Fully typed with TypeScript

- **`@repo/modules`** - Content modules for page building:
  - Accordion, BlogList, ImageTeaser
  - RichText, TeaserList components
  - Modular content architecture

- **`@repo/content-types`** - Generated Sanity types

- **`@repo/tailwind-config`** - Centralized Tailwind configuration

- **`@repo/typescript-config`** - Shared TypeScript configurations

- **`@repo/eslint-config`** - ESLint configurations for Next.js and React

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or later
- **pnpm** 10.15.1 or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/bashirkarimi/blog-app.git
cd blog-app
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
# Create local environment files
touch apps/blog/.env.local
touch apps/studio/.env.local
```

Fill in the following environment variables in each `.env.local` file:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<your_sanity_project_id>
NEXT_PUBLIC_SANITY_DATASET=<dataset_name>
SANITY_STUDIO_PROJECT_ID=<same_as_above>
SANITY_STUDIO_DATASET=<same_as_above>
SANITY_STUDIO_API_TOKEN=<token_with_required_permissions>
```

You can retrieve these values from the Sanity project dashboard under **Project settings → API**.

4. Configure Sanity:
   - Create a Sanity project at [sanity.io](https://www.sanity.io/)
   - Add your project ID and dataset to the environment files

### Development

Run all apps in development mode:

```bash
pnpm dev
```

This will start:

- **Blog app**: http://localhost:3000
- **Docs app**: http://localhost:3001
- **Studio**: http://localhost:3333

Or run individual apps:

```bash
# Run only the blog
pnpm --filter blog dev

# Run only the studio
pnpm --filter @repo/studio dev

# Run only the docs site
pnpm --filter docs dev
```

### Building

Build all apps and packages:

```bash
pnpm build
```

Build specific app:

```bash
pnpm --filter blog build
```

## 🎨 Design System

This project uses Tailwind CSS v4 with a custom design system:

- **Design Tokens**: Centralized in `packages/tailwind-config/design-tokens.css`
- **Component Library**: Built with Radix UI primitives
- **Variants**: Managed with `class-variance-authority`
- **Dark Mode**: Full dark mode support

## 🧱 Architecture Overview

- **Data loading & preview**: Server Components call `sanityFetch` (see `apps/blog/src/sanity/live.ts`) so every route benefits from ISR-friendly caching and Sanity Live Preview via `<SanityLive />` in `layout.jsx`. If critical settings are missing, routes short-circuit to `notFound()` to avoid partially rendered pages.
- **Composable page builder**: `PageBuilder` renders heros and sections based on Sanity documents. It extends the shared `@repo/modules` registry with a local `RichText` renderer that handles Portable Text images, external link security attributes, and internal links for accessible content blocks.
- **Shared module registry**: `apps/blog/src/components/section-renderer.tsx` composes `@repo/modules/section-renderer`, so adding a new module in `packages/modules` immediately makes it available to editorial teams.
- **Blog routing**: Static post pages (`app/post/[slug]/page.tsx`) opt into `generateStaticParams()` for SSG while still using `sanityFetch` at runtime for fresh data. Landing pages under `/[slug]` reuse the same builder for marketing-style content without duplicating layout logic.
- **API surface**: `GET /api/posts` is a dynamic route that streams paginated posts from GROQ. It accepts `limit` (1-50, default 6), `offset`, `category`, and `mode` query params and responds with `{ posts, total, offset, limit, hasMore, category }`, making it easy to power infinite scroll or “load more” UIs without exposing Sanity directly.

## 🛠️ Sanity Workflows

| Command                                     | Description                                                                                        |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `pnpm --filter @repo/studio dev`            | Run Sanity Studio locally with hot reloads                                                         |
| `pnpm --filter @repo/studio typegen`        | Regenerate `apps/blog/src/sanity/types.ts` via `sanity schema extract` + `sanity typegen generate` |
| `pnpm --filter @repo/studio deploy`         | Deploy the Studio to the managed Sanity hosting                                                    |
| `pnpm --filter @repo/studio deploy-graphql` | Publish the project’s GraphQL API for external consumers                                           |

## 📝 Scripts

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `pnpm dev`         | Start all apps in development mode |
| `pnpm build`       | Build all apps and packages        |
| `pnpm lint`        | Lint all packages                  |
| `pnpm check-types` | Type-check all packages            |
| `pnpm format`      | Format code with Prettier          |

## ✅ Testing & Quality

- `pnpm lint` enforces the shared ESLint rules across apps and packages.
- `pnpm check-types` catches TypeScript drift after schema or component updates.
- Add Jest/Playwright coverage as the project grows and document new commands here for future contributors.

## 🚢 Deployment

- **Blog / Docs**: Deploy to Vercel (or another Next.js-compatible host) and mirror the environment variables listed above.
- **Sanity Studio**: Deploy with `pnpm --filter @repo/studio deploy` and publish the GraphQL API via `pnpm --filter @repo/studio deploy-graphql` when external systems need access.
- Enable the Turborepo remote cache in CI/CD to speed up incremental builds.

## 🔧 Tech Stack

### Frontend

- [Next.js 15](https://nextjs.org/) – React framework with first-class Sanity integration and App Router conveniences for page-building workflows
- [React 19](https://react.dev/) – UI library
- [TypeScript](https://www.typescriptlang.org/) – Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) – Utility-first styling with:
  - Design token support
  - Zero-configuration PostCSS pipeline
  - Close interoperability with Radix primitives
  - Strong DX during component development

### Content Management

- [Sanity](https://www.sanity.io/) – Headless CMS that powers the page-builder architecture with:
  - A fully customizable schema system
  - Real-time collaborative editing
  - Rich Portable Text content
  - Type-safe code generation
  - Live preview out of the box
  - Fast GROQ querying tailored to dynamic blogs and landing pages
- [next-sanity](https://www.npmjs.com/package/next-sanity) - Sanity integration
- [@sanity/image-url](https://www.npmjs.com/package/@sanity/image-url) - Image optimization

### Tooling

- [Turborepo](https://turbo.build/) - Monorepo build system

  Chosen for its:
  - Blazing-fast caching
  - Monorepo-aware pipelines
  - Zero-config task running
  - Remote cache for CI/CD
  - Perfect match for JS/TS ecosystem

- [pnpm](https://pnpm.io/) - Package manager
  Selected due to:
  - Fast and disk-efficient package management
  - Strict dependency isolation
  - Native workspace support
  - Symlinked node_modules for improved DX
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

### UI Components

- [Radix UI](https://www.radix-ui.com/) - Headless UI primitives
- [class-variance-authority](https://cva.style/) - Variant management
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Utility merging

## 📚 Documentation

Check out the `docs/` directory for additional documentation:

- [Tailwind v4 Monorepo Setup](docs/tailwind-v4-monorepo-from-scratch.md)
- More guides (architecture, content modeling, etc.) live alongside the code and will continue to grow with the project. If you add a feature, please co-locate its documentation under `docs/`.

---
