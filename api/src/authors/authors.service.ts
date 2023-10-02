import { Injectable } from '@nestjs/common';
import { AuthorsRepository } from './authors.repository';

@Injectable()
export class AuthorsService {
  constructor(public authorsRepo: AuthorsRepository) {}

  async findOne(id: string) {
    return this.authorsRepo.findOne(id);
  }

  async findAll() {
    return this.authorsRepo.findAll();
  }

  async create(author: any) {
    return this.authorsRepo.create(author);
  }
}
