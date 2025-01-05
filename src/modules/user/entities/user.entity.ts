import BaseModel from "src/modules/app/entities/base.model.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends BaseModel {
    @Column()
    fullName: string

    @Column()
    email: string

    @Column({select:false})
    password: string
}