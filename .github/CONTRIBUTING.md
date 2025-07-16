# Contributing to justdiego.com

This guide will help you get started with contributing to our portfolio and solutions platform.

## Table of Contents

- [Contributing to justdiego.com](#contributing-to-justdiegocom)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [Getting Started](#getting-started)
  - [Development Setup](#development-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Project Structure](#project-structure)
  - [Making Changes](#making-changes)
    - [Branching Strategy](#branching-strategy)
    - [Creating a Feature Branch](#creating-a-feature-branch)
    - [Commit Messages](#commit-messages)
  - [Submitting Changes](#submitting-changes)
  - [Style Guidelines](#style-guidelines)
    - [Code Style](#code-style)
    - [Component Guidelines](#component-guidelines)
    - [CSS/Styling](#cssstyling)
  - [Testing](#testing)
  - [Database Changes](#database-changes)
  - [Documentation](#documentation)
  - [Community](#community)
  - [Getting Help](#getting-help)
  - [License](#license)

## Code of Conduct

By participating in this project, you agree to abide by our code of conduct. Please be respectful, inclusive, and professional in all interactions.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/dewstouh/justdiego.git
   cd justdiego
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/dewstouh/justdiego.git
   ```

## Development Setup

This project uses a monorepo structure with Turbo, Next.js, and pnpm.

### Prerequisites

- Node.js (>= 18)
- pnpm (>= 9.0.0)

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up the database:
   ```bash
   pnpm db:migrate:dev
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

The application will be available at `http://localhost:3000`.

### Project Structure

- `apps/web/` - Main Next.js application
- `packages/` - Shared packages and utilities
  - `ui/` - Shared UI components
  - `db/` - Database schema and client
  - `types/` - TypeScript type definitions
  - `utils/` - Utility functions
  - `constants/` - Project constants

## Making Changes

### Branching Strategy

- `main` - Production branch (protected)
- `dev` - Development branch
- Feature branches should be created from `dev`

### Creating a Feature Branch

```bash
git checkout dev
git pull upstream dev
git checkout -b feature/your-feature-name
```

### Commit Messages

Use conventional commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example: `feat: add new solution card component`

## Submitting Changes

1. **Test your changes** locally:
   ```bash
   pnpm lint
   pnpm build
   ```

2. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: description of your changes"
   ```

3. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request** on GitHub:
   - Target the `dev` branch
   - Fill out the PR template completely
   - Link any related issues

## Style Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code formatting (Prettier is configured)
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### Component Guidelines

- Use functional components with hooks
- Follow the established file structure in `components/`
- Export components from appropriate index files
- Use TypeScript interfaces for props

### CSS/Styling

- Use Tailwind CSS for styling
- Follow the existing color scheme defined in `lib/colors.ts`
- Ensure responsive design for all components
- Test on mobile and desktop

## Testing

- Write tests for new features and bug fixes
- Ensure all tests pass before submitting
- Test the application manually in different browsers

## Database Changes

When making database changes:

1. Update the Prisma schema in `packages/db/prisma/schema.prisma`
2. Generate a migration:
   ```bash
   pnpm db:migrate:dev
   ```
3. Update the database client types:
   ```bash
   pnpm generate
   ```

## Documentation

- Update documentation for any new features
- Add JSDoc comments for complex functions
- Update the README if necessary
- Include examples in your documentation

## Community

- Be respectful and constructive in discussions
- Help others in issues and discussions
- Follow up on your pull requests promptly
- Ask questions if you're unsure about anything

## Getting Help

If you need help or have questions:

1. Check existing issues and discussions
2. Create a new issue with the `question` label
3. Join our community discussions

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (see LICENSE file).

---

Thank you for contributing to justdiego.com! 🚀
