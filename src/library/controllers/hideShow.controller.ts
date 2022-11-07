import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Res,
} from "@nestjs/common";

import { LibraryService } from "../services/library.service";

@Controller("hide")
export class HideController {
    constructor(private readonly libraryService: LibraryService) {}

@Put("/:id")
    async hide(@Res() response, @Param("id") id) {
       
        return response.status(HttpStatus.CREATED).json(
            await this.libraryService.hide(id)
        );
    }
}

@Controller("show")
export class ShowController {
    constructor(private readonly libraryService: LibraryService) {}

@Put("/:id")
    async show(@Res() response, @Param("id") id) {

        return response.status(HttpStatus.CREATED).json(
            await this.libraryService.show(id)
        );
    }
}
