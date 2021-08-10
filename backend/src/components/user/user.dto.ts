import { ObjectType, Field, ID, InputType } from 'type-graphql'
import { IsEmail, MinLength } from 'class-validator'
import { Task } from '@components/task/task.dto'

@ObjectType()
export class PrivateUser {
  @Field(() => ID)
  id: string

  @Field()
  email: string

  @Field()
  name: string

  @Field()
  count: number

  @Field()
  role: string

  @Field()
  password: string
}

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string

  @Field((type) => String)
  email: string

  @Field((type) => String)
  name: string

  @Field((type) => Number)
  count: number

  @Field((type) => String)
  role: string

  @Field((type) => [Task], { nullable: true })
  tasks?: Task[]
}

@InputType()
export class UserRegisterInput {
  @Field((type) => String)
  @IsEmail()
  email: string

  @Field((type) => String)
  @MinLength(8)
  password: string

  @Field((type) => String) name: string
}

@InputType()
export class UserUpdateInput {
  @Field(() => ID) id: string

  @Field((type) => String, { nullable: true })
  name?: string

  @Field({ nullable: true })
  @IsEmail()
  email?: string

  @Field({ nullable: true })
  @MinLength(8)
  password?: string

  @Field({ nullable: true })
  count?: number
}
