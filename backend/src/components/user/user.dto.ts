import { ObjectType, Field, ID, InputType } from 'type-graphql'
import { IsEmail, MinLength } from 'class-validator'

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

  @Field()
  email: string

  @Field()
  name: string

  @Field()
  count: number

  @Field()
  role: string
}

@InputType()
export class UserRegisterInput {
  @Field()
  @IsEmail()
  email: string

  @Field()
  @MinLength(8)
  password: string

  @Field() name: string
}

@InputType()
export class UserUpdateInput {
  @Field(() => ID) id: string

  @Field({ nullable: true }) name?: string

  @Field({ nullable: true })
  @IsEmail()
  email?: string

  @Field({ nullable: true })
  @MinLength(8)
  password?: string

  @Field({ nullable: true })
  count?: number
}
