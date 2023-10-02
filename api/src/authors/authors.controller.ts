import {
  Controller,
  Body,
  Post,
  Param,
  NotFoundException,
  Get,
} from '@nestjs/common';
import { CreateAuthorDto } from 'src/validate/create-author.dto';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(public authorsService: AuthorsService) {}

  @Post()
  createAuthor(@Body() body: CreateAuthorDto) {
    return this.authorsService.create(body);
  }

  @Get('/:id')
  async authorDetail(@Param('id') id: string) {
    const author = await this.authorsService.findOne(id);
    if (!author) {
      throw new NotFoundException('Author not found');
    }
    return author;
  }

  @Get()
  authorsList() {
    return this.authorsService.findAll();
  }
}
