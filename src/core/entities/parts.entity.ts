import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseModel } from "../base.model";
import { Category } from "../enums/category.enum";
import { Part } from "../enums/part.enum";
import { Material } from "./materials.entity";
import { Color } from "./colors.entity";

@Entity('parts')
export class Parts extends BaseModel {
    @Column({ type: 'enum', enum: Category })
    category!: Category

    @Column({ type: 'enum', enum:  Part })
    part!: Part

    @Column({ length: 128 })
    title?: string

    @Column()
    materialId!: number

    @ManyToOne(() => Material, (m) => m.part)
    @JoinColumn({ name: 'materialId' })
    material: Material

    @Column()
    colorId!: number

    @ManyToOne(() => Color, (c) => c.part)
    @JoinColumn({ name: 'colorId' })
    color: Color

    @Column({ length: 256 })
    image!: string
}