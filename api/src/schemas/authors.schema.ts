import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthorDocument = HydratedDocument<Author>;

@Schema()
export class Author {
  @Prop({
    required: true,
    unique: true,
  })
  first_name: string;
  @Prop({
    required: true,
    unique: true,
  })
  last_name: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
