import { Column, Entity, OneToMany } from "typeorm";
import { BaseModel } from "../base.model";
import { ProductColor } from "./productColors.entity";
import { Parts } from "./parts.entity";

@Entity('colors')
export class Color extends BaseModel {
    @Column({ length: 64, unique: true })
    title!: string

    @Column({ length: 12, unique: true })
    color!: string

    @OneToMany(() => ProductColor, (pc) => pc.color)
    productColor: ProductColor[]

    @OneToMany(() => Parts, (p) => p.color)
    part: Parts[]
}