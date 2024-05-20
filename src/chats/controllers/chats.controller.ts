import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ChatService } from '../services/chat.service';
import { CreateChatDto } from '../dtos/chat.dto';


@ApiTags('chats')
@Controller('chats')
export class ChatController {
  constructor(private readonly chatsService: ChatService) {}

  @Post('create-chat')
  @ApiResponse({
    status: 201,
    description: 'The chat has been successfully created.',
  })
  async createChat(@Body() createChatDto: CreateChatDto) {
    return await this.chatsService.createChat(createChatDto);
  }

  @Get(':id')
  async getAllChatsByUserId(@Param(':id') id: string) {
    return await this.chatsService.findAllChats(id);
  }
}