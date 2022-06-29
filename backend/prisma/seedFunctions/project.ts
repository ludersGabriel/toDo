import { prisma } from '../seed'
import { hash } from './user'

export const projectSeed = async () => {
  try {
    await Promise.all([
      prisma.project.create({
        data: {
          name: 'updateProject',
          description: 'updateProject',
          ownerId: '21502fea-3df0-4fe5-945d-270fa7488892',
          users: {
            connect: [
              { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' },
              { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6569' }
            ],
            create: [
              { name: 'teste', email: 'teste@teste.com', password: await hash('1234mudar') }
            ]
          },
          id: '8f91e9a0-e6a3-4942-8a59-13a6995fb035'
        }
      }),
      prisma.project.create({
        data: {
          name: 'deleteProject',
          description: 'deleteProject',
          ownerId: '21502fea-3df0-4fe5-945d-270fa7488892',
          users: {
            connect: [
              { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6568' },
              { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' }
            ]
          },
          id: '8f91e9a0-e6a3-4942-8a59-13a6995fb034'
        }
      }),
      prisma.project.create({
        data: {
          name: 'findProject',
          description: 'findProject',
          ownerId: '21502fea-3df0-4fe5-945d-270fa7488892',
          users: {
            connect: [
              { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6569' },
              { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' }
            ]
          },
          id: '8f91e9a0-e6a3-4942-8a59-13a6995fb033'
        }
      }),
      prisma.project.create({
        data: {
          name: 'taskProject',
          description: 'taskProject',
          ownerId: '21502fea-3df0-4fe5-945d-270fa7488892',
          users: {
            connect: [
              { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' },
              { id: '21502fea-3df0-4fe5-945d-270fa7488892' }
            ]
          },
          id: '8f91e9a0-e6a3-4942-8a59-13a6995fb032'
        }
      })
    ])

    console.log('\t[+] projects inserted'.green)
  } catch (e) {
    console.log(`\t[-] error inserting projects ${e}`.red)
  }
}
