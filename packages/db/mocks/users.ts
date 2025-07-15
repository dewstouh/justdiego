import { Prisma } from "../generated/prisma";

export const usersMock: Prisma.UserCreateInput[] = [
  {
    id: 'user-diego',
    email: 'diego@justdiego.com',
    name: 'Diego Rodriguez',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // "password" hashed
    country: { connect: { id: 'country-poland' } },
    roles: {
      connect: [
        { id: 'role-admin' },
        { id: 'role-developer' }
      ]
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'user-sarah-chen',
    email: 'sarah.chen@techstartup.com',
    name: 'Sarah Chen',
    country: { connect: { id: 'country-usa' } },
    roles: {
      connect: [{ id: 'role-user' }]
    },
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15')
  },
  {
    id: 'user-alex-morrison',
    email: 'alex.morrison@growthco.com',
    name: 'Alex Morrison',
    country: { connect: { id: 'country-canada' } },
    roles: {
      connect: [{ id: 'role-user' }]
    },
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  },
  {
    id: 'user-emma-wilson',
    email: 'emma.wilson@digitalagency.com',
    name: 'Emma Wilson',
    country: { connect: { id: 'country-uk' } },
    roles: {
      connect: [{ id: 'role-user' }]
    },
    createdAt: new Date('2024-04-05'),
    updatedAt: new Date('2024-04-05')
  },
  {
    id: 'user-marco-rossi',
    email: 'marco.rossi@innovatech.it',
    name: 'Marco Rossi',
    country: { connect: { id: 'country-italy' } },
    roles: {
      connect: [{ id: 'role-user' }]
    },
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-05-20')
  }
];
