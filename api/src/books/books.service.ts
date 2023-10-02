import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';

@Injectable()
export class BooksService {
  constructor(public booksRepo: BooksRepository) {}

  async findOne(isbn: string) {
    return this.booksRepo.findOne(isbn);
  }

  async findAll() {
    return this.booksRepo.findAll();
  }

  async create(book: any) {
    return this.booksRepo.create(book);
  }
}
