import { ObjectType, InputType, Field, ID } from 'type-graphql'
import { MinLength, MaxLength } from 'class-validator'
import { Task } from '@components/task/task.dto'
import { User } from '@components/user/user.dto'
import { IdArray } from '@components/utils/general'

@ObjectType()
export class SubTask {
  @Field(type => ID)
  id: string

  @Field(type => String)
  name: string

  @Field(type => String, { nullable: true })
  description?: string | null

  @Field(type => Boolean, { nullable: true })
  completed?: boolean | null

  @Field(type => Date, { nullable: true })
  date?: Date | null

  @Field(type => Task, { nullable: true })
  task?: Task

  @Field(type => ID)
  taskId: string

  @Field(type => ID)
  ownerId: string

  @Field(type => [User], { nullable: true })
    users?: User[]
}

@InputType()
export class SubTaskCreateInput {
  @Field(type => String)
  @MinLength(3)
  name: string

  @MaxLength(50)
  @Field(type => String, { nullable: true })
  description?: string | null

  @Field(type => Boolean, { nullable: true })
  completed?: boolean | null

  @Field(type => Date, { nullable: true })
  date?: Date | null

  @Field(type => [IdArray], { nullable: true })
    users?: IdArray[]
}

@InputType()
export class SubTaskUpdateInput {
  @Field(type => ID)
  id: string

  @Field(type => String, { nullable: true })
  @MinLength(3)
  name?: string

  @Field(type => Boolean, { nullable: true })
  completed?: boolean | null

  @MaxLength(50)
  @Field(type => String, { nullable: true })
  description?: string | null

  @Field(type => Date, { nullable: true })
  date?: Date | null
}
