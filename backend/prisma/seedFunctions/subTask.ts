import { prisma } from '../seed'

const ownerId = '21502fea-3df0-4fe5-945d-270fa7488892'

export const subTaskSeed = async () => {
  try {
    await Promise.all([
      prisma.subTask.create({
        data: {
          name: 'findSubTask name',
          description: 'findSubTask description',
          ownerId,
          task: { connect: { id: '4eea2ed8-ca3e-4567-b696-298fdf7d288e' } },
          id: '564d4129-64a5-4d85-a637-589f0639506f',
          users: {
            connect: [
              { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' },
              { id: '21502fea-3df0-4fe5-945d-270fa7488892' }
            ]
          }
        }
      }),
      prisma.subTask.create({
        data: {
          name: 'updateSubTask name',
          description: 'updateSubTask description',
          ownerId,
          task: { connect: { id: '4eea2ed8-ca3e-4567-b696-298fdf7d288e' } },
          id: '764d4129-64a5-4d85-a637-589f0639508f',
          users: { connect: { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' } }
        }
      }),
      prisma.subTask.create({
        data: {
          name: 'deleteSubTask name',
          description: 'deleteSubTask description',
          ownerId,
          task: { connect: { id: '4eea2ed8-ca3e-4567-b696-298fdf7d288e' } },
          id: '864d4129-64a5-4d85-a637-589f0639503f',
          users: { connect: { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' } }
        }
      })

    ])
    console.log('\t[+] subTasks inserted'.green)
  } catch (e) {
    console.log(`\t[-] error inserting subTasks ${e}`.red)
  }
}
