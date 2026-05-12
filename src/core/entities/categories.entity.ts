import { Column, Entity, OneToMany } from "typeorm";
import { BaseModel } from "../base.model";
import { Product } from "./product.entity";

@Entity('categories')
export class Category extends BaseModel {
    @Column({ length: 128, unique: true })
    title!: string

    @OneToMany(() => Product, (p) => p.category)
    products: Product[]
}