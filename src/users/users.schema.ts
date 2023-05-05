import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UsersDocument = HydratedDocument<Users>

@Schema()
export class Users {
    @Prop({ required: true })
    username: string

    @Prop({ required: true })
    email: string

    @Prop({ required: true })
    password: string

    @Prop({ required: false })
    role: string

    @Prop({ default: '' })
    avatar: string
}

export const UsersSchema = SchemaFactory.createForClass(Users)
