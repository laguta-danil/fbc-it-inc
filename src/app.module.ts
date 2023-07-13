import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileEntity } from "./files/entities/file.entity";
import { UserEntity } from "./users/entities/user.entity";
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '123123',
        database: 'nestd',
        entities: [UserEntity, FileEntity],
        synchronize: true,
    }), UsersModule, FilesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
