import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseModel } from "../base.model";
import { Product } from "./product.entity";
import { Color } from "./colors.entity";

@Entity('productColors')
export class ProductColor extends BaseModel {
    @Column()
    productId!: number

    @ManyToOne(() => Product, (p) => p.productColor)
    @JoinColumn({ name: 'productId' })
    product: Product

    @Column()
    colorId!: number

    @ManyToOne(() => Color, (c) => c.productColor)
    @JoinColumn({ name: 'colorId' })
    color: Color
}