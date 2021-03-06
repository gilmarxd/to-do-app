import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class UserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
