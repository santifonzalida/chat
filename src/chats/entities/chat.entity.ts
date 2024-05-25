import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Chat extends Document  {
  @Prop()
  members: Array<string>;

  @Prop()
  name: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);