import { Task, TaskCreateInput } from './task.dto'
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { Context } from '@src/context'
import { taskRepo } from './task.repo'
import { checkAuth } from '@utils/auth'

@Resolver(Task)
export class TaskResolver {
  private readonly taskRepo = taskRepo

  @Mutation(() => Task)
  async createTask (
    @Arg('data') data: TaskCreateInput,
    @Ctx() ctx: Context
  ): Promise<Task> {
    await checkAuth(ctx)

    const userId = ctx.user?.id
    return this.taskRepo.createTask(
      data,
      userId
    )
  }
}
