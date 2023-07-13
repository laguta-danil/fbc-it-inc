import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { FileEntity } from "./entities/file.entity";
import { FilesService } from './files.service';
import { FilesController } from './files.controller';

@Module({
  controllers: [FilesController],
  providers: [FilesService]
})
export class FilesModule {}
