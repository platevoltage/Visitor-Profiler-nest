import {
    Controller,
    Get,
    HttpStatus,
    Param,
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
}
