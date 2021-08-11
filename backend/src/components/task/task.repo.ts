import { prisma } from '@src/context'
import { Task, TaskCreateInput, TaskUpdateInput } from './task.dto'

class TaskRepo {
  private readonly prisma = prisma

  async createTask (
    data: TaskCreateInput,
    userId: string,
    projectId: string
  ): Promise<Task> {
    return this.prisma.task.create({
      data: {
        ...data,
        user: { connect: { id: userId } },
        project: { connect: { id: projectId } }
      }
    })
  }

  async updateTask (
    data: TaskUpdateInput
  ): Promise<Task> {
    return this.prisma.task.update({
      where: {
        id: data.id
      },
      data
    })
  }

  async deleteTask (
    taskId: string
  ): Promise<Task> {
    return this.prisma.task.delete({
      where: {
        id: taskId
      }
    })
  }

  async task (
    taskId: string
  ): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: {
        id: taskId
      }
    })
  }

  async tasks (
    userId: string
  ): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: {
        userId: userId
      }
    })
  }
}

export const taskRepo = new TaskRepo()
