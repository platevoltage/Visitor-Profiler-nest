import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LibraryController } from './controllers/library.controller';
import { Book } from './models/book.model';
import { Visitor } from './models/visitor.model';
import { LibraryService } from './services/library.service';

@Module({
  imports: [SequelizeModule.forFeature([Visitor])],
  providers: [LibraryService],
  controllers: [LibraryController],
})
export class LibraryModule {}
