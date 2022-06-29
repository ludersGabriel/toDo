import { prisma } from '../seed'

const ownerId = '21502fea-3df0-4fe5-945d-270fa7488892'

export const taskSeed = async () => {
  try {
    await Promise.all([
      prisma.task.create({
        data: {
          name: 'updateTask',
          ownerId,
          description: 'updateTask',
          date: new Date('2021/08/13'),
          completed: true,
          project: { connect: { id: '8f91e9a0-e6a3-4942-8a59-13a6995fb032' } },
          users: {
            connect: [
              { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' },
              { id: '21502fea-3df0-4fe5-945d-270fa7488892' }
            ]
          },
          id: '73b900d9-9d1f-4cee-bf2d-2ee8c478d9ff'
        }
      }),
      prisma.task.create({
        data: {
          name: 'deleteTask',
          ownerId,
          description: 'deleteTask',
          date: new Date('2021/08/13'),
          completed: true,
          project: { connect: { id: '8f91e9a0-e6a3-4942-8a59-13a6995fb032' } },
          users: { connect: { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' } },
          id: 'acaf7ccd-c258-4e17-bcf5-b214387a95da'
        }
      }),
      prisma.task.create({
        data: {
          name: 'findTask',
          ownerId,
          description: 'findTask',
          date: new Date('2021/08/13'),
          completed: true,
          project: { connect: { id: '8f91e9a0-e6a3-4942-8a59-13a6995fb032' } },
          users: { connect: { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' } },
          id: '79029a53-bd11-4665-82b4-e168e0399f86'
        }
      }),
      prisma.task.create({
        data: {
          name: 'subTaskTask',
          ownerId,
          description: 'subTaskTask',
          date: new Date('2021/08/13'),
          completed: true,
          project: { connect: { id: '8f91e9a0-e6a3-4942-8a59-13a6995fb032' } },
          users: { connect: { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' } },
          id: '4eea2ed8-ca3e-4567-b696-298fdf7d288e'
        }
      })
    ])

    console.log('\t[+] tasks inserted'.green)
  } catch (e) {
    console.log(`\t[-] error inserting tasks: ${e}`.red)
  }
}
