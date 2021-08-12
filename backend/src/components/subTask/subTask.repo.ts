import { prisma } from '@src/context'
import { SubTask, SubTaskCreateInput, SubTaskUpdateInput } from './subTask.dto'

class SubTaskRepo {
  private readonly prisma = prisma

  async createSubTask (
    data: SubTaskCreateInput,
    taskId: string
  ): Promise<SubTask> {
    return prisma.subTask.create({
      data: {
        ...data,
        task: { connect: { id: taskId } }
      }
    })
  }

  async updateSubTask (
    data: SubTaskUpdateInput
  ): Promise<SubTask> {
    return this.prisma.subTask.update({
      where: {
        id: data.id
      },
      data
    })
  }

  async deleteSubTask (
    subTaskId: string
  ): Promise<SubTask> {
    return this.prisma.subTask.delete({
      where: {
        id: subTaskId
      }
    })
  }

  async subTask (
    subTaskId: string
  ): Promise<SubTask | null> {
    return this.prisma.subTask.findUnique({
      where: {
        id: subTaskId
      }
    })
  }

  async subTasks (
    taskId: string
  ): Promise<SubTask[]> {
    return this.prisma.subTask.findMany({
      where: {
        taskId
      }
    }
    )
  }

  async taskBySubTask (
    subTaskId: string
  ): Promise<SubTask | null> {
    return this.prisma.subTask.findUnique({
      where: {
        id: subTaskId
      },
      include: { task: true }
    })
  }
}

export const subTaskRepo = new SubTaskRepo()
