import { IsNotEmpty, IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateChatDto {
  @ApiProperty()
  @IsArray()
  members: Array<string>;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}