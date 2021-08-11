import { ObjectType, Field, ID, InputType } from 'type-graphql'
import { User } from '@components/user/user.dto'
import { MaxLength, MinLength } from 'class-validator'

@ObjectType()
export class Task {
  @Field((type) => ID)
  id: string

  @Field((type) => String)
  name: string

  @Field((type) => String, { nullable: true })
  description?: string | null

  @Field((type) => Date, { nullable: true })
  date?: Date | null

  @Field((type) => Boolean, { nullable: true })
  completed: boolean | null

  @Field((type) => User, { nullable: true })
  user?: User | null

  @Field(type => String, { nullable: true })
  userId?: String | null
}

@InputType()
export class TaskCreateInput {
  @Field(() => String)
  @MinLength(3)
  name: string

  @Field(() => String, { nullable: true })
  @MaxLength(50)
  description?: string | null

  @Field(() => Date, { nullable: true })
  date?: Date | null

  @Field(() => Boolean, { nullable: true })
  completed?: boolean | null
}

@InputType()
export class TaskUpdateInput {
  @Field(() => ID)
  id: string

  @Field(() => String, { nullable: true })
  @MinLength(3)
  name?: string

  @Field(() => String, { nullable: true })
  @MaxLength(50)
  description?: string | null

  @Field(() => Date, { nullable: true })
  date?: Date | null

  @Field(() => Boolean, { nullable: true })
  completed?: boolean | null
}
