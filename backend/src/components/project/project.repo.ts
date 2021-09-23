import { prisma } from '@src/context'
import { Project, ProjectCreateInput, ProjectUpdateInput } from './project.dto'

class ProjectRepo {
  private readonly prisma = prisma

  async createProject (
    data: ProjectCreateInput,
    userId: string
  ): Promise<Project> {
    return this.prisma.project.create({
      data: {
        ...data,
        user: { connect: { id: userId } }
      }
    })
  }

  async updateProject (
    data: ProjectUpdateInput
  ): Promise<Project> {
    return this.prisma.project.update({
      where: {
        id: data.id
      },
      data
    })
  }

  async deleteProject (
    id: string
  ): Promise<Project> {
    return this.prisma.project.delete({
      where: {
        id
      }
    })
  }

  async project (
    id: string
  ): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: {
        id
      }
    })
  }

  async projects (
    userId: string
  ): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: {
        userId
      }
    })
  }
}

export const projectRepo = new ProjectRepo()
