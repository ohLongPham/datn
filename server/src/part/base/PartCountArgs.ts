/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PartWhereInput } from "./PartWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PartCountArgs {
  @ApiProperty({
    required: false,
    type: () => PartWhereInput,
  })
  @Field(() => PartWhereInput, { nullable: true })
  @Type(() => PartWhereInput)
  where?: PartWhereInput;
}

export { PartCountArgs as PartCountArgs };
