import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMessageDto } from 'src/messages/dtos/createMessage.dto';
import { MessagesService } from 'src/messages/services/messages.service';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {}

    @Post('create-message')
    createMessage(@Body() createMessageDto: CreateMessageDto) {
        return this.messagesService.createMessage(createMessageDto);
    }

    @Get(':id')
    getAllMessagesByChatId(@Param('id') id: string) {
        return this.messagesService.findAllMessages(id);
    }

}
