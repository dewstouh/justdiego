import { Prisma } from "../generated/prisma";

export const rolesMock: Prisma.RoleCreateInput[] = [
  {
    id: 'role-admin',
    name: 'ADMIN',
    permissions: {
      connect: [
        { id: 'permission-read' },
        { id: 'permission-write' },
        { id: 'permission-delete' },
        { id: 'permission-manage-users' },
        { id: 'permission-manage-content' }
      ]
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'role-user',
    name: 'USER',
    permissions: {
      connect: [
        { id: 'permission-read' },
        { id: 'permission-write' }
      ]
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'role-developer',
    name: 'DEVELOPER',
    permissions: {
      connect: [
        { id: 'permission-read' },
        { id: 'permission-write' },
        { id: 'permission-manage-content' }
      ]
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'role-guest',
    name: 'GUEST',
    permissions: {
      connect: [
        { id: 'permission-read' }
      ]
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];
