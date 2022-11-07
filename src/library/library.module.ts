import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { RawController } from "./controllers/raw.controller";
import { DataController } from "./controllers/data.controller";
import { Book } from "./models/book.model";
import { Visitor } from "./models/visitor.model";
import { LibraryService } from "./services/library.service";

@Module({
    imports: [SequelizeModule.forFeature([Visitor])],
    providers: [LibraryService],
    controllers: [
        RawController,
        DataController
    ],
})
export class LibraryModule {}
