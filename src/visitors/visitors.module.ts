import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { RawController } from "./controllers/raw.controller";
import { DataController } from "./controllers/data.controller";
import { Visitor } from "./models/visitor.model";
import { VisitorsService } from "./services/visitors.service";
import { HitController } from "./controllers/hit.controller";
import { HideController, ShowController } from "./controllers/hideShow.controller";
import { CountController } from "./controllers/count.controller";

@Module({
    imports: [SequelizeModule.forFeature([Visitor])],
    providers: [VisitorsService],
    controllers: [
        RawController,
        DataController,
        HitController,
        HideController,
        ShowController,
        CountController
    ],
})
export class VisitorsModule {}
