import { Prisma } from "../generated/prisma";

export const usersMock: Prisma.UserCreateInput[] = [
  {
    id: 'user-isaac-correa',
    email: 'isaac.correa@kodalogic.com',
    name: 'Isaac Correa',
    avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGvppdpBMTuSQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696370156876?e=2147483647&v=beta&t=LKd2PCbHfzzUaHA-_kXNiSAknHrbctH86Eqig0ARvP8",
    country: { connect: { id: 'country-spain' } },
    roles: {
      connect: [{ id: 'role-user' }]
    },
  },
  {
    id: 'user-gus',
    email: 'gus@gmail.com',
    name: 'gus',
    country: { connect: { id: 'country-spain' } },
    roles: {
      connect: [{ id: 'role-user' }]
    },
  },
  {
    id: 'user-david',
    email: 'd.garcia@gmail.com',
    name: 'davidgar',
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    country: { connect: { id: 'country-spain' } },
    roles: {
      connect: [{ id: 'role-user' }]
    },
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  },
  {
    id: 'user-domcio',
    email: 'domcio@domcio.com',
    name: 'TheDomcio',
    avatarUrl: "https://avatars.githubusercontent.com/u/20740188?v=4",
    country: { connect: { id: 'country-poland' } },
    roles: {
      connect: [{ id: 'role-user' }]
    },
  },
  {
    id: 'user-bipilbro',
    email: 'bipulbro@example.com',
    name: 'bitpulbro',
    avatarUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/8a4babb8278e67d45ccae6eef254a7ce-1747199628606/178f3a71-d02d-4c93-95f5-f05b631a51a7.jpg",
    country: { connect: { id: 'country-india' } },
    roles: {
      connect: [{ id: 'role-user' }]
    },
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-05-20')
  },
  {
    id: 'user-toaster192',
    email: 'toaster192@example.com',
    name: 'Toaster192',
    avatarUrl: "", // Add avatar image here
    country: { connect: { id: 'country-czech-republic' } },
    roles: {
      connect: [{ id: 'role-user' }]
    },
    createdAt: new Date('2024-06-15'),
    updatedAt: new Date('2024-06-15')
  },
  {
    id: 'user-nekromoff',
    email: 'nekromoff@example.com',
    name: 'nekromoff',
    avatarUrl: "https://avatars.githubusercontent.com/u/8550349?v=4", // Add avatar image here
    country: { connect: { id: 'country-slovakia' } },
    roles: {
      connect: [{ id: 'role-user' }]
    },
    createdAt: new Date('2024-07-01'),
    updatedAt: new Date('2024-07-01')
  },
  {
    id: 'user-diego',
    email: 'diego@justdiego.com',
    name: 'Diego Rodriguez',
    avatarUrl: "https://i.imgur.com/Cc2sAeN.jpeg",
    country: { connect: { id: 'country-spain' } },
    roles: {
      connect: [{ id: 'role-admin' }]
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];
