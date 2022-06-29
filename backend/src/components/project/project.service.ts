import { IdArray } from '@components/utils/general'
import { Project, ProjectCreateInput, ProjectUpdateInput } from './project.dto'
import { projectRepo } from './project.repo'

class ProjectService {
  private readonly repo = projectRepo

  async create (
    data: ProjectCreateInput,
    ownerId: string
  ): Promise<Project> {
    return this.repo.createProject(
      data,
      ownerId
    )
  }

  async update (
    data: ProjectUpdateInput,
    ownerId: string
  ): Promise<Project> {
    return this.repo.updateProject(data, ownerId)
  }

  async connectUsers (
    data: IdArray[],
    projectId: string,
    ownerId: string
  ): Promise<Project> {
    return this.repo.connectUsers(data, projectId, ownerId)
  }

  async disconnectUsers (
    data: IdArray[],
    projectId: string,
    ownerId: string
  ): Promise<Project> {
    return this.repo.disconnectUsers(data, projectId, ownerId)
  }

  async delete (
    id: string,
    userId: string,
    ownerId: string
  ): Promise<Project> {
    if (userId === ownerId) {
      return this.repo.deleteProject(id, ownerId)
    }

    return this.disconnectUsers([{ id: userId }], id, ownerId)
  }

  async findAllByUser (
    userId: string
  ): Promise<Project[]> {
    return this.repo.projects(userId)
  }

  async find (
    id: string
  ): Promise<Project | null> {
    return this.repo.project(id)
  }
}

export const projectService = new ProjectService()
