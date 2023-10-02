/* eslint-disable prettier/prettier */
// Data Transfer Object (DTO) for creating a book

import { IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  name: string;
  @IsString()
  author: string;
  @IsString()
  isbn: string;
}
