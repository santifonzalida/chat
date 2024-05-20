import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MessagesService } from './messages/services/messages.service';

@Module({
  imports: [MessagesModule],
  controllers: [AppController],
  providers: [AppService, MessagesService],
})
export class AppModule {}
