import { Task, TaskCreateInput, TaskUpdateInput } from './task.dto'
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { Context } from '@src/context'

import { taskService } from './task.service'
import { IdArray } from '@components/utils/general'

@Resolver(Task)
export class TaskResolver {
  private readonly service = taskService

  @Authorized()
  @Mutation(() => Task)
  async createTask (
    @Arg('data') data: TaskCreateInput,
    @Arg('projectId') projectId: string,
    @Ctx() ctx: Context
  ): Promise<Task> {
    const userId = ctx.user.id

    return this.service.create(
      data,
      userId,
      projectId
    )
  }

  @Authorized()
  @Mutation(() => Task)
  async updateTask (
    @Arg('data') data: TaskUpdateInput,
    @Ctx() ctx: Context
  ): Promise<Task> {
    return this.service.update(data, ctx.user.id)
  }

  @Authorized()
  @Mutation(() => Task)
  async connectUsers (
    @Arg('data', _ => [IdArray]) data: IdArray[],
    @Arg('taskId') taskId: string,
    @Ctx() ctx: Context
  ): Promise<Task> {
    return this.service.connectUsers(data, taskId, ctx.user.id)
  }

  @Authorized()
  @Mutation(() => Task)
  async disconnectUsers (
    @Arg('data', _ => [IdArray]) data: IdArray[],
    @Arg('taskId') taskId: string,
    @Ctx() ctx: Context
  ): Promise<Task> {
    return this.service.disconnectUsers(data, taskId, ctx.user.id)
  }

  @Authorized()
  @Mutation(() => Task)
  async deleteTask (
    @Arg('id') taskId: string,
    @Arg('ownerId') ownerId: string,
    @Ctx() ctx: Context
  ): Promise<Task> {
    return this.service.delete(taskId, ctx.user.id, ownerId)
  }

  @Authorized()
  @Query(() => [Task])
  async findAllByUser (
    @Ctx() ctx: Context
  ): Promise<Task[]> {
    return this.service.findAllByUser(ctx.user.id)
  }
}
