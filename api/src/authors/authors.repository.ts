import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from '../schemas/authors.schema';

@Injectable()
export class AuthorsRepository {
  constructor(
    @InjectModel('Author') private readonly authorModel: Model<Author>,
  ) {}

  async findOne(id: string) {
    return await this.authorModel.findById(id).exec();
  }

  async findAll() {
    return await this.authorModel.find().exec();
  }

  async create(author: any): Promise<Author> {
    return await this.authorModel.create(author);
  }
}
