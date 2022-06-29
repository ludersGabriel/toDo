import { taskService } from '../src/components/task/task.service'
import { Task, TaskCreateInput, TaskUpdateInput } from '../src/components/task/task.dto'

describe('task service', () => {
  const service = taskService
  const userId = '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570'
  const ownerId = '21502fea-3df0-4fe5-945d-270fa7488892'
  const projectId = '8f91e9a0-e6a3-4942-8a59-13a6995fb032'

  test('should create a task', async () => {
    const taskData: TaskCreateInput = {
      name: 'task name',
      description: 'task description',
      completed: false
    }

    const task = await service.create(taskData, projectId, userId)
    expect(task).not.toBeNull()

    const dbTask = await service.find(task.id, userId)
    expect(dbTask).not.toBeNull()
    for (const key in dbTask) {
      if (!(key in taskData)) continue
      const castedKey = key as keyof TaskCreateInput
      expect(dbTask[key as keyof Task]).toBe(taskData[castedKey])
    }
  })

  test('should update a task', async () => {
    const taskData: TaskUpdateInput = {
      id: '73b900d9-9d1f-4cee-bf2d-2ee8c478d9ff',
      name: 'new name',
      description: 'new desc',
      completed: true
    }

    const task = await service.update(taskData, ownerId)
    expect(task).not.toBeNull()

    const dbTask = await service.find(task.id, ownerId)
    expect(dbTask).not.toBeNull()
    for (const key in dbTask) {
      if (!(key in taskData)) continue
      const castedKey = key as keyof TaskUpdateInput
      expect(dbTask[key as keyof Task]).toBe(taskData[castedKey])
    }
  })

  test('should delete a task', async () => {
    const taskData = {
      id: 'acaf7ccd-c258-4e17-bcf5-b214387a95da',
      ownerId: '21502fea-3df0-4fe5-945d-270fa7488892'
    }

    const task = await service.delete(taskData.id, userId, taskData.ownerId)
    expect(task).not.toBeNull()
    expect(task.id).toBe(taskData.id)

    const dbTask = await service.find(taskData.id, userId)
    expect(dbTask).toBeNull()
  })

  test('should find all tasks', async () => {
    const tasks = await service.findAllByUser(userId)
    expect(tasks).toBeInstanceOf(Array)
    expect(tasks).toHaveLength(4)
  })

  test('should find a task', async () => {
    const taskData = {
      id: '79029a53-bd11-4665-82b4-e168e0399f86'
    }

    const task = await service.find(taskData.id, ownerId)
    expect(task).not.toBeNull()
    expect(task?.id).toBe(taskData.id)
  })
})
