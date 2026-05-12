import { Column, Entity, OneToMany } from "typeorm";
import { BaseModel } from "../base.model";
import { BranchType } from "../enums/branch-type.enum";
import { Order } from "./orders.entity";

@Entity('branches')
export class Branches extends BaseModel {
    @Column({ length: 128 })
    title!: string

    @Column({ length: 128 })
    address!: string

    @Column({ length: 64 })
    district?: string

    @Column({ length: 64 })
    region!: string

    @Column({ length: 16 })
    phoneNumber!: string

    @Column({ type: 'decimal', precision: 12, scale: 9 })
    longitude!: number

    @Column({ type: 'decimal', precision: 12, scale: 9 })
    latitude!: number

    @Column({  type: 'boolean', default: true })
    isActive!: boolean

    @Column({ type: 'enum', enum: BranchType })
    branchType: BranchType

    @OneToMany(() => Order, (o) => o.branch)
    order: Order[]
}