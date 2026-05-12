import { BaseModel } from "src/core/base.model";
import { Column, Entity, OneToMany } from "typeorm";
import { Request } from "./requests.entity";
import { Order } from "./orders.entity";

@Entity('users')
export class User extends BaseModel {
    @Column({ length: 64 })
    fullName!: string

    @Column({ length: 16, unique: true })
    phoneNumber!: string

    @Column({ length: 64, unique: true })
    email!: string

    @Column({ length: 128 })
    password!: string

    @Column({ default: false })
    isAdmin!: boolean

    @OneToMany(() => Request, (r) => r.user)
    requests: Request[]

    @OneToMany(() => Order, (o) => o.user)
    order: Order[]
}