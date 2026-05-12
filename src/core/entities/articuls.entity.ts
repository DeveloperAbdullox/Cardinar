import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseModel } from "../base.model";
import { Product } from "./product.entity";
import { CarModel } from "./carModels.entity";
import { CartItem } from "./cartItem.entity";
import { OrderItem } from "./orderItems.entity";

@Entity('articuls')
export class Articul extends BaseModel {
    @Column()
    productId!: number

    @ManyToOne(()=> Product, (p) => p.articul)
    @JoinColumn({ name: 'productId' })
    product: Product

    @Column()
    carModelId!: number

    @ManyToOne(() => CarModel, (c) => c.articul)
    @JoinColumn({ name: 'carModelId' })
    carModel: CarModel

    @OneToMany(() => CartItem, (ci) => ci.articul)
    cartItem: CartItem[]

    @OneToMany(() => OrderItem, (oi) => oi.articul)
    orderItem: OrderItem[]
}