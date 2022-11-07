import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LibraryModule } from "./library/library.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "password",
            database: "visitor_db",
            autoLoadModels: true,
            synchronize: true,
            define: {
                underscored: true,
                createdAt: "created_at",
                updatedAt: "updated_at",
            },
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, "..", "dist/views"),
        }),
        LibraryModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
