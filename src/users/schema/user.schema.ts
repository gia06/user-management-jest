import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"

export type UserDocument = User & Document

@Schema()
export class User {

    @Prop({required: true})
    nickname: string;

    @Prop({default: 'user' })
    role: string

    @Prop({required: true})
    firstname: string

    @Prop({required: true})
    lastname: string

    @Prop({required: true, minlength: 5})
    password: string

    @Prop({required: true})
    salt: string

    @Prop({default: false})
    deleted: boolean

    @Prop()
    deleted_at: string

    @Prop({default: 0})
    votes: number

    @Prop({default: []})
    upvotedBy: string[]

    @Prop({default: []})
    downvotedBy: string[]
      
}

export const UserSchema = SchemaFactory.createForClass(User)