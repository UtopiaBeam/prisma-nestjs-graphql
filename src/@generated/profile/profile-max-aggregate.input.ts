import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProfileMaxAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    userId?: true;

    @Field(() => Boolean, { nullable: true })
    dummy?: true;
}