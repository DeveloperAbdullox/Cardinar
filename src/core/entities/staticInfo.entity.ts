import { Column, Entity } from "typeorm";
import { BaseModel } from "../base.model";

@Entity('staticInfo')
export class StaticInfo extends BaseModel {
    @Column({ length: 128 })
    addres!: string

    @Column({ length: 16 })
    phoneNumber!: string

    @Column({ length: 128 })
    workingHours!: string

    @Column({ length: 64 })
    email!: string
}