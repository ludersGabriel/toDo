import { Task, TaskCreateInput, TaskUpdateInput } from './task.dto'
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { Context } from '@src/context'
import { taskRepo } from './task.repo'
import { OwnerError } from '@utils/auth'

@Resolver(Task)
export class TaskResolver {
  private readonly taskRepo = taskRepo

  private readonly checkOwnership = async (taskId: string, ctx: Context) => {
    const task = await this.taskRepo.task(taskId)
    if (task && task.userId !== ctx.user.id) {
      throw OwnerError()
    }
  }

  @Authorized()
  @Mutation(() => Task)
  async createTask (
    @Arg('data') data: TaskCreateInput,
    @Ctx() ctx: Context
  ): Promise<Task> {
    const userId = ctx.user.id
    return this.taskRepo.createTask(
      data,
      userId
    )
  }

  @Authorized()
  @Mutation(() => Task)
  async updateTask (
    @Arg('data') data: TaskUpdateInput,
    @Ctx() ctx: Context
  ): Promise<Task> {
    await this.checkOwnership(data.id, ctx)

    return this.taskRepo.updateTask(data)
  }

  @Authorized()
  @Mutation(() => Task)
  async deleteTask (
    @Arg('id') taskId: string,
    @Ctx() ctx: Context
  ): Promise<Task> {
    await this.checkOwnership(taskId, ctx)

    return this.taskRepo.deleteTask(taskId)
  }

  @Authorized()
  @Query(() => [Task])
  async tasks (
    @Ctx() ctx: Context
  ): Promise<Task[]> {
    return this.taskRepo.tasks(ctx.user.id)
  }
}
