import { prisma } from '../seed'
import 'colors'

export const taskSeed = async () => {
  try {
    await prisma.task.create({
      data: {
        name: 'updateTask',
        description: 'updateTask',
        date: new Date('2021/08/13'),
        completed: true,
        project: { connect: { id: '4e27bc9d-a2c2-422c-92e2-20d934463a6a' } },
        user: { connect: { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' } }
      }
    })

    await prisma.task.create({
      data: {
        name: 'deleteTask',
        description: 'deleteTask',
        date: new Date('2021/08/13'),
        completed: true,
        project: { connect: { id: '4e27bc9d-a2c2-422c-92e2-20d934463a6a' } },
        user: { connect: { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' } }
      }
    })

    await prisma.task.create({
      data: {
        name: 'findTask',
        description: 'findTask',
        date: new Date('2021/08/13'),
        completed: true,
        project: { connect: { id: '4e27bc9d-a2c2-422c-92e2-20d934463a6a' } },
        user: { connect: { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' } }
      }
    })

    await prisma.task.create({
      data: {
        name: 'subTaskTask',
        description: 'subTaskTask',
        date: new Date('2021/08/13'),
        completed: true,
        project: { connect: { id: '4e27bc9d-a2c2-422c-92e2-20d934463a6a' } },
        user: { connect: { id: '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570' } }
      }
    })
    console.log('\t[+] tasks inserted'.green)
  } catch (e) {
    console.log(`\t[-] error inserting tasks: ${e}`.red)
  }
}
