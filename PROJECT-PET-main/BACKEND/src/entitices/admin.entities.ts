import { Type } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export default class Admin{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    username : string;

    @Column()
    password : string;

    @Column()
    email : string;

    @Column()
    phone : string
}