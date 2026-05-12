import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseModel } from "../base.model";
import { User } from "./user.entity";

@Entity('requests')
export class Request extends BaseModel {
    @Column()
    userId?: number

    @ManyToOne(() => User, (u) => u.requests)
    @JoinColumn({ name: 'userId' })
    user: User

    @Column({ length: 64 })
    fullName!: string

    @Column({ length: 16 })
    phoneNumber!: string

    @Column({ length: 64 })
    email?: string

    @Column({ length: 2000 })
    comments?: string
}