import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from '../entities/chat.entity';
import { CreateChatDto } from '../dtos/chat.dto';

@Injectable()
export class ChatService {
    constructor(@InjectModel(Chat.name) private chatModel: Model<Chat>){}

   async createChat(createChatDto: CreateChatDto) {
    const create = await this.chatModel.create(createChatDto);
    return create;
   }

   async findAllChats(id: string) {
    const findAll = await this.chatModel.find({members: {$all: [id]}});
    return findAll;
   }
}
