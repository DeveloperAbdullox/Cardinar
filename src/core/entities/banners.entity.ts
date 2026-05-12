import { Column, Entity } from "typeorm";
import { BaseModel } from "../base.model";

@Entity('banners')
export class Banner extends BaseModel {
    @Column({ length: 128 })
    title!: string

    @Column({ length: 256 })
    image!: string

    @Column({ type: 'boolean' })
    isActive!: boolean
}