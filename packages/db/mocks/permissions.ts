import { Prisma } from "../generated/prisma";

export const permissionsMock: Prisma.PermissionCreateInput[] = [
  {
    id: 'permission-read',
    name: 'READ',
    description: 'Permission to read content and data',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'permission-write',
    name: 'WRITE',
    description: 'Permission to create and edit content',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'permission-delete',
    name: 'DELETE',
    description: 'Permission to delete content and data',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'permission-manage-users',
    name: 'MANAGE_USERS',
    description: 'Permission to manage user accounts and roles',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'permission-manage-content',
    name: 'MANAGE_CONTENT',
    description: 'Permission to manage website content and settings',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];
