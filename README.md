# JustDiego Monorepo

> Enterprise-grade monorepo built with Nx, pnpm, Next.js 15, React 19, and TypeScript

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.4 with App Router
- **UI**: React 19.1.0 + Tailwind CSS + shadcn/ui
- **Animation**: Framer Motion with SSR-compatible wrappers
- **Build System**: Nx 19.8.4 + pnpm workspaces
- **Language**: TypeScript (strict mode)
- **Validation**: Zod schemas
- **Logging**: Pino structured logging
- **Testing**: Vitest + Testing Library
- **Code Quality**: ESLint + Prettier + Husky + lint-staged

## 📁 Project Structure

```
justdiego-monorepo/
├── apps/
│   └── web/                    # Next.js 15 web application
├── packages/
│   ├── config/                 # Configuration management
│   ├── logger/                 # Pino logging utilities
│   ├── types/                  # Shared TypeScript types
│   └── utils/                  # Utility functions
├── .github/
│   └── instructions/           # AI coding standards
└── tools/                      # Development tools
```

## 🏗️ Features

✅ **Next.js 15** with latest React 19 features
✅ **SSR-Compatible Framer Motion** wrapper components
✅ **Strict TypeScript** configuration across all packages
✅ **Enterprise monorepo** structure with clear boundaries
✅ **Modern tooling** with fast builds and hot reload
✅ **Code quality** enforcement with comprehensive linting
✅ **Type-safe** development with end-to-end TypeScript

## 🛠️ Development

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Type check
pnpm type-check
```

### Available Scripts

- `pnpm dev` - Start development servers for all apps
- `pnpm build` - Build all packages and apps
- `pnpm test` - Run tests across the workspace
- `pnpm lint` - Lint all code with ESLint
- `pnpm type-check` - Run TypeScript compiler checks
- `pnpm clean` - Clean build artifacts and dependencies

## 🎨 Motion Components

This project includes SSR-compatible Framer Motion wrapper components:

```tsx
import { MotionWrapper, FadeIn, SlideIn, ScaleIn } from '@/components/motion';

// SSR-safe motion wrapper
<MotionWrapper animate={{ opacity: 1 }}>
  <div>Animated content</div>
</MotionWrapper>

// Pre-built animation components
<FadeIn direction="up">Content</FadeIn>
<SlideIn direction="left">Content</SlideIn>
<ScaleIn>Content</ScaleIn>
```

## 📦 Packages

### `@justdiego/config`
Configuration management with Zod validation

### `@justdiego/logger`
Structured logging with Pino for development and production

### `@justdiego/types`
Shared TypeScript type definitions

### `@justdiego/utils`
Common utility functions for date manipulation, string operations, etc.

## 🏛️ Architecture

This monorepo follows enterprise coding standards with:

- **Domain-driven design** with clear package boundaries
- **Stateless service classes** using static methods
- **Strict TypeScript** with no `any` types allowed
- **Consistent code style** enforced by ESLint and Prettier
- **Automated quality checks** with pre-commit hooks

## 🤝 Contributing

This project follows strict coding standards documented in `.github/instructions/`. All code must:

- Pass type checking with strict TypeScript
- Follow ESLint rules and Prettier formatting
- Include proper error handling and logging
- Use Zod for input validation
- Follow the established service patterns

## 📄 License

Private repository - All rights reserved.
- `core/` - Business logic and services (coming soon)
- `db/` - Database access layer with Prisma (coming soon)

## Getting Started

1. Install dependencies: `pnpm install`
2. Start development: `pnpm dev`
3. Visit http://localhost:3000

## Adding Your Website Code

You can now copy your existing website code into `apps/web/src/`. The project is set up with:
- ✅ Next.js 15+ with App Router
- ✅ shadcn/ui components
- ✅ Tailwind CSS with CSS variables
- ✅ TypeScript with strict mode
- ✅ ESLint and Prettier
- ✅ Monorepo structure with shared packages

Replace the placeholder content in `apps/web/src/app/page.tsx` with your actual homepage component.
