import { Project, ProjectCreateInput, ProjectUpdateInput } from './project.dto'
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { Context } from '@src/context'
import { projectRepo } from './project.repo'
import { OwnerError } from '@utils/auth'

@Resolver(Project)
export class ProjectResolver {
  private readonly projectRepo = projectRepo

  private readonly checkOwnership = async (projectId: string, ctx: Context) => {
    const project = await this.projectRepo.project(projectId)
    if (project && project.userId !== ctx.user.id) {
      throw OwnerError()
    }
  }

  @Authorized()
  @Mutation(() => Project)
  async createProject (
    @Arg('data') data: ProjectCreateInput,
    @Ctx() ctx: Context
  ): Promise<Project> {
    const userId = ctx.user.id

    return this.projectRepo.createProject(
      data,
      userId
    )
  }

  @Authorized()
  @Mutation(() => Project)
  async updateProject (
    @Arg('data') data: ProjectUpdateInput,
    @Ctx() ctx: Context
  ): Promise<Project> {
    await this.checkOwnership(data.id, ctx)

    return this.projectRepo.updateProject(data)
  }

  @Authorized()
  @Mutation(() => Project)
  async deleteProject (
    @Arg('id') projectId: string,
    @Ctx() ctx: Context
  ): Promise<Project> {
    await this.checkOwnership(projectId, ctx)

    return this.projectRepo.deleteProject(projectId)
  }

  @Authorized()
  @Query(() => [Project])
  async projects (
    @Ctx() ctx: Context
  ): Promise<Project[]> {
    return this.projectRepo.projects(ctx.user.id)
  }
}
