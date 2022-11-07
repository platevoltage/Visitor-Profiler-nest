import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateOptions, Op } from "sequelize";
import { Book } from "../models/book.model";
import { Visitor } from "../models/visitor.model";

@Injectable()
export class LibraryService {
    constructor(
    @InjectModel(Visitor)
    private visitorModel: typeof Visitor,
    ) {}

    async findAll(options?: object): Promise<Visitor[]> {
        return this.visitorModel.findAll(options);
    }
    async findOne(id: string): Promise<Visitor> {
        return this.visitorModel.findByPk(id ,{
            
        });
    }
    async hide(id: string) {
        return this.visitorModel.update(
            { hidden: true },
            { where: {id} }, 
        );
    }
    async show(id: string) {
        return this.visitorModel.update(
            { hidden: false },
            { where: {id} }, 
        );
    }
    async create(data: Visitor ): Promise<Visitor>  {
        
        return this.visitorModel.create({...data});
    }
  

    //   async findAll(): Promise<Book[]> {
    //     return this.bookModel.findAll();
    //   }

    //   findOne(id: string): Promise<Book> {
    //     return this.bookModel.findOne({
    //       where: {
    //         id,
    //       },
    //     });
    //   }

    //   async createBook(book: Book): Promise<Book> {
    //     return this.bookModel.create(book);
    //   }
}
