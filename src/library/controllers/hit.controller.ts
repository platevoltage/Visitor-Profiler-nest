import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    Post,
    Res,
} from "@nestjs/common";
import { Visitor } from "../models/visitor.model";
import { LibraryService } from "../services/library.service";

@Controller("hit")
export class HitController {
    constructor(private readonly libraryService: LibraryService) {}


@Post()
    async createBook(@Res() response, @Body() visitor: Visitor) {
        const newHit = await this.libraryService.create(visitor);
        return response.status(HttpStatus.CREATED).json(
            newHit,
        );
    }

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
