import { IdArray } from '@components/utils/general'
import { SubTask, SubTaskCreateInput, SubTaskUpdateInput } from './subTask.dto'
import { subTaskRepo } from './subTask.repo'

class SubTaskService {
  private readonly repo = subTaskRepo

  async create (
    data: SubTaskCreateInput,
    taskId: string,
    ownerId: string
  ): Promise<SubTask> {
    return this.repo.create(
      data,
      taskId,
      ownerId
    )
  }

  async update (
    data: SubTaskUpdateInput,
    ownerId: string
  ): Promise<SubTask> {
    return this.repo.update(data, ownerId)
  }

  async connectUsers (
    data: IdArray[],
    subTaskId: string,
    ownerId: string
  ): Promise<SubTask> {
    return this.repo.connectUsers(data, subTaskId, ownerId)
  }

  async disconnectUsers (
    data: IdArray[],
    subTaskId: string,
    ownerId: string
  ): Promise<SubTask> {
    return this.repo.disconnectUsers(data, subTaskId, ownerId)
  }

  async delete (
    id: string,
    userId: string,
    ownerId: string
  ): Promise<SubTask> {
    if (userId === ownerId) {
      return this.repo.delete(id, ownerId)
    }

    return this.disconnectUsers([{ id: userId }], id, ownerId)
  }

  async findAllByTask (
    taskId: string,
    ownerId: string
  ): Promise<SubTask[]> {
    return this.repo.findAll(taskId, ownerId)
  }

  async find (
    id: string,
    ownerId: string
  ): Promise<SubTask | null> {
    return this.repo.find(id, ownerId)
  }
}

export const subTaskService = new SubTaskService()
