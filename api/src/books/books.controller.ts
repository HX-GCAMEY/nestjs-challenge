import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from 'src/validate/create-book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(public booksService: BooksService) {}

  @Get()
  booksList() {
    return this.booksService.findAll();
  }

  @Post()
  createBook(@Body() body: CreateBookDto) {
    return this.booksService.create(body);
  }

  @Get('/:isbn')
  async bookDetail(@Param('isbn') isbn: string) {
    const book = await this.booksService.findOne(isbn);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }
}
