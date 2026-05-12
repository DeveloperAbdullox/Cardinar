import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseModel } from "../base.model";
import { Category } from "./categories.entity";
import { Status } from "../enums/status.enum";
import { Image } from "./images.entity";
import { Articul } from "./articuls.entity";
import { ProductColor } from "./productColors.entity";
import { CartItem } from "./cartItem.entity";
import { Order } from "./orders.entity";
import { OrderItem } from "./orderItems.entity";

@Entity('products')
export class Product extends BaseModel {
    @Column({ name: 'categoryId' })
    categoryId!: number

    @ManyToOne(() => Category, (c) => c.products)
    @JoinColumn({ name: 'categoryId' })
    category: Category

    @Column({ length: 128, unique: true })
    title!: string

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    price!: number

    @Column({ type: 'text' })
    description?: Text

    @Column({ type: 'enum', enum: Status })
    status?: Status

    @Column({ type: 'boolean', default: false })
    isPremium!: boolean

    @OneToMany(() => Image, (i) => i.product)
    image: Image[]

    @OneToMany(() => Articul, (a) => a.product)
    articul: Articul[]

    @OneToMany(() => ProductColor, (pc) => pc.product)
    productColor: ProductColor[]

    @OneToMany(() => CartItem, (ci) => ci.product)
    cartItem: CartItem[]

    @OneToMany(() => OrderItem, (oi) => oi.product)
    orderItem: OrderItem[]
}