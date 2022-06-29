import { ObjectType, Field, ID, InputType } from 'type-graphql'
import { MaxLength, MinLength } from 'class-validator'
import { User } from '@components/user/user.dto'
import { IdArray } from '@components/utils/general'

@ObjectType()
export class Task {
  @Field(type => ID)
  id: string

  @Field(type => String)
  name: string

  @Field(type => String, { nullable: true })
  description?: string | null

  @Field(type => Date, { nullable: true })
  date?: Date | null

  @Field(type => Boolean, { nullable: true })
  completed: boolean | null

  @Field(type => ID)
  ownerId: string

  @Field(type => ID)
  projectId: string

  @Field(type => [User], { nullable: true })
    users?: User[]
}

@InputType()
export class TaskCreateInput {
  @Field(type => String)
  @MinLength(3)
  name: string

  @Field(type => String, { nullable: true })
  @MaxLength(50)
  description?: string | null

  @Field(type => Date, { nullable: true })
  date?: Date | null

  @Field(type => Boolean, { nullable: true })
  completed?: boolean | null

  @Field(type => [IdArray], { nullable: true })
    users?: IdArray[]
}

@InputType()
export class TaskUpdateInput {
  @Field(type => ID)
  id: string

  @Field(type => String, { nullable: true })
  @MinLength(3)
  name?: string

  @Field(type => String, { nullable: true })
  @MaxLength(50)
  description?: string | null

  @Field(type => Date, { nullable: true })
  date?: Date | null

  @Field(type => Boolean, { nullable: true })
  completed?: boolean | null
}
