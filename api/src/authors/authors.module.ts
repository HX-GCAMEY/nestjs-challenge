import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { AuthorsRepository } from './authors.repository';
import { AuthorSchema } from '../schemas/authors.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]),
  ],
  controllers: [AuthorsController],
  providers: [AuthorsRepository, AuthorsService],
})
export class AuthorsModule {}
