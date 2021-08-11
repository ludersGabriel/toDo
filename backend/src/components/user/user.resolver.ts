import { User, UserRegisterInput } from './user.dto'
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { Context } from '@src/context'
import { hash } from '@utils/auth'
import { userRepo } from './user.repo'

@Resolver(User)
export class UserResolver {
  private readonly userRepo = userRepo

  @Mutation(() => User)
  async registerUser (
    @Arg('data') data: UserRegisterInput
  ): Promise<User> {
    const hashedPassword = await hash(data.password)

    return this.userRepo.registerUser(
      {
        email: data.email,
        name: data.name,
        password: hashedPassword
      }
    )
  }

  @Authorized()
  @Mutation(() => User, { nullable: true })
  async deleteUser (
    @Arg('id') id: string
  ): Promise<User> {
    return this.userRepo.deleteUser(id)
  }

  @Authorized()
  @Query(() => User, { nullable: true })
  async user (
    @Ctx() ctx: Context
  ): Promise<User | null> {
    return this.userRepo.user(ctx.user.id)
  }

  @Authorized('admin')
  @Query(() => [User])
  async users (): Promise<User[]> {
    return this.userRepo.users()
  }
}
