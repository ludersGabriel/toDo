import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const hash = (str: string): Promise<string> => bcrypt.hash(str, 12)

async function main () {
  await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      email: 'admin@gmail.com',
      name: 'admin',
      password: await hash('1234mudar'),
      role: 'admin'
    }
  })

  await prisma.user.upsert({
    where: { email: 'testUser_2@todo.io' },
    update: {},
    create: {
      email: 'testUser_2@todo.io',
      name: 'testUser_2',
      password: await hash('1234mudar')
    }
  })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
