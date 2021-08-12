import { SubTask, SubTaskCreateInput, SubTaskUpdateInput } from './subTask.dto'
import { Arg, Ctx, Authorized, Mutation, Query, Resolver } from 'type-graphql'
import { Context } from '@src/context'
import { subTaskRepo } from './subTask.repo'
import { OwnerError } from '@utils/auth'

@Resolver(SubTask)
export class SubTaskResolver {
  private readonly subTaskRepo = subTaskRepo

  private readonly checkOwnership = async (subTaskId: string, ctx: Context) => {
    const subTask = await this.subTaskRepo.taskBySubTask(subTaskId)

    if (subTask && subTask.task?.userId !== ctx.user.id) {
      throw OwnerError()
    }
  }

  @Authorized()
  @Mutation(() => SubTask)
  async createSubTask (
    @Arg('data') data: SubTaskCreateInput,
    @Arg('taskId') taskId: string
  ): Promise<SubTask> {
    return this.subTaskRepo.createSubTask(data, taskId)
  }

  @Authorized()
  @Mutation(() => SubTask)
  async updateSubTask (
    @Arg('data') data: SubTaskUpdateInput,
    @Ctx() ctx: Context
  ): Promise<SubTask> {
    await this.checkOwnership(data.id, ctx)

    return this.subTaskRepo.updateSubTask(data)
  }

  @Authorized()
  @Mutation(() => SubTask)
  async deleteSubTask (
    @Arg('id') subTaskId: string,
    @Ctx() ctx: Context
  ): Promise<SubTask> {
    await this.checkOwnership(subTaskId, ctx)

    return this.subTaskRepo.deleteSubTask(subTaskId)
  }

  @Authorized()
  @Query(() => [SubTask])
  async subTasks (
    @Arg('taskId') taskId: string,
    @Ctx() ctx: Context
  ): Promise<SubTask[]> {
    await this.checkOwnership(taskId, ctx)

    return this.subTaskRepo.subTasks(taskId)
  }
}
