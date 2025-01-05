import { Column, Entity } from "typeorm";
import BaseModel from "../../app/entities/base.model.entity";

@Entity()
export class System extends BaseModel {
    @Column()
    SystemName: string

    @Column()
    SystemURL: string

}