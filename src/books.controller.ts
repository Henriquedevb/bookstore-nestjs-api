import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Book } from './book.model';
import { BooksService } from './books.service';

@Controller('books')
export class BookController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Book> {
    return this.booksService.getOne(params.id);
  }

  @Post()
  async createProduct(@Body() product: Book) {
    return this.booksService.createBook(product);
  }

  @Put()
  async updateProduct(@Body() product: Book): Promise<[number, Book[]]> {
    return this.booksService.updateBook(product);
  }

  @Delete(':id')
  async deleteProduct(@Param() params) {
    this.booksService.deleteBook(params.id);
  }
}
