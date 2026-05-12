import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseModel } from "../base.model";
import { Product } from "./product.entity";

@Entity('images')
export class Image extends BaseModel{
    @Column()
    productId!: number

    @ManyToOne(() => Product, (p) => p.image)
    @JoinColumn({ name: 'productId' })
    product: Product

    @Column({ length: 256 })
    image!: string

    @Column()
    position!: number
}