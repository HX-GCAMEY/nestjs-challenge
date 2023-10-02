import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../schemas/books.schema';

@Injectable()
export class BooksRepository {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async findOne(isbn: string) {
    const book = await this.bookModel
      .findOne({ isbn })
      .populate('author')
      .exec();

    return {
      name: book.name,
      isbn: book.isbn,
      author: `${book.author.first_name} ${book.author.last_name}`,
    };
  }

  async findAll() {
    return await this.bookModel.find().exec();
  }

  async create(book: any): Promise<Book> {
    return await this.bookModel.create(book);
  }
}
