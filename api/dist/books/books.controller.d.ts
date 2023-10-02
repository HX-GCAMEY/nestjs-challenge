/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateBookDto } from 'src/validate/create-book.dto';
import { BooksService } from './books.service';
export declare class BooksController {
    booksService: BooksService;
    constructor(booksService: BooksService);
    booksList(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/books.schema").Book> & import("../schemas/books.schema").Book & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createBook(body: CreateBookDto): Promise<import("../schemas/books.schema").Book>;
    bookDetail(isbn: string): Promise<{
        name: string;
        isbn: string;
        author: string;
    }>;
}
