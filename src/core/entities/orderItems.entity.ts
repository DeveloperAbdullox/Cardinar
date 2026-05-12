import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseModel } from "../base.model";
import { Order } from "./orders.entity";
import { Product } from "./product.entity";
import { Articul } from "./articuls.entity";

@Entity('orderItems')
export class OrderItem extends BaseModel {
    @Column()
    orderId!: number

    @ManyToOne(() => Order, (o) => o.orderItem)
    @JoinColumn({ name: 'orderId' })
    order: Order

    @Column()
    productId!: number

    @ManyToOne(() => Product, (p) => p.orderItem)
    @JoinColumn({ name: 'productId' })
    product: Product

    @Column()
    articulId!: number

    @ManyToOne(() => Articul, (a) => a.orderItem)
    @JoinColumn({ name: 'articulId' })
    articul: Articul

    @Column({ default: 1 })
    quantity!: number
}