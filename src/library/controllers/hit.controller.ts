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
    async hit(@Res() response, @Body() visitor: Visitor) {
        const newHit = await this.libraryService.create(visitor);
        return response.status(HttpStatus.CREATED).json(
            newHit,
        );
    }
}
