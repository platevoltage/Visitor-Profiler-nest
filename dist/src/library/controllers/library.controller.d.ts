import { LibraryService } from '../services/library.service';
export declare class LibraryController {
    private readonly libraryService;
    constructor(libraryService: LibraryService);
    findAll(response: any): Promise<any>;
}
