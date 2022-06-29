import { IdArray } from '@components/utils/general'
import { Task, TaskCreateInput, TaskUpdateInput } from './task.dto'
import { taskRepo } from './task.repo'

class TaskService {
  private readonly repo = taskRepo

  async create (
    data: TaskCreateInput,
    projectId: string,
    ownerId: string
  ): Promise<Task> {
    return this.repo.create(
      data,
      ownerId,
      projectId
    )
  }

  async update (
    data: TaskUpdateInput,
    ownerId: string
  ): Promise<Task> {
    return this.repo.update(data, ownerId)
  }

  async connectUsers (
    data: IdArray[],
    taskId: string,
    ownerId: string
  ): Promise<Task> {
    return this.repo.connectUsers(data, taskId, ownerId)
  }

  async disconnectUsers (
    data: IdArray[],
    taskId: string,
    ownerId: string
  ): Promise<Task> {
    return this.repo.disconnectUsers(data, taskId, ownerId)
  }

  async delete (
    id: string,
    userId: string,
    ownerId: string
  ): Promise<Task> {
    if (userId === ownerId) {
      return this.repo.delete(id, ownerId)
    }

    return this.disconnectUsers([{ id: userId }], id, ownerId)
  }

  async findAllByUser (
    userId: string
  ): Promise<Task[]> {
    return this.repo.findAll(userId)
  }

  async find (
    id: string,
    ownerId: string
  ): Promise<Task | null> {
    return this.repo.find(id, ownerId)
  }
}

export const taskService = new TaskService()
