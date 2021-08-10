import { prisma } from '@src/context'
import { Task, TaskCreateInput } from './task.dto'

export class TaskRepo {
  private readonly prisma = prisma

  async createTask (
    data: TaskCreateInput,
    userId: string | undefined
  ): Promise<Task> {
    return this.prisma.task.create({
      data: {
        ...data,
        user: { connect: { id: userId } }
      }
    })
  }
}

export const taskRepo = new TaskRepo()
