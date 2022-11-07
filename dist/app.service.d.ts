import { Visitor } from './models/visitor.model';
export declare class AppService {
    private visitorModel;
    constructor(visitorModel: typeof Visitor);
    getHello(): string;
    findAll(): Promise<Visitor[]>;
}
