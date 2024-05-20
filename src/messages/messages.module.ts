import { Module } from '@nestjs/common';
import { MessagesService } from './services/messages.service';
import { MessagesController } from './controllers/messages/messages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './entities/message.entity';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
  imports: [MongooseModule.forFeature([{name: Message.name, schema: MessageSchema}])]
})
export class MessagesModule {}
