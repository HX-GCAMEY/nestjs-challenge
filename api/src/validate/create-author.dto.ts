/* eslint-disable prettier/prettier */
// Data Transfer Object (DTO) for creating a book

import { IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  first_name: string;
  @IsString()
  last_name: string;
}
