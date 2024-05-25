import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Message extends Document{
    @Prop()
    message: string;

    @Prop()
    chat_id: string;

    @Prop()
    sender_id: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);