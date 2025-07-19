# JustDiego Web

JustDiego Next.js web app built with **TypeScript**, **Tailwind CSS**, **PostCSS** and the App Router.

![](../../assets/preview.png)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (dashboard)/        # Dashboard routes
│   ├── (marketing)/        # Marketing pages
│   ├── api/               # API routes
│   └── country-search/    # Country search feature
├── components/            # Shared components
└── lib/                  # Utilities and configurations
```



## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

From the monorepo root:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm check-types` - Type checking
- `pnpm page:create` - Generate new page boilerplate

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Type Safety**: TypeScript
- **Components**: Custom UI library (`@justdiego/ui`)
- **Database**: Prisma ORM (`@justdiego/db`)
- **PDF Generation**: React PDF
- **Email**: Resend
- **Markdown**: React Markdown with GFM support

## Development

The web app is part of a monorepo and uses shared packages:

- `@justdiego/ui` - UI components
- `@justdiego/utils` - Utility functions
- `@justdiego/constants` - Application constants
- `@justdiego/db` - Database layer
- `@justdiego/react-utils` - React utilities

## Deployment

The application is optimized for deployment on Vercel with automatic builds and preview deployments.

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```
