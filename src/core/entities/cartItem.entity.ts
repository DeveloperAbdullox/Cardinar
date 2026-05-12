import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseModel } from "../base.model";
import { Product } from "./product.entity";
import { Articul } from "./articuls.entity";

@Entity('cartItems')
export class CartItem extends BaseModel {
    @Column()
    productId!: number

    @ManyToOne(() => Product, (p) => p.cartItem)
    @JoinColumn({ name: 'productId' })
    product: Product

    @Column()
    articulId!: number

    @ManyToOne(() => Articul, (a) => a.cartItem)
    @JoinColumn({ name: 'articulId' })
    articul: Articul

    @Column({ default: 1 })
    quantity!: number
}