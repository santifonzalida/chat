import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Chat extends Document  {
  @Prop()
  members: Array<string>;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);