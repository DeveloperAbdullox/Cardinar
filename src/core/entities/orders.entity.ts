import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseModel } from "../base.model";
import { User } from "./user.entity";
import { Branches } from "./branches.entity";
import { PaymentMethod } from "../enums/payment-method.enum";
import { OrderStatus } from "../enums/order-status.enum";
import { OrderItem } from "./orderItems.entity";

@Entity('orders')
export class Order extends BaseModel {
    @Column()
    userId!: number

    @ManyToOne(() => User, (u) => u.order)
    @JoinColumn({ name: 'userId' })
    user: User

    @Column()
    branchId!: number

    @ManyToOne(() => Branches, (b) => b.order)
    @JoinColumn({ name: 'branchId' })
    branch: Branches

    @Column({ length: 64 })
    fullName!: string

    @Column({ length: 16 })
    phoneNumber!: string

    @Column({ length: 64 })
    email?: string

    @Column({ type: 'boolean' })
    delivery!: boolean

    @Column({ type: 'enum', enum: PaymentMethod })
    paymentMethod!: PaymentMethod

    @Column({ type: 'enum', enum: OrderStatus })
    status!: OrderStatus

    @OneToMany(() => OrderItem, (oi) => oi.order)
    orderItem: OrderItem[]
}