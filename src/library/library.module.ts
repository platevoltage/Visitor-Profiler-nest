import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { RawController } from "./controllers/raw.controller";
import { DataController } from "./controllers/data.controller";
import { Visitor } from "./models/visitor.model";
import { LibraryService } from "./services/library.service";
import { HitController } from "./controllers/hit.controller";
import { HideController, ShowController } from "./controllers/hideShow.controller";

@Module({
    imports: [SequelizeModule.forFeature([Visitor])],
    providers: [LibraryService],
    controllers: [
        RawController,
        DataController,
        HitController,
        HideController,
        ShowController
    ],
})
export class LibraryModule {}
