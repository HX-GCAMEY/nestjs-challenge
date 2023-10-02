import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({
    required: true,
    unique: true,
  })
  name: string;
  @Prop({
    required: true,
    unique: true,
  })
  isbn: string;
  @Prop({ type: Types.ObjectId, ref: 'Author', required: true })
  author: any;
}

export const BookSchema = SchemaFactory.createForClass(Book);
