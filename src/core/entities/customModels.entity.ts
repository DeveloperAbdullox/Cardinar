import { Column, Entity, OneToMany } from "typeorm";
import { BaseModel } from "../base.model";
import { Category } from "../enums/category.enum";
import { CustomProduct } from "./customProducts.entity";

@Entity('customModels')
export class CustomModel extends BaseModel {
    @Column({ type: 'enum', enum: Category })
    category!: Category

    @Column({ length: 128, unique: true })
    title!: string

    @Column({ length: 256 })
    image!: string

    @OneToMany(() => CustomProduct, (cp) => cp.model)
    customProduct: CustomProduct[]
}