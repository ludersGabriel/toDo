import { IdArray } from '@components/utils/general'
import { prisma } from '@src/context'
import { SubTask, SubTaskCreateInput, SubTaskUpdateInput } from './subTask.dto'

class SubTaskRepo {
  private readonly prisma = prisma

  async create (
    data: SubTaskCreateInput,
    taskId: string,
    ownerId: string
  ): Promise<SubTask> {
    const connectUsers = data?.users || []

    return prisma.subTask.create({
      data: {
        ...data,
        ownerId,
        task: { connect: { id: taskId } },
        users: { connect: [...connectUsers, { id: ownerId }] }
      }
    })
  }

  async update (
    data: SubTaskUpdateInput,
    ownerId: string
  ): Promise<SubTask> {
    return this.prisma.subTask.update({
      where: {
        subTaskId_ownerId: {
          id: data.id,
          ownerId
        }
      },
      data
    })
  }

  async connectUsers (
    data: IdArray[],
    id: string,
    ownerId: string
  ): Promise<SubTask> {
    return this.prisma.subTask.update({
      where: {
        subTaskId_ownerId: {
          id,
          ownerId
        }
      },
      data: {
        users: {
          connect: [...data]
        }
      }
    })
  }

  async disconnectUsers (
    data: IdArray[],
    id: string,
    ownerId: string
  ): Promise<SubTask> {
    return this.prisma.subTask.update({
      where: {
        subTaskId_ownerId: {
          id,
          ownerId
        }
      },
      data: {
        users: {
          disconnect: [...data]
        }
      }
    })
  }

  async delete (
    subTaskId: string,
    ownerId: string
  ): Promise<SubTask> {
    return this.prisma.subTask.delete({
      where: {
        subTaskId_ownerId: {
          id: subTaskId,
          ownerId
        }
      }
    })
  }

  async find (
    subTaskId: string,
    ownerId: string
  ): Promise<SubTask | null> {
    return this.prisma.subTask.findUnique({
      where: {
        subTaskId_ownerId: {
          id: subTaskId,
          ownerId
        }
      }
    })
  }

  async findAll (
    taskId: string,
    userId: string
  ): Promise<SubTask[]> {
    return this.prisma.subTask.findMany({
      where: {
        taskId,
        users: {
          some: {
            id: userId
          }
        }
      }
    }
    )
  }

  async taskBySubTask (
    subTaskId: string,
    ownerId: string
  ): Promise<SubTask | null> {
    return this.prisma.subTask.findUnique({
      where: {
        subTaskId_ownerId: {
          id: subTaskId,
          ownerId
        }
      },
      include: { task: true }
    })
  }
}

export const subTaskRepo = new SubTaskRepo()
