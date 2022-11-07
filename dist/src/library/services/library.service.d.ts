import { Visitor } from '../models/visitor.model';
export declare class LibraryService {
    private visitorModel;
    constructor(visitorModel: typeof Visitor);
    findAll(): Promise<Visitor[]>;
}
