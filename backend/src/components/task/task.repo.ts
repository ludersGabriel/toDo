import { IdArray } from '@components/utils/general'
import { prisma } from '@src/context'
import { Task, TaskCreateInput, TaskUpdateInput } from './task.dto'

class TaskRepo {
  private readonly prisma = prisma

  async create (
    data: TaskCreateInput,
    ownerId: string,
    projectId: string
  ): Promise<Task> {
    const connectUsers = data?.users || []

    return this.prisma.task.create({
      data: {
        ...data,
        ownerId,
        users: { connect: [...connectUsers, { id: ownerId }] },
        project: { connect: { id: projectId } }
      }
    })
  }

  async update (
    data: TaskUpdateInput,
    ownerId: string
  ): Promise<Task> {
    return this.prisma.task.update({
      where: {
        taskId_ownerId: {
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
  ): Promise<Task> {
    return this.prisma.task.update({
      where: {
        taskId_ownerId: {
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
  ): Promise<Task> {
    return this.prisma.task.update({
      where: {
        taskId_ownerId: {
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
    taskId: string,
    ownerId: string
  ): Promise<Task> {
    return this.prisma.task.delete({
      where: {
        taskId_ownerId: {
          id: taskId,
          ownerId
        }
      }
    })
  }

  async find (
    taskId: string,
    ownerId: string
  ): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: {
        taskId_ownerId: {
          id: taskId,
          ownerId
        }
      }
    })
  }

  async findAll (
    userId: string
  ): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: {
        users: {
          some: {
            id: userId
          }
        }
      }
    })
  }
}

export const taskRepo = new TaskRepo()
