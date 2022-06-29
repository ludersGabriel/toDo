import { SubTask, SubTaskCreateInput, SubTaskUpdateInput } from './subTask.dto'
import { Arg, Ctx, Authorized, Mutation, Query, Resolver } from 'type-graphql'
import { Context } from '@src/context'

import { subTaskService } from './subTask.service'
import { IdArray } from '@components/utils/general'

@Resolver(SubTask)
export class SubTaskResolver {
  private readonly service = subTaskService

  @Authorized()
  @Mutation(() => SubTask)
  async createSubTask (
    @Arg('data') data: SubTaskCreateInput,
    @Arg('taskId') taskId: string,
    @Ctx() ctx: Context
  ): Promise<SubTask> {
    return this.service.create(data, taskId, ctx.user.id)
  }

  @Authorized()
  @Mutation(() => SubTask)
  async updateSubTask (
    @Arg('data') data: SubTaskUpdateInput,
    @Ctx() ctx: Context
  ): Promise<SubTask> {
    return this.service.update(data, ctx.user.id)
  }

  @Authorized()
  @Mutation(() => SubTask)
  async connectUsers (
    @Arg('data', _ => [IdArray]) data: IdArray[],
    @Arg('subTaskId') subTaskId: string,
    @Ctx() ctx: Context
  ): Promise<SubTask> {
    return this.service.connectUsers(data, subTaskId, ctx.user.id)
  }

  @Authorized()
  @Mutation(() => SubTask)
  async disconnectUsers (
    @Arg('data', _ => [IdArray]) data: IdArray[],
    @Arg('subTaskId') subTaskId: string,
    @Ctx() ctx: Context
  ): Promise<SubTask> {
    return this.service.disconnectUsers(data, subTaskId, ctx.user.id)
  }

  @Authorized()
  @Mutation(() => SubTask)
  async deleteSubTask (
    @Arg('id') subTaskId: string,
    @Arg('ownerId') ownerId: string,
    @Ctx() ctx: Context
  ): Promise<SubTask> {
    return this.service.delete(subTaskId, ctx.user.id, ownerId)
  }

  @Authorized()
  @Query(() => [SubTask])
  async findAllByUserTask (
    @Arg('taskId') taskId: string,
    @Ctx() ctx: Context
  ): Promise<SubTask[]> {
    return this.service.findAllByTask(taskId, ctx.user.id)
  }
}
