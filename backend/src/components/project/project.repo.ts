import { IdArray } from '@components/utils/general'
import { prisma } from '@src/context'
import { omit } from 'ramda'
import { Project, ProjectCreateInput, ProjectUpdateInput } from './project.dto'

class ProjectRepo {
  private readonly prisma = prisma

  async createProject (
    data: ProjectCreateInput,
    ownerId: string
  ): Promise<Project> {
    const connectUsers = data?.users || []

    return this.prisma.project.create({
      data: {
        ...omit(['users'], data),
        ownerId,
        users: {
          connect: [...connectUsers, { id: ownerId }]
        }
      }
    })
  }

  async updateProject (
    data: ProjectUpdateInput,
    ownerId: string
  ): Promise<Project> {
    return this.prisma.project.update({
      where: {
        projectId_ownerId: {
          id: data.id,
          ownerId
        }
      },
      data
    })
  }

  async connectUsers (
    data: IdArray[],
    id: string,
    ownerId: string
  ): Promise<Project> {
    return this.prisma.project.update({
      where: {
        projectId_ownerId: {
          id,
          ownerId
        }
      },
      data: {
        users: {
          connect: [...data]
        }
      }
    })
  }

  async disconnectUsers (
    data: {id: string}[],
    id: string,
    ownerId: string
  ): Promise<Project> {
    return this.prisma.project.update({
      where: {
        projectId_ownerId: {
          id,
          ownerId
        }
      },
      data: {
        users: {
          disconnect: [...data]
        }
      }
    })
  }

  async deleteProject (
    id: string,
    ownerId: string
  ): Promise<Project> {
    return this.prisma.project.delete({
      where: {
        projectId_ownerId: {
          id,
          ownerId
        }
      }
    })
  }

  async project (
    id: string
  ): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: {
        id
      },
      include: {
        users: true
      }
    })
  }

  async projects (
    id: string
  ): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: {
        users: {
          some: {
            id
          }
        }
      }
    })
  }
}

export const projectRepo = new ProjectRepo()
