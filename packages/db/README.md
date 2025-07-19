# @justdiego/db

Database layer with Prisma ORM integration, providing schema definitions, client access, and mock data.

## Contents

- Prisma schema and generated client
- Database types and interfaces
- Mock data for development and testing
- Seeding scripts
- Migration utilities

## Usage

```typescript
import { db } from '@justdiego/db';
import type { User } from '@justdiego/db/types';
```

## Scripts

- `db:migrate:dev` - Run migrations in development
- `db:seed` - Seed database with mock data
- `generate` - Generate Prisma client
