import { Column, Entity, OneToMany } from "typeorm";
import { BaseModel } from "../base.model";
import { Parts } from "./parts.entity";

@Entity('materials')
export class Material extends BaseModel {
    @Column({ length: 64, unique: true })
    title: string

    @Column({ length: 512 })
    description?: string

    @OneToMany(() => Parts, (p) => p.material)
    part: Parts[]
}