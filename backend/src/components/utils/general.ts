import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class IdArray {
  @Field(type => ID)
    id: string
}
