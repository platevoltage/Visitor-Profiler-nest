import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    Post,
    Res,
} from "@nestjs/common";
import { LibraryService } from "../services/library.service";

@Controller("count")
export class CountController {
    constructor(private readonly libraryService: LibraryService) {}

    @Get()
    async findAll(@Res() response) {
 
        return response.status(HttpStatus.OK).json(
            await this.libraryService.count()
        );
    }


}
