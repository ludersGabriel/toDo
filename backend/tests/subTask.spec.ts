import { subTaskService } from '../src/components/subTask/subTask.service'
import { SubTask, SubTaskCreateInput, SubTaskUpdateInput } from '../src/components/subTask/subTask.dto'

describe('sub task service', () => {
  const service = subTaskService
  const userId = '6f5bd7a2-fa9a-4ea4-a9cf-4bd22e7b6570'
  const taskId = '4eea2ed8-ca3e-4567-b696-298fdf7d288e'
  const ownerId = '21502fea-3df0-4fe5-945d-270fa7488892'

  test('should create a sub task', async () => {
    const subTaskData: SubTaskCreateInput = {
      name: 'subTask name',
      description: 'subTask description',
      completed: false
    }

    const subTask = await service.create(subTaskData, taskId, userId)
    expect(subTask).not.toBeNull()

    const dbSubTask = await service.find(subTask.id, userId)
    expect(dbSubTask).not.toBeNull()
    for (const key in dbSubTask) {
      if (!(key in subTaskData)) continue
      const castedKey = key as keyof SubTaskCreateInput
      expect(dbSubTask[key as keyof SubTask]).toBe(subTaskData[castedKey])
    }
  })

  test('should update a sub task', async () => {
    const subTaskData: SubTaskUpdateInput = {
      id: '764d4129-64a5-4d85-a637-589f0639508f',
      name: 'new name',
      description: 'new desc',
      completed: true
    }

    const subTask = await service.update(subTaskData, ownerId)
    expect(subTask).not.toBeNull()

    const dbsubTask = await service.find(subTask.id, ownerId)
    expect(dbsubTask).not.toBeNull()
    for (const key in dbsubTask) {
      if (!(key in subTaskData)) continue
      const castedKey = key as keyof SubTaskUpdateInput
      expect(dbsubTask[key as keyof SubTask]).toBe(subTaskData[castedKey])
    }
  })

  test('should delete a sub task', async () => {
    const subTaskData = {
      id: '864d4129-64a5-4d85-a637-589f0639503f',
      ownerId: '21502fea-3df0-4fe5-945d-270fa7488892'

    }

    const subTask = await service.delete(subTaskData.id, userId, subTaskData.ownerId)
    expect(subTask).not.toBeNull()
    expect(subTask.id).toBe(subTaskData.id)

    const dbSubTask = await service.find(subTaskData.id, userId)
    expect(dbSubTask).toBeNull()
  })

  test('should find all sub tasks', async () => {
    const tasks = await service.findAllByTask(taskId, userId)
    expect(tasks).toBeInstanceOf(Array)
    expect(tasks).toHaveLength(3)
  })

  test('should find a sub task', async () => {
    const subTaskData = {
      id: '564d4129-64a5-4d85-a637-589f0639506f'
    }

    const subTask = await service.find(subTaskData.id, ownerId)
    expect(subTask).not.toBeNull()
    expect(subTask?.id).toBe(subTaskData.id)
  })
})
