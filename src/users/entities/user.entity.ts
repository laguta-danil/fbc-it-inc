import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { FileEntity } from "../../files/entities/file.entity";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => FileEntity, (file) => file.user)
    files: FileEntity[];
}
