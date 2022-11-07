import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'visitor_db',
      autoLoadModels: true,
      synchronize: true,
      define: {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    }),
    LibraryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
