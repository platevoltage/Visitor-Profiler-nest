import {
    Controller,
    Get,
    HttpStatus,
    Res,
} from "@nestjs/common";
import { VisitorsService } from "../services/visitors.service";

@Controller("count")
export class CountController {
    constructor(private readonly libraryService: VisitorsService) {}

    @Get()
    async findAll(@Res() response) {
 
        return response.status(HttpStatus.OK).json(
            await this.libraryService.count()
        );
    }
}
