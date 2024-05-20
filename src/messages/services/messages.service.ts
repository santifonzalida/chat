import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from '../entities/message.entity';
import { CreateMessageDto } from '../dtos/createMessage.dto';

@Injectable()
export class MessagesService {
    constructor(@InjectModel(Message.name) private messageModel: Model<Message>){}

    async createMessage(message: CreateMessageDto) {
        const create = await this.messageModel.create(message);
        return create;
    }

    async findAllMessages(id:string) {
        const allChats = await this.messageModel.find({ chat_id: {$all: [id]}});
        return allChats;
    }
}
