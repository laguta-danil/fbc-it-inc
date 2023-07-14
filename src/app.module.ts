import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as process from "process";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileEntity } from "./files/entities/file.entity";
import { UserEntity } from "./users/entities/user.entity";
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath:  join(__dirname, '..', 'uploads'),
        }),
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.SQL_DB_HOST,
            port: 5432,
            username: process.env.SQL_DB_USER,
            password: process.env.SQL_DB_PASSWORD,
            database: process.env.SQL_DB_NAME,
            entities: [UserEntity, FileEntity],
            synchronize: true,
        }),
        UsersModule,
        FilesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
