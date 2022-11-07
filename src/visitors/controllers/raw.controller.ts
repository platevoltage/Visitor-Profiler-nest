import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    Post,
    Res,
} from "@nestjs/common";
import { VisitorsService } from "../services/visitors.service";

@Controller("raw")
export class RawController {
    constructor(private readonly libraryService: VisitorsService) {}

    @Get()
    async findAll(@Res() response) {
        const visitors = await this.libraryService.findAll();
        return response.status(HttpStatus.OK).json(
            visitors,
        );
    }

    @Get("/:id")
    async findById(@Res() response, @Param("id") id) {
        const visitor = await this.libraryService.findOne(id);
        return response.status(HttpStatus.OK).json(visitor);
    }

    //   @Post()
    //   async createBook(@Res() response, @Body() book: Book) {
    //     const newBook = await this.libraryService.createBook(book);
    //     return response.status(HttpStatus.CREATED).json({
    //       newBook,
    //     });
    //   }

    //   @Get()
    //   async fetchAll(@Res() response) {
    //     const books = await this.libraryService.findAll();
    //     return response.status(HttpStatus.OK).json({
    //       books,
    //     });
    //   }

    //   @Get('/:id')
    //   async findById(@Res() response, @Param('id') id) {
    //     const book = await this.libraryService.findOne(id);
    //     return response.status(HttpStatus.OK).json({
    //       book,
    //     });
    //   }
}